var chai = require('chai')
var assert = require('assert')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var server = require('../server');
describe('Login Test', () => {

    it('GivenSeatNowithTypeStringAndvalidUserId_When_ThenReturnStatusUnprocessableEntity', (done) => {
        this.timeout = 10000;
        chai.request(server).post('/bookSeat').send({ seatNo: 'p', userId: "Dipali@gmail.com" }).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

})
