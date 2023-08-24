// Adds, Subtracts and Divides 2 numbers

function calculateNumber(type, a, b) {
    // manipulate a and b to round them to the nearest integer
    const num1 = Math.round(a);
    const num2 = Math.round(b);
  
    if (type === 'SUBTRACT') {
      return num1 - num2;
    }
    if (type === 'DIVIDE') {
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    }
    return num1 + num2;
  }
  
  module.exports = calculateNumber;