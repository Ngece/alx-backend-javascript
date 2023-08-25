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

describe('Integration Testing', () => {
    describe('GET /cart/:id', () => {
      it('Code: 404 | Body: Cart not found', (done) => {
        const options = {
          url: 'http://localhost:7865/cart/12b3',
          method: 'GET',
        };
  
        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(404);
          expect(body).to.equal('Cart not found');
          done();
        });
      });
    });
  }
    );

describe('Integration Testing', () => {
    describe('GET /available_payments', () => {
      it('Code: 200 | Body: {"payment_methods":{"credit_cards":true,"paypal":false}}', (done) => {
        const options = {
          url: 'http://localhost:7865/available_payments',
          method: 'GET',
        };
  
        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
          done();
        });
      });
    });
  }
    );
