// tests the function sendPaymentRequestToApi from 4-payment.js

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call calculateNumber', function() {
    const spy = sinon.spy();
    const stub = sinon.stub().returns(10);
    
    spy(stub(10, 10));
    
    expect(spy.calledOnceWithExactly(10, 10)).to.be.true;
    expect(stub.calledOnceWithExactly(10, 10)).to.be.true;
  });
});
