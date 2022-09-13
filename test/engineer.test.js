const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    it('Extends Employee with the added parameter of GitHub username', () => {
        const github = 'garethtflynn'
        const employee = new Engineer ('a', 'b', 'c', github) 
        expect(employee.github).toEqual(github)
    }
    )
})
