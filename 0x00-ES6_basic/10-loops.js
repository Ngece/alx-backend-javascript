export default function appendToEachArrayValue(array, appendString) {
  for (var idx of array) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
