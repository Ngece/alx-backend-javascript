package.json            Contains the jason packages and dependencies




0-calcul.js             Contains a function calculateNumber that returns the sum of 2 integers




0-calcul.test.js        Contains a test suite for the function calculateNumber




1-calcul.js             Updates the function calculateNUmber and adds a type parameter that can be any of the following:
                        SUM, SUBTRACT, DIVIDE




1-calcul.test.js        Contains a test suite for the function calculateNumber in 1-calcul.js




2-calcul_chai.js        Contains a function calculateNmber that takes in 3 parameters (type and a, b) and returns the sum, difference, or quotient of a and b as an integer depending on the type of operation.




2-calcul_chai.test.js  Contains a test suite for the function calculateNumber in 2-calcul_chai.js using the chai assertion library and the expect syntax.




utils.js               Contains a module with a function calculateNumber that returns the sum of 2 integers, this module is the same as in 2-calcul_chai.js




3-payment.js            Contains a function sendPaymentRequestToApi that takes 2 arguments (totalAmount and totalShipping) and returns the response of the POST request to the API




3-payment.test.js       Contains a test suite for the function sendPaymentRequestToApi in 3-payment.js using the sinon library to spy the request function and return a specific value.




4-payment.js            Contains the same function sendPaymentRequestToApi as 3-payment.js




4-payment.test.js       Contains a test suite for the function sendPaymentRequestToApi in 4-payment.js using the sinon library to stub the request function and return a specific value.




5-payment.js            Contains the same function sendPaymentRequestToApi as 4-payment.js



5-payment.test.js       Contains test suited for the function sendPaymentRequestToApi in 5-payment.js using the sinon library to create verify a ddescribe that uses console.log to print the sum of two arguments.




6-payment_token.js      Contains a function getPaymentTokenFromApi that takes an endpoint and returns the response of the GET request to the API




6-payment_token.test.js Contains a test suite function getPaymentTokenFromAPI that tests 6-payment_token.js using async/await and the expect syntax.




7-skip.test.js          Contains a test suite that uses the skip and only functions to skip or run specific tests.




8-api/api.js            Contains an express instance called app that returns a string listening on port 7865




8-api/api.test.js       Contains a test suite for the express instance in 8-api/api.js using supertest to test the GET / route.




9-api/api.js            Contains the same express instance as 8-api/api.js




9-api/api.test.js       Contains a test suite for the express instance in 9-api/api.js using supertest to test the GET / route and the GET /cart/:id route.




10-api/api.js           Contains the same express instance as 9-api/api.js



10-api/api.js           Contains a test suite for the express instance in 10-api/api.js using supertest to test the following routes:
    /login
    /available_payments
    