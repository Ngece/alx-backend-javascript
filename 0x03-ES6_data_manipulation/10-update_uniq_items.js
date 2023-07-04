export default function updateUniqueItems(map) {
    // Check if the input is a Map instance
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    // Iterate over the entries of the map
    for (const [key, value] of map.entries()) {
      // Check if the value is equal to 1
      if (value === 1) {
        // If the value is 1, update it to 100
        map.set(key, 100);
      }
    }
  
    // Return the updated map
    return map;
  }
  