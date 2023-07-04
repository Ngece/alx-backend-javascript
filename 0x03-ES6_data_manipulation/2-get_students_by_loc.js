export default function getStudentsByLocation(array, city) {
    const arrayStudents = [];
    if (Array.isArray(array)) {
        array.forEach((element) => {
        if (element.location === city) {
            arrayStudents.push(element);
        }
        });
    }
    return arrayStudents;
}