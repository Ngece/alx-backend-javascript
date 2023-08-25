// tests for the function getPaymentTokenFromApi from 6-payment_token.js

const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', function() {
    it('should return the correct value', function(done) {
        getPaymentTokenFromApi(true)
        .then(function(response) {
            expect(response).to.eql({ data: 'Successful response from the API' });
            done();
        })
        .catch(function(error) {
            done(error);
        });
    });
    });

    