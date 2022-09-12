const Manager = require('../lib/manager')
// const manager = require('../lib/manager')

describe('Manager', () => {
    it('Should return an object of name, ID, email, and office number  ', () => {
        const manTest = new Manager (Gareth, 7, Email, 1234567890 ) 
        expect(manTest).toEqual({'name': 'Gareth', 'id': 7, 'email': 'Email', 'office': '1234567890'})
    }
    )
})