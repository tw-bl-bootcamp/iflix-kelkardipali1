var chai = require('chai')
var assert = require('assert')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var server = require('../server');
describe('getMovieList Test', () => {

    it('GivenUnavailablePath_WhenFindTheaterList_ThenReturnNotFoundStatus', (done) => {
        chai.request(server).get('/theater').end((err, res) => {
            assert.equal(404, res.status)
            done();
        })
    })

    it('GivenAvailablePath_WhenGetTheaterList_ThenReturnTheaterList', (done) => {
        chai.request(server).get('/theaterList').end((err, res) => {
            console.log(res.body)
            assert.equal(200,res.status)
            done();
        })
    })
    
})
