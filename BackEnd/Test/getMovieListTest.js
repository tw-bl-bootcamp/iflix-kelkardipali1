var chai = require('chai')
var assert = require('assert')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
var server = require('../server');
describe('getMovieList Test', () => {

    it('GivenPathToMovie_WhenFind_ThenReturnMovieList', (done) => {
        chai.request(server).get('/movieList').end((err, res) => {
            assert.equal(200, res.status)
            done();
        })
    })
})
