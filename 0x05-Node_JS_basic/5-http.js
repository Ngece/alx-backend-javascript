const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const databasePath = 'database.csv'; 

const app = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        if (url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello Holberton School!\n');
        } else if (url === '/students') {
            res.setHeader('Content-Type', 'text/plain');
            
            countStudents(databasePath)
                .then(() => {
                    res.statusCode = 200;
                    const readStream = fs.createReadStream(path.resolve(__dirname, databasePath));
                    readStream.pipe(res);
                })
                .catch((error) => {
                    res.statusCode = 500;
                    res.end(error.message);
                });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found\n');
        }
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed\n');
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
