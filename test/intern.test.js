const Intern = require('../lib/intern')

describe('Intern', () => {
    it('Extends Employee with the added parameter of school', () => {
        const testSchool = 'GaTech'
        const employee = new Intern ('a', 'b', 'c', testSchool) 
        expect(employee.school).toEqual(testSchool)
    })
})


