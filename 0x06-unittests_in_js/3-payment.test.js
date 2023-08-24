// Tests the sendPaymentRequestToApi function from 3-payment.js using spy

const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const calculateNumber = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should calculate the total and log the result', function() {
    const spy = chai.spy.on(console, 'log');

    const totalAmount = 100;
    const totalShipping = 10;
    const expectedResult = totalAmount + totalShipping;

    const result = sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(spy).to.have.been.called.with(`The total is: ${expectedResult}`);
    assert.equal(result, expectedResult);

    chai.spy.restore(console, 'log');
  });
});


