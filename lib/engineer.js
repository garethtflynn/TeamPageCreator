const Employee = require('./employee')
// engineer class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github
        this.role = 'Engineer'
    }
    getGithub() {
       return this.github
    }
    getRole() {
        return this.role
    }
}

const engineer = new Engineer ()
module.exports = Engineer;