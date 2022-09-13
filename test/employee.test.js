const Employee = require('../lib/employee')

describe('Employee', () => {
    it('Should return an object of name, ID, and email based off of user input', () => {
        const newEmp = new Employee () 
        expect(typeof newEmp).toEqual('object')
    })

    it('Should return a name based on a parameter off the class Employee', () => {
        const name = 'Gareth'
        const employee = new Employee(name)
        expect(employee.name).toEqual(name)
    })
    it('Should return an ID based on the parameter of class Employee', () => {
        const id = '7'
        const employee = new Employee('a', id, 'c')
        expect(employee.id).toEqual(id)
    })
    it('Should return an Email based on the parameter of the class Employee', () => {
        const email = 'name@gmail.com'
        const employee = new Employee('a', 'b', email)
        expect(employee.email).toEqual(email)
    })

})

describe('getName()', () => {
    it('returns name via the function', () => {
        const name = 'Gareth'
        const employee = new Employee(name, 'b', 'c')
        expect(employee.getName()).toEqual(name)
    })

})

describe('getId()', () => {
    it('returns ID via the function', () => {
        const id = '7'
        const employee = new Employee ('Gareth', id, 'c')
        expect(employee.getId()).toEqual(id)
    })

})

describe('getEmail()', () => {
    it('returns email via the function', () => {
        const email = 'name@email.com'
        const employee = new Employee('Gareth', 7, email)
        expect(employee.getEmail()).toEqual(email)
    })

})

describe('getRole()', () =>{
    it('returns the role based on position', () => {
        const role = 'Employee'
        const employee = new Employee('Gareth', '7', 'name@email.com')
        expect(employee.getRole()).toEqual(role)
    })
})