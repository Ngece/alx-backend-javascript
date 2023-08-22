// Syncronously reads and prints the contents of a database file.

const fs = require('fs');

try {
    const data = fs.readFileSync(process.argv[2], 'utf8');
    process.stdout.write(data);
    } catch (err) {
    console.error(err);
    process.exit(1);
    }
