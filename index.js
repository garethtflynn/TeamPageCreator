const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


function addManager (answers) {
    return inquirer.prompt(
[
    {
        type: 'input',
        name: 'managerName',
        message: `What is the managers' name?`
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the managers' employee ID?`
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the managers' email address?`
    },
    {
        type: 'input',
        name: 'managerOffice',
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
    }.then((answers) => {
        if (answers.addRole === 'Engineer') {
            addEngineer ()
        } if (answers.addRole === 'Intern') {
            addIntern ()
        } if (answers.addRole ==='Nah Im done') {
            init ()
        }     
    })
    
])
}

function addEngineer (answers) {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'engineerName',
                message: `What is the engineers' name?`
            },
            {
                type: 'input',
                name: 'engineerId',
                message: `What is the engineers' ID?`
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: `What is the engineers' email?`
            },
            {
                type: 'input',
                name: 'engineerGithub',
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
            }.then((answers) => {
                if (answers.addRole === 'Engineer') {
                    addEngineer ()
                } if (answers.addRole === 'Intern') {
                    addIntern ()
                } if (answers.addRole ==='Nah Im done') {
                    init ()
                }     
            })
])
}

function addIntern (answers) {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'internName',
                message: `What is the interns' name?`
            },
            {
                type: 'input',
                name: 'internId',
                message: `What is the interns' ID?`
            },
            {
                type: 'input',
                name: 'internEmail',
                message: `What is the interns' email?`
            },
            {
                type: 'input',
                name: 'internSchool',
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
            }.then((answers) => {
                if (answers.addRole === 'Engineer') {
                    addEngineer ()
                } if (answers.addRole === 'Intern') {
                    addIntern ()
                } if (answers.addRole ==='Nah Im done') {
                    init ()
                }     
            })
])            
}

const generateHTML = ({answers}) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
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