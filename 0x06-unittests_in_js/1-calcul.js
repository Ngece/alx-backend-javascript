// Adds, Subtracts and Divides 2 numbers

function calculateNumber(type, a, b) {
  // manipulate a and b to round them to the nearest integer
  
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);;
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (num2 === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
    
}

module.exports = calculateNumber;