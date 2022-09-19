const download = require('download-git-repo')
const downloadFun = function (url, project) {
  download('direct:' + url,
    project,
    { clone: true }, (err) => console.log(err))
}

module.exports = downloadFun