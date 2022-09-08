const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

function promptQuestions () {
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
        name: 'addEngineer',
        message: `Would you like to add an engineer?`,
        choice: [
            'yes',
            'no'
        ]
    }
    
])
}