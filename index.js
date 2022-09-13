// variables and required files
// const Manager = require('./lib/manager')
// const Engineer = require('./lib/engineer')
// const Intern = require('./lib/intern')
const inquirer = require('inquirer');
const fs = require('fs')


function addManager (answers) {
   return inquirer.prompt(
[
    {
        type: 'input',
        name: 'manName',
        message: `What is the managers' name?`
    },
    {
        type: 'input',
        name: 'manID',
        message: `What is the managers' employee ID?`
    },
    {
        type: 'input',
        name: 'manEmail',
        message: `What is the managers' email address?`
    },
    {
        type: 'input',
        name: 'manOffice',
        message: `What is the managers' office number?`
    },
    {
        type: 'list',
        name: 'addRole',
        message: `Would you like to add an engineer or intern?`,
        choice: [
            'Engineer',
            'Intern',
            'Nah Im done'
        ]
    }
    // .then((answers) => {
    //     if (answers.addRole === 'Engineer') {
    //         addEngineer ()
    //     } if (answers.addRole === 'Intern') {
    //         addIntern ()
    //     } if (answers.addRole ==='Nah Im done') {
    //         init ()
    //     }     
    // })
    
])
}

function addEngineer (answers) {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'engName',
                message: `What is the engineers' name?`
            },
            {
                type: 'input',
                name: 'engID',
                message: `What is the engineers' ID?`
            },
            {
                type: 'input',
                name: 'engEmail',
                message: `What is the engineers' email?`
            },
            {
                type: 'input',
                name: 'engGithub',
                message: `What is the engineers' GitHub username?`
            },
            {
                type: 'list',
                name: 'addRole',
                message: `Would you like to add an engineer or intern?`,
                choice: [
                    'Engineer',
                    'Intern',
                    'Nah Im done'
                ]
            }
            // .then((answers) => {
            //     if (answers.addRole === 'Engineer') {
            //         addEngineer ()
            //     } if (answers.addRole === 'Intern') {
            //         addIntern ()
            //     } if (answers.addRole ==='Nah Im done') {
            //         init ()
            //     }     
            // })
])
}

function addIntern (answers) {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'intName',
                message: `What is the interns' name?`
            },
            {
                type: 'input',
                name: 'intID',
                message: `What is the interns' ID?`
            },
            {
                type: 'input',
                name: 'intEmail',
                message: `What is the interns' email?`
            },
            {
                type: 'input',
                name: 'intSchool',
                message: `What is the interns' school?`
            },
            {
                type: 'list',
                name: 'addRole',
                message: `Would you like to add an engineer or intern?`,
                choice: [
                    'Engineer',
                    'Intern',
                    'Nah Im done'
                ]
            }
            
            // ((answers) => {
            //     if (answers.addRole === 'Engineer') {
            //         addEngineer ()
            //     } if (answers.addRole === 'Intern') {
            //         addIntern ()
            //     } if (answers.addRole ==='Nah Im done') {
            //         init ()
            //     }     
            // })
])            
}

const generateHTML = ({answers}) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Employee Tracker</title>
    </head>
    <h2>My Team</h2>
    <body>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manName}</h5>
      <p class="card-text">Manager.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manID} </li>
      <li class="list-group-item">Email: ${manEmail}</li>
      <li class="list-group-item">Office Number: ${manOffice}</li>
    </ul>
    </div>
    </body>
    </html>`;

const init = () => {
    addManager () 
    .then((answers)=> writeFile('index.html', generateHTML(answers)))
    .then(() => console.log ('Successfully wrote a HTML!!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();