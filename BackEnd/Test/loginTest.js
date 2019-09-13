var chai = require('chai')
var assert = require('assert')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var server = require('../server');
describe('Login Test', () => {

    it('GivenInvalidEmailAndInvalidPassword_WhenValidate_ThenReturnStatusUnprocessableEntity', (done) => {
        this.timeout = 10000;
        userData = {
            "email": "Dipaligmail.com",
            "password": "di"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenEmptyEmailAndEmptyPassword_WhenValidate_ThenReturnStatusunprocessableEntity', (done) => {
        this.timeout = 10000;
        userData = {
            "email": " ",
            "password": " "
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenValidEmailAndPasswordWithTwoLength_WhenValidate_ThenReturnUnprocessableEntity', (done) => {
        this.timeout = 10000;
        userData = {
            "email": "Dipali@gmail.com",
            "password": "di"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenValidEmailAndPasswordWithFifteenLength_WhenValidate_ThenReturnUnprocessableEntity', (done) => {
        this.timeout = 10000;
        userData = {
            "email": "Dipali@gmail.com",
            "password": "dipalikelkar123"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenValidEmailAndPasswordWithTwelveLength_WhenValidate_ThenReturnOK', (done) => {
        this.timeout = 10000;
        userData = {
            "email": "Dipali@gmail.com",
            "password": "dipalikelkar"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status)
            done();
        })
    })

    it('GivenValidEmailAndValidPassword_WhenValidate_ThenReturnLoginSuccessfully', (done) => {
        this.timeout = 10000;
        userData = {
            "email": "Dipali@gmail.com",
            "password": "Dipali@12345"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(200, res.status)
            done();
        })
    })

})
