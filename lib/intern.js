const Employee = require('./employee')
// intern class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email,)
        this.school = school
        this.role = 'Intern'
    }
    getSchool () {
        return this.school
    }
    getRole() {
        return this.role
    }
}

const intern = new Intern ()
module.exports = Intern;
