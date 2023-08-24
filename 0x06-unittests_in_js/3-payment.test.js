// Tests the sendPaymentRequestToApi function from 3-payment.js using spy

const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber', function() {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
        const spy = sinon.spy(console, 'log');
    
        sendPaymentRequestToApi(100, 20);
    
        assert.equal(stub.calledOnceWithExactly('SUM', 100, 20), true);
        assert.equal(spy.calledOnceWithExactly('The total is: 10'), true);
    
        stub.restore();
        spy.restore();
    });
    }
);
