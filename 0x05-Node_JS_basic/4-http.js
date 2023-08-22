// HTTP server that is using http

const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    res.end('Hello Holberton School!\n');
});

// Start the server on port 1245
app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

// Export the app variable
module.exports = app;
