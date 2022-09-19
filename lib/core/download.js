const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const downloadFun = function (url, project) {
  const spinner = ora().start()
  spinner.text = '代码正在下载...'
  download('direct:' + url,
    project,
    { clone: true }, (err) => {
      if (!err) {
        spinner.succeed('代码下载成功...')
        console.log(chalk.blue.bold('Done! you run:'))
        console.log(chalk.blue('cd ' + project))
        console.log(chalk.blue('npm install'))
        console.log(chalk.blue('npm run dev'))
      } else {
        spinner.fail(chalk.rgb(255, 60, 90)('代码下载失败...'), err)
      }

    })
}

module.exports = downloadFun