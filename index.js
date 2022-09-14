// variables and required files
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const create = require("./src/makehtml");

const employees = [];

const validateUser = (userInput) => {
  if (userInput === "") {
    console.log("please enter in a valid answer!");
    return false;
  } else {
    return true;
  }
};

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the managers' name?`,
        validate: validateUser,
      },
      {
        type: "input",
        name: "id",
        message: `What is the managers' employee ID?`,
        validate: validateUser,
      },
      {
        type: "input",
        name: "email",
        message: `What is the managers' email address?`,
        validate: validateUser,
      },
      {
        type: "input",
        name: "office",
        message: `What is the managers' office number?`,
        validate: validateUser,
      },
    ])
    .then((manAnswers) => {
      manAnswers.role = "Manager";
      const { name, id, email, office } = manAnswers;
      const newMan = new Manager(name, id, email, office);
      employees.push(newMan);
    });
};

const addNewemp = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: `Would you like to add an engineer or intern?`,
        choices: ["Engineer", "Intern", "Finish building"],
      },
      {
        type: "input",
        name: "name",
        message: `What is their' name?`,
        validate: validateUser,
      },
      {
        type: "input",
        name: "id",
        message: `What is the their' ID?`,
        validate: validateUser,
      },
      {
        type: "input",
        name: "email",
        message: `What is their' email?`,
        validate: validateUser,
      },
      {
        type: "input",
        name: "github",
        message: `What is the engineers' GitHub username?`,
        validate: validateUser,
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: `What is the interns' school?`,
        validate: validateUser,
        when: (answers) => answers.role === "Intern",
      },
      {
        type: "confirm",
        name: "add",
        message: "would you like to add another team memeber?",
        default: true,
      },
    ])
    .then((empAnswers) => {
      let { role, name, id, email, github, school, add } = empAnswers;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }
      employees.push(employee);

      if (add) {
        return addNewemp(employees);
      } else {
        return employees;
      }
    });
};

const createFile = (data) => {
  fs.writeFile("./dist/index.html", createTeamPage(teamCards), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Webpage created successfully! Look in dist folder");
    }
  });
};

// Function call to initialize app
addManager()
  .then(addNewemp)
  .then(employees => {
    return create(employees);
  }).then(data => {
    return createFile(data)
  }).catch(err => {
    console.log(err);
  })
