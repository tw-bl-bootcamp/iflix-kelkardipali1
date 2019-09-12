var chai = require('chai')
var assert = require('assert')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var server = require('../server');
describe('Login Test', () => {
    it('GivenInvalidEmail_WhenValidate_ThenReturnStatusUnprocessableEntity', (done) => {
        this.timeout = 10000;
        userData = {
            "email": "Dipaligmail.com"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })
})
