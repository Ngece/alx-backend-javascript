// Syncronously reads and prints the contents of a database file.

const fs = require('fs');

function countStudents() {
  try {
    const data = fs.readFileSync('database.csv', 'utf8');
    const database = data.split('\n');
    let count = 0;
    const fields = {};
    for (let i = 1; i < database.length; i += 1) {
      if (database[i] !== '') {
        count += 1;
        const line = database[i].split(',');
        if (!(line[3] in fields)) {
          fields[line[3]] = [];
        }
        fields[line[3]].push(line[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.toString().replace(/,/g, ', ')}`);
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
