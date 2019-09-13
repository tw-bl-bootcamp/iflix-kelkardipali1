var chai = require('chai')
var assert = require('assert')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var server = require('../server');
describe('Login Test', () => {

    it('GivenSeatNowithTypeStringAndvalidUserId_WhenBookingSeat_ThenReturnStatusUnprocessableEntity', (done) => {
        this.timeout = 10000;
        chai.request(server).post('/bookSeat').send({ seatNo: 'p', userId: "Dipali@gmail.com" }).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenNullSeatNoAndvalidUserId_WhenBookinSeat_ThenReturnStatusUnprocessableEntity', (done) => {
        this.timeout = 10000;
        chai.request(server).post('/bookSeat').send({ seatNo: null, userId: "Dipali@gmail.com" }).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenZeroSeatNoAndvalidUserId_WhenBookingSeat_ThenReturnInvalidDataPassed', (done) => {
        this.timeout = 10000;
        chai.request(server).post('/bookSeat').send({ seatNo: 0, userId: "Dipali@gmail.com" }).end((err, res) => {
            assert.equal('Invalid data passed', res.body.message)
            done();
        })
    })

    it('GivenValidSeatNoAndvalidUserId_WhenBookingSeat_ThenReturnValidate', (done) => {
        this.timeout = 10000;
        chai.request(server).post('/bookSeat').send({ seatNo: 2, userId: "Dipali@gmail.com" }).end((err, res) => {
            assert.equal('validate', res.body.message)
            done();
        })
    })

})
