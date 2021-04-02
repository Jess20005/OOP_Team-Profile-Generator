const inquirer = require("inquirer");
const fs = require ('fs');

const manager = [
    {
    type: 'input',
    name: 'getName',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'getId',
    message: "What is the team manager's email?",
  },
  {
    type: 'input',
    name: 'getOfficeNumber',
    message: "What is the team manager's office number?",
  },
  {
    type: 'list',
    message: 'What type of team member would you like to add?',
    name: 'getRole',
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
  },
  ];

  const engineer = [
    {
    type: 'input',
    name: 'getName',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'getId',
    message: "What is the team manager's email?",
  },
  {
    type: 'input',
    name: 'getOfficeNumber',
    message: "What is the team manager's office number?",
  },
  {
    type: 'list',
    message: 'What type of team member would you like to add?',
    name: 'getRole',
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
  },
  ];


  const intern = [
    {
    type: 'input',
    name: 'getName',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'getId',
    message: "What is the team manager's email?",
  },
  {
    type: 'input',
    name: 'getOfficeNumber',
    message: "What is the team manager's office number?",
  },
  {
    type: 'list',
    message: 'What type of team member would you like to add?',
    name: 'getRole',
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
  },
  ];

  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), err =>{
        if (err)throw new Error('THERE WAS AN ERROR');

        console.log("Generating HTML")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(manager, engineer, intern)
    .then(answers => {
        writeToFile('index.html', answers)
        console.log(answers)
    })
}

// Function call to initialize app
init();


