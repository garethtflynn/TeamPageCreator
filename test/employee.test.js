const Employee = require('../lib/employee')
// const employee = require('../lib/employee')

describe('Employee', () => {
    it('Should return an object of name, ID, and email ', () => {
        const empTest = new Employee (Gareth, 7, Email ) 
        expect(empTest).toEqual({'name': 'Gareth', 'id': 7, 'email': 'Email'})
    }
    )
})
