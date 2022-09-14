const Employee = require('./employee')

class Manager extends Employee {
    
    constructor (name, id, email, office) {
        super(name,id,email)
        this.office = office
        this.role = 'Manager'
    }
    getRole() {
        return this.role
    }
}

const manager = new Manager ()
module.exports = Manager;