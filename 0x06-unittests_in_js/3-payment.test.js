// Tests the sendPaymentRequestToApi function from 3-payment.js using spy

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment'); 

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber', function() {
      const spy = sinon.spy();
      const stub = sinon.stub().returns(10);
      spy(stub(10, 10));
      expect(spy.calledOnceWithExactly(10, 10)).to.be.true;
      expect(stub.calledOnceWithExactly(10, 10)).to.be.true;
    });
  }
);

