// Pre- and post-action hooks for Surge

module.exports = {
  preAuth: function (req, resume) {
    resume()
  },
  postAuth: function (req, resume) {
    resume()
  },
  preProject: function (req, resume) {
    resume()
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
