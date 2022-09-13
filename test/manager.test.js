const Manager = require('../lib/manager')


describe('Manager', () => {
    it('Extends employee but has the additional parameter of office number', () => {
        const office = '1234567890'
        const employee = new Manager ('a', 'b', 'c', office) 
        expect(employee.office).toEqual(office)
    }
    )
})


