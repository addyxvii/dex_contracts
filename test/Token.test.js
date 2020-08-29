const Token = artifacts.require('./Token');

require('chai')
    .use(require('chai-as-promised'))
contract('Token', (accounts) => {

    describe('deployment', () => {
        it('tracks the name', async () => {
           const token = await Token.new()
           const result = await token.name()
           console.log(token.name)
           result.should.equal('botany')
        })
    })
})