const app = require('../server')
const chai = require('chai')
const request = require('supertest')
const expect = chai.expect
describe('Shop API Integration Tests', function() {
    describe('#GET / shops', function() { 
        it('should get all shops', function(done) { 
        request(app) .get('/api/shops')
            .end(function(err, res) { 
                console.log(res)
            expect(res.statusCode).to.equal(200); 
            expect(res.body).to.be.an('object');
            done(); 
            }); 
        });
    });
});