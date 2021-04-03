const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const myTeam = [];

const manager = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the team manager's id?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the team manager's office number?",
  },
];

const engineer = [
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is your engineer's id?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the your engineer's email?",
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "What is your engineer's Github account?",
  },
];

const intern = [
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is your intern's id?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the your intern's email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school?",
  },
 
];

const employee = [
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "employeeRole",
        choices: [ "Engineer", "Intern", "I don't want to add any more team members"]
      },
];


function createManager() {
  inquirer.prompt(manager).then((answers) => {
    console.log(answers);
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    myTeam.push(manager);
    createEmployee();
  });
  //running prompt for manager questions
  //using answers from prompt to create manager class
  //store the created manager in variable
  //call function for team members created
}
createManager();


function createEngineer() {
    inquirer.prompt(engineer).then((answers) => {
        console.log(answers);
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGitHub
            );
            myTeam.push(engineer);
            createEmployee();
        });
        //running prompt for engineer questions
        //using answers from prompt create engineer class
        //store created engineer in variable
        //call function for createTeamMember
    }
    createEngineer();
    
    function createIntern() {
        inquirer.prompt(intern).then((answers) => {
            console.log(answers);
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
                );
                myTeam.push(intern);
                createEmployee();
            });
            //running prompt for intern questions
            //using answers from prompt create intern class
            //store created intern in variable
            //call function for createTeamMember
        }
        createIntern();
        
        function createEmployee() {
            inquirer.prompt(employee).then((answers) => {
                console.log(answers);
                const employee = new Employee(
                    answers.employeeRole,
                    );
                    myTeam.push(employee);
                createEngineer();
                createIntern();
                });
          //running prompt for team questions
          //for engineer call create engineer function
          //for intern call intern function
          //for done run build team function
        }
        createTeam();

        // function team() {
            //call writetofile function with variable
            function writeToFile(fileName, data) {
                fs.writeFile(fileName, generateHTML(data), (err) => {
                    if (err) throw new Error("THERE WAS AN ERROR");
                    
                    console.log("Generating HTML");
                });
            }
        // }

        // function team();
        
        function init() {
            inquirer.prompt(engineer).then((answers) => {
                writeToFile("index.html", answers);
                console.log(answers);
            });
        }
        
    