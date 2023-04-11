const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your application.',
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
    message: 'Which license would you like to select?',
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
    message: 'What is your email address?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();