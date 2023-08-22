// Syncronously reads and prints the contents of a database file.

const fs = require('fs');

// Counts the number of students in a database.
function countStudents(path) { 
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        let count = lines.length;
        if (lines[lines.length - 1] === '') {
        count -= 1;
        }
        console.log(`Number of students: ${count}`);
        const fields = {};
        for (const line of lines) {
        const student = line.split(',');
        if (fields[student[3]] === undefined && student[3] !== 'field') {
            fields[student[3]] = {
            count: 1,
            names: [student[0]],
            };
        } else if (student[3] !== 'field') {
            fields[student[3]].count += 1;
            fields[student[3]].names.push(student[0]);
        }
        }
        for (const field of Object.keys(fields)) {
        if (field) {
            console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
        }
        }
    } catch (err) {
        throw Error('Cannot load the database');
    }
    };

module.exports = countStudents;