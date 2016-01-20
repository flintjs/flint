// Pre- and post-action hooks for Surge

var Program = require('commander')
var runner = require('flint-runner')
var colors = require('colors')
var fs = require('fs')
var path = require('path')

module.exports = {
  preAuth: function (req, resume) {
    resume()
  },
  postAuth: function (req, resume) {
    resume()
  },
  preProject: function (req, resume) {
    fs.stat(process.cwd() + '/.flint', function(err, res) {
      var buildDir = path.resolve(process.cwd(), '.flint', 'build')

      if (err || !res) {
        console.log("\nRun 'flint' in a flint repo to start your development server.".green.bold)
      }

      /**
       * Do the Flint compile step here!
       * This is an example where we create
       * a new `200.html` file if there isn’t one,
       * where client side routing
       * and then publish it to Surge.
       *
       * You can replace it with your compile step:
       * await runner.build({ once: true })
       */

      fs.writeFile(path.resolve(buildDir, '200.html'), '<h1>Hello Flint on ' + new Date().toJSON() + '</h1>', function (err) {
        if (err) throw err

        /**
         * IMPORTANT
         * We set `req.project` so Surge doesn’t
         * prompt the user for their project dir
         */

        req.project = buildDir
        resume()
      })
    })
  },
  postProject: function (req, resume) {
    resume()
  },
  preSize: function (req, resume) {
    resume()
  },
  postSize: function (req, resume) {
    resume()
  },
  preDomain: function (req, resume) {
    resume()
  },
  postDomain: function (req, resume) {
    resume()
  },
  prePublish: function (req, resume) {
    resume()
  },
  postPublish: function (req, resume) {
    resume()
  }
}
