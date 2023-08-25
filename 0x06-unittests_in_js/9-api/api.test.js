// test suite for the api module

const { expect } = require("chai");
const request = require('request');


describe('Integration Testing', () => {
    describe('GET /', () => {
      it('Code: 200 | Body: Welcome to the payment system', (done) => {
        const options = {
          url: 'http://localhost:7865',
          method: 'GET',
        };
  
        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome to the payment system');
          done();
        });
      });
    });
  }
    );

describe('Integration Testing', () => {
    describe('GET /cart/:id', () => {
      it('Code: 200 | Body: Payment methods for cart 123', (done) => {
        const options = {
          url: 'http://localhost:7865/cart/123',
          method: 'GET',
        };
  
        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Payment methods for cart 123');
          done();
        });
      });
    });
  }
    );

    