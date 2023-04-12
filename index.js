const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description the application.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation intructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can your applicaiton be used?'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Provide credit to any contributers'
  },
  {
    type: 'list',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: ['MIT','Apache 2.0','GNU General Public v2.0', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
];


// TODO: Create a function to initialize app
function init(){
    inquirer
    .prompt(questions)

    .then((data) => {
        fs.writeFile("readMe.md", generateMarkdown(data), (err) =>
  err ? console.log(err) : console.log('README has been created!'));
    })
}

// Function call to initialize app
init();