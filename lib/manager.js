const { getRandomValues } = require('crypto')
const employee = require('./employee')

class Manager extends Employee {
    
    constructor (name, id, email, office) {
        super(name,id,email)
        this.office = office
    }
    getRole() {
        return 'Manager'
    }
}

const manager = new Manager ()
module.exports = Manager;