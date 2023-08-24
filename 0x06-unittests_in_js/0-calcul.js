// Accepts two arguments: a and b and returns the sum of both

function calculateNumber(a, b) {
    // adds a and b to round them to the nearest integer
    return Math.round(a) + Math.round(b);

}

module.exports = calculateNumber;