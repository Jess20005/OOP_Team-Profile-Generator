const inquirer = require("inquirer");
const fs = require ('fs');
const Manager = require("./lib/Manager")
const myTeam = [];

function createEngineer(){
    //running prompt for engineer questions
    //using answers from prompt create engineer class
    //store created engineer in variable
    //call function for createTeamMember
}

function createIntern(){
    //running prompt for intern questions
    //using answers from prompt create intern class
    //store created intern in variable
    //call function for createTeamMember
}

function buildTeam(){
    //call writetofile function with variable
}

const manager = [
    {
    type: 'input',
    name: 'managerName',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is the team manager's id?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the team manager's email?",
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is the team manager's office number?",
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
    message: "What is the team manager's id?",
  },
  {
    type: 'input',
    name: 'getEmail',
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
    message: "What is the team manager's id?",
  },
  {
    type: 'input',
    name: 'getEmail',
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
  function createManager(){
    inquirer.prompt(manager)
    .then(answers => {
        console.log(answers)
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber,
       )
       myTeam.push(manager)
       createTeamMembers()     
    })
    //running prompt for manager questions
    //using answers from prompt to create manager class
    //store the created manager in variable
    //call function for team members created
}
    createManager()

    
function createTeamMembers(){
    //running prompt for team questions
    //for engineer call create engineer function
    //for intern call intern function
    //for done run build team function
}

  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), err =>{
        if (err)throw new Error('THERE WAS AN ERROR');

        console.log("Generating HTML")
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(engineer)
    .then(answers => {
        writeToFile('index.html', answers)
        console.log(answers)
    })
}

function init() {
    inquirer.prompt(intern)
    .then(answers => {
        writeToFile('index.html', answers)
        console.log(answers)
    })
}



