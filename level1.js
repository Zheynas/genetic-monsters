module.exports.createRooms = function(){
levelOneRooms=[];

// Room 1
room = new Object();

room.name = "A"
room.melee = 5
room.ranged = 2
room.magic = 1

levelOneRooms.push(room);

// Room 2
room = new Object();

room.name = "B"
room.melee = 0
room.ranged = 10
room.magic = 3

levelOneRooms.push(room);

// Room 3
room = new Object();

room.name = "C"
room.melee = 4
room.ranged = 1
room.magic = 6

levelOneRooms.push(room);

// Room 4
room = new Object();

room.name = "D"
room.melee = 6
room.ranged = 10
room.magic = 3

levelOneRooms.push(room);

// Room 5
room = new Object();

room.name = "E"
room.melee = 4
room.ranged = 2
room.magic = 1

levelOneRooms.push(room);

// Room 6
room = new Object();

room.name = "F"
room.melee = 7
room.ranged = 0
room.magic = 12

levelOneRooms.push(room);

// Room 7
room = new Object();

room.name = "G"
room.melee = 8
room.ranged = 8
room.magic = 1

levelOneRooms.push(room);

// Room 8
room = new Object();

room.name = "H"
room.melee = 4
room.ranged = 8
room.magic = 9

levelOneRooms.push(room);

// Room 9
room = new Object();

room.name = "I"
room.melee = 3
room.ranged = 2
room.magic = 1

levelOneRooms.push(room);

// Room 10
room = new Object();

room.name = "J"
room.melee = 8
room.ranged = 8
room.magic = 7

levelOneRooms.push(room);


return levelOneRooms;


}

// printThing = function(){
//
//   console.log(module.exports.createRooms()[0].name);
// }
// printThing();
