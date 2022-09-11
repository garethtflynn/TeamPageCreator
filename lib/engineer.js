const employee = require('./employee')

class Engineer extends Emplpoyee {
    constructor (name, id, email, github) {
        super (name,id,email)
        this.github = github
    }
    getGithub() {

    }
    getRole() {
        return 'Engineer'
    }
}

const engineer = new Engineer ()
module.exports = Engineer;