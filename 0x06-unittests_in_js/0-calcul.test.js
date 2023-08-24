// tests for calculateNumber function in 0-calcul.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return rounded sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);

        assert.strictEqual(calculateNumber(3.7, 1), 5);
        assert.strictEqual(calculateNumber(3.7, 1.2), 5);
        assert.strictEqual(calculateNumber(3.7, 1.5), 6);

        assert.equal(calculateNumber(1.3, 0), 1);
        assert.equal(calculateNumber(1.6, 1.7), 4);
        assert.equal(calculateNumber(0, 1.3), 1);
        assert.equal(calculateNumber(1.3, 1.8), 3);
        assert.equal(calculateNumber(1.3, 1.3), 2);
        assert.equal(calculateNumber(1.7, 1.2), 3);
    });
    });

