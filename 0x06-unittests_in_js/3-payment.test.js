// Tests the sendPaymentRequestToApi function from 3-payment.js using spy

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        const spyConsole = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
        spy.restore();
        spyConsole.restore();
    });
    }
);

