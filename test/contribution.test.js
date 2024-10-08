// test/contribution.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const Contribution = require('./models/contribution');
const should = chai.should();

chai.use(chaiHttp);

describe('Contributions', () => {
  beforeEach((done) => {
    Contribution.deleteMany({}, (err) => {
      done();
    });
  });

  describe('/GET contributions', () => {
    it('it should GET all the contributions', (done) => {
      chai.request(server)
        .get('/api/contributions')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  // Add more tests here
});
