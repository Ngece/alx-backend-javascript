// tests for calculateNumber function in 0-calcul.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return rounded sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1, 3.4), 4);
        assert.strictEqual(calculateNumber(1.4, 2), 3);
        assert.strictEqual(calculateNumber(1.6, 3), 4);
        assert.strictEqual(calculateNumber(1.2, 3.6), 5);
    });
    });

