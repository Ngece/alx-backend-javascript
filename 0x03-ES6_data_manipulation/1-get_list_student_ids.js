export  default function getListStudentIds(array) {
    const arrayIds = [];
    if (Array.isArray(array)) {
        array.forEach((element) => {
        arrayIds.push(element.id);
        });
    }
    return arrayIds;
}