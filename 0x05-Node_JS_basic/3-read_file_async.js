// Uses function countStudents to count the number of students in a file

export default function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
        if (err) reject(Error('Cannot load the database'));
        if (data) {
            const lines = data.split(/\r?\n/);
            let count = 0;
            const fields = {};
            const students = {};
            for (let i = 1; i < lines.length; i += 1) {
            if (lines[i]) {
                count += 1;
                const line = lines[i].split(',');
                if (!fields[line[3]]) fields[line[3]] = [];
                fields[line[3]].push(line[0]);
            }
            }
            console.log(`Number of students: ${count}`);
            for (const field in fields) {
            if (field) {
                const list = fields[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
            }
            resolve({ count, fields, students });
        }
        });
    });
    }

module.exports = countStudents;
