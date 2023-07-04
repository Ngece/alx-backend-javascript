export default function updateStudentGradeByCity(array, city, newGrades) {
        
        return array.filter((student) => {
            return student.location === city;
        }).map((student) => {
            return Object.assign(student, { grade: newGrades });
        });
}