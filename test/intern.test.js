// const intern = require('../lib/intern')
const Intern = require('../lib/intern')

describe('Intern', () => {
    it('Should return an object of name, ID, email, and school ', () => {
        const intTest = new Intern (Gareth, 7, Email, gatech ) 
        expect(intTest).toEqual({'name': 'Gareth', 'id': 7, 'email': 'Email', 'school': 'gatech'})
    }
    )
})
