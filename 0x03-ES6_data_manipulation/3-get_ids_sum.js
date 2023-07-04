export default function getStudentIdsSum(array) {
    
    return array.reduce((sum, current) => {
        return sum + current.id;
    }, 0);
}