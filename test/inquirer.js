var inquirer = require('inquirer')

inquirer.prompt([
  { type: 'input', name: 'username', message: '项目名称' }
]).then((answer) => {
  console.log(answer)
})