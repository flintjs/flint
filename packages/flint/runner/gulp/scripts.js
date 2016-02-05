import { event } from './index'
import gulp from 'gulp'
import babel from './lib/gulp-babel'
import { $, SCRIPTS_GLOB, out, pipefn, isBuilding, isSourceMap, serializeCache } from './lib/helpers'
import merge from 'merge-stream'
import multipipe from 'multipipe'
import flintTransform from 'flint-transform'
import bridge from '../bridge'
import cache from '../cache'
import builder from '../builder'
import bundler from '../bundler'
import scanner from './scanner'
import superStream from './lib/superStream'
import dirAddStream from './lib/dirAddStream'
import opts from '../opts'
import onMeta from './lib/onMeta'
import writeStyle from '../lib/writeStyle'
import { getBabelConfig } from '../helpers'
import { findBabelRuntimeRequires } from '../lib/findRequires'
import { _, fs, path, debounce, p, rm, handleError, logError, log } from '../lib/fns'

const hasFinished = () => hasBuilt() && opts('hasRunInitialInstall')
const hasBuilt = () => opts('hasRunInitialBuild')

export function scripts({ inFiles, outFiles, userStream }) {
  let State = {
    curFile: null,
    lastError: null,
    lastSaved: {},
    loaded: 0,
    total: inFiles && inFiles.length || 0
  }

  let scripts = userStream || gulp.src(SCRIPTS_GLOB)
    .pipe($.if(!isBuilding(), $.watch(SCRIPTS_GLOB, { readDelay: 1 })))
    .pipe($.if(file => file.event == 'unlink', $.ignore.exclude(true)))

  const getAllImports = (src, imports) => [].concat(findBabelRuntimeRequires(src), imports)
  const scanNow = () => opts('build') || opts('watch') || !opts('hasRunInitialBuild')
  const originalPath = loc => {
    const is = loc.replace('/.flint/.internal/out', '').replace('/.flint/.internal/deps/internal', '')
    console.log('>>>',is)
    return is
  }

  return (isBuilding() ?
    scripts :
    merge(scripts, dirAddStream(opts('appDir')), superStream.stream)
  )
      .pipe($.if(buildCheck, $.ignore.exclude(true)))
      .pipe(pipefn(reset))
      .pipe($.plumber(catchError))
      .pipe(pipefn(setLastFile))
      .pipe(scanner('pre'))
      .pipe($.sourcemaps.init())
      .pipe(babel(getBabelConfig({
        log,
        onMeta,
        writeStyle
      })))
      .pipe(pipefn(processDependencies))
      .pipe(pipefn(updateCache)) // right after flint
      .pipe($.if(!userStream, $.rename({ extname: '.js' })))
      // is internal
      .pipe($.if(file => file.isInternal,
        multipipe(
          pipefn(removeNewlyInternal),
          pipefn(markFileSuccess), // before writing to preserve path
          gulp.dest(p(opts('depsDir'), 'internal')),
          pipefn(bundle),
          pipefn(buildDone),
          $.ignore.exclude(true)
        )
      ))
      .pipe(pipefn(markFileSuccess))
      .pipe($.sourcemaps.write('.'))
      .pipe($.if(checkWriteable, gulp.dest(opts('outDir'))))
      .pipe(pipefn(afterWrite))
      // temporary bugfix because gulp doesnt work well with watch (pending gulp 4)
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())
      .pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn()).pipe(pipefn())


  function markDone(file) {
    State.loaded++

    const done = State.loaded == State.total
    log.gulp('markDone', State.total, '/', State.loaded, done)

    // check if done, only run once
    if (done && !opts('hasRunInitialBuild')) {
      opts.set('finishingFirstBuild', true)
      file.finishingFirstBuild = true
    }
  }

  // only do on first run
  function buildCheck(file) {
    // BUGFIX gulp sends deleted files through here, this filters them
    if (!file.contents)
      return true

    // already done with first build
    if (hasBuilt()) return false

    // hide behind cached flag for now
    if (!opts('cached')) {
      markDone(file)
      return false
    }

    const prevFile = cache.getPrevious(file.path)
    if (!prevFile) return false

    let outMTime, srcMTime

    // read srcfile
    try { srcMTime = fs.statSync(file.path).mtime }
    catch(e) { return false }

    // read outfile
    try {
      const relPath = path.relative(opts('appDir'), file.path)
      const outFile = prevFile.isInternal
        ? path.join(opts('deps').dir, 'internal', relPath)
        : path.join(opts('outDir'), relPath)

      outMTime = fs.statSync(outFile).mtime
    }
    catch(e) {
      log.gulp('buildCheck', 'out file removed')
      markDone(file)
      return false
    }

    // final check
    const goodBuild = +outMTime > +srcMTime
    const goodCache = prevFile.added > srcMTime
    if (!goodBuild || !goodCache) return false
    return finish(true)

    function finish(restored = false) {
      markDone(file)

      if (restored) {
        cache.restorePrevious(file.path)
        out.goodScript(file)
        afterWrite(file)
      }

      return restored
    }
  }

  function reset(file) {
    State.lastError = false
    State.curFile = file
    file.startTime = Date.now()
    file.message = { startTime: file.startTime }
  }

  function catchError(error) {
    log.gulp('catchError', error)
    State.lastError = true
    out.badFile(State.curFile)

    error.timestamp = Date.now()

    logError(error, State.curFile)

    event.run('error', State.curFile, error)
    cache.addError(error.fileName || '', error)

    error.file = path.relative(opts('appDir'), error.fileName)
    bridge.broadcast('compile:error', { error }, 'error')

    markDone(State.curFile)
    buildDone(State.curFile)
  }

  function setLastFile(file) {
    if (isBuilding()) return
    let name = file.path.replace(opts('appDir'), '')
    if (name.charAt(0) != '/') name = '/' + name
    log.gulp(name)

    // add to message
    file.message = {
      ...file.message,
      name: name,
      path: file.path,
      compiledAt: file.startTime
    }

    State.curFile = file
  }

  // sets isInternal and willInstall
  // for handling npm and bundling related things
  function processDependencies(file) {
    const modules = file.babel.modules // babel metadata :)
    const imports = modules.imports.map(i => i.source)
    const isExported = !!_.flatten(modules.exports.exported.map(e => e.exported)).length

    cache.setFileInternal(file.path, isExported)
    file.isInternal = isExported

    const allImports = getAllImports(file.contents.toString(), imports)

    const scan = () => {
      cache.setFileImports(file.path, allImports)
      bundler.scanFile(file.path)
    }

    if (scanNow()) scan()
    else debounce(`install:${file.path}`, 2000, scan)

    if (!opts('build') || opts('watch')) {
      debounce('removeOldImports', 3000, bundler.uninstall)
      file.willInstall = bundler.willInstall(allImports)
    }
  }

  // update cache: meta/src/imports
  function updateCache(file) {
    file.src = file.contents.toString()
    // meta
    let meta = cache.getFileMeta(file.path)
    // outside changed detection
    sendOutsideChanged(meta, file)
  }

  let outsideSources = {}

  // detects if a file has changed not inside views for hot reloads correctness
  function sendOutsideChanged(meta, file) {
    if (!meta) return

    let changed = true
    const viewLocs = Object.keys(meta).map(view => meta[view].location)

    if (viewLocs.length) {
      // slice out all code not in views
      const outerSlice = (ls, start, end) => ls.slice(0, start).concat(ls.slice(end))

      const outsideSrc = viewLocs.reduce((src, loc) => outerSlice(src, loc[0][0], loc[1][0] + 1), file.src.split("\n")).join('')
      const cacheFile = cache.getFile(file.path)
      const prevOutside = outsideSources[file.path]
      changed = prevOutside.outsideSrc !== outsideSrc
      outsideSources[file.path] = outsideSrc // update
    }

    if (opts('hasRunInitialBuild'))
      bridge.broadcast('file:outsideChange', { name: cache.relative(file.path), changed })
  }

  function checkWriteable(file) {
    if (userStream || State.lastError) return false

    if (isBuilding()) return true

    const isNew = (
      !State.lastSaved[file.path] ||
      file.startTime > State.lastSaved[file.path]
    )

    if (isNew) {
      State.lastSaved[file.path] = file.startTime
      return true
    }

    return false
  }

  function afterWrite(file) {
    if (isSourceMap(file.path)) return

    buildDone(file)

    // avoid during initial build
    if (!hasFinished()) return
    if (file.isInternal) return

    // run stuff after each change on build --watch
    bundle()

    // avoid ?? todo: figure out why this is necessary
    if (!cache.get(file.path)) return
    // avoid if error
    if (State.lastError) return

    // dont broadcast script if installing/bundling
    log.gulp('bundler installing?', bundler.isInstalling(), 'willInstall?', file.willInstall)
    if (bundler.isInstalling() || file.willInstall) return

    // ADD
    bridge.broadcast('script:add', file.message)
  }

  function buildDone(file) {
    if (file.finishingFirstBuild) {
      opts.set('hasRunInitialBuild', true)
      log.gulp('buildDone!!'.green.bold)
      waitingForFirstBuild.forEach(res => res())
    }
  }

  function bundle() {
    if (opts('watch') && hasBuilt()) {
      builder.build({ bundle: false })
      return true
    }
  }

  function markFileSuccess(file) {
    if (isSourceMap(file.path)) return

    out.goodScript(file)
    log.gulp('DOWN', 'success'.green, 'internal?', file.isInternal)

    if (file.isInternal) return

    // update cache error / state
    cache.update(file.path)

    // write cache state to disk
    if (opts('hasRunInitialBuild')) serializeCache()

    // message browser of compile success
    bridge.broadcast('compile:success', file.message, 'error')

    // check if other errors left still in queue
    const error = cache.getLastError()
    if (!error) return
    log.gulp('cache last error', error)
    bridge.broadcast('compile:error', { error }, 'error')
  }

  // ok so we start a file
  // its built into .flint/out
  // we then add an export
  // now we need to remove it from .flint/out
  function removeNewlyInternal(file) {
    // resolve path from .flint/.internal/deps/internals/xyz.js back to xyz.js
    const filePath = path.relative(p(opts('deps').dir, 'internal'), file.path)
    // then resolve path to .flint/.internal/out/xyz.js
    const outPath = p(opts('outDir'), filePath)
    // log.gulp('remove newly internal', outPath)
    rm(outPath)
  }
}

let waitingForFirstBuild = []

export function afterBuild() {
  return new Promise((res, rej) => {
    if (hasFinished()) return res()
    else waitingForFirstBuild.push(res)
  })
}