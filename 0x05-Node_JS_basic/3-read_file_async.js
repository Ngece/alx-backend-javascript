// Syncronously reads content from a file and prints it to the stdout

const fs = require('fs');

// Count the number of students in a given file
function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== '');
            const count = lines.length;
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
            resolve();
        });
    });
}

module.exports = countStudents;
