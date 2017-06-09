const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Server', () => {
  describe('GET /', () => {
    it('should return hello response', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toInclude({ body: 'Reduce, reuse!' })
        })
        .expect(200)
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should return an array of users', (done) => {
      request(app)
        .get('/users')
        .expect((res) => {
          expect(res.body).toInclude({ name: 'Sam', age: 76 })
        })
        .expect(200)
        .end(done);
    });
  });
});