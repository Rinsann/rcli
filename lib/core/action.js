var inquirer = require('inquirer')
var config = require('../../config')
const download = require('download-git-repo')
const myAction = async (project, args) => {
  // console.log(project)
  // console.log(args)
  // express koa egg
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framwork',
      choices: config.framwork,
      message: '请选择你需要的框架'
    }
  ])

  // console.log(answer)
  // 下载代码模块
}
module.exports = myAction