const assert = require('chai').assert;
const calculateNumber = require('./2-calcul_chai'); 

describe('calculateNumber', function() {
  it('should round and return the sum of two numbers', function() {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should round and return the difference of two numbers', function() {
    assert.equal(calculateNumber('SUBTRACT', 5.8, 3.3), 3);
  });

  it('should round and return the division of two numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 10, 3), 3);
  });

  it('should return "Error" when dividing by 0', function() {
    assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
  });
});
