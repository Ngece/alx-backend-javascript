// tests the calculateNumber function in 1-calcul.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return rounded sum', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);

        assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
        assert.strictEqual(calculateNumber('SUM', 3.7, 1.2), 5);
        assert.strictEqual(calculateNumber('SUM', 3.7, 1.5), 6);

        assert.equal(calculateNumber('SUM', 1.3, 0), 1);
        assert.equal(calculateNumber('SUM', 1.6, 1.7), 4);
        assert.equal(calculateNumber('SUM', 0, 1.3), 1);
        assert.equal(calculateNumber('SUM', 1.3, 1.8), 3);
        assert.equal(calculateNumber('SUM', 1.3, 1.3), 2);
        assert.equal(calculateNumber('SUM', 1.7, 1.2), 3);
    });
    it('should return rounded difference', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -3);

        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 3);

        assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
        assert.equal(calculateNumber('SUBTRACT', 1.6, 1.7), -1);
        assert.equal(calculateNumber('SUBTRACT', 0, 1.3), -1);
        assert.equal(calculateNumber('SUBTRACT', 1.3, 1.8), -1);
        assert.equal(calculateNumber('SUBTRACT', 1.3, 1.3), 0);
        assert.equal(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
    }
    );

    it('should return rounded quotient', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
        assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);

        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1), 4);
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 3);
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);

        assert.equal(calculateNumber('DIVIDE', 1.3, 0), 'Error');
        assert.equal(calculateNumber('DIVIDE', 1.6, 1.7), 1);
        assert.equal(calculateNumber('DIVIDE', 0, 1.3), 0);
        assert.equal(calculateNumber('DIVIDE', 1.3, 1.8), 1);
        assert.equal(calculateNumber('DIVIDE', 1.3, 1.3), 1);
        assert.equal(calculateNumber('DIVIDE', 1.7, 1.2), 2);
    }
    );
    it('should return error', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 0), 'Error');
    });

});

