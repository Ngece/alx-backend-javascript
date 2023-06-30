import ClassRoom from './0-classroom.js';

function initializeRooms() {
  // Create 3 ClassRoom objects with sizes: 19, 20, 34  
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];

  return rooms;
}

export default initializeRooms;