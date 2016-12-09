var utility = require('./utility.js');
var exports = module.exports = {};

levelOneRooms=[];
allRooms=[];

// randomly selects required number of rooms
exports.selectRoomForLevel = function(numberOfRooms){

  for(i=0;i<numberOfRooms; i++)
  {
    randomNumber = utility.getRandom(0,allRooms.length);
    levelOneRooms.push(levelOneRooms[randomNumber]);
    allRooms.splice(randomNumber,1);
  }

  return levelOneRooms.length;

}


exports.createRooms = function(){

// Room A
room = new Object();

room.name = "A"
room.melee = 5
room.ranged = 2
room.magic = 1

allRooms.push(room);

// Room B
room = new Object();

room.name = "B"
room.melee = 0
room.ranged = 10
room.magic = 3

allRooms.push(room);

// Room C
room = new Object();

room.name = "C"
room.melee = 4
room.ranged = 1
room.magic = 6

allRooms.push(room);

// Room D
room = new Object();

room.name = "D"
room.melee = 6
room.ranged = 10
room.magic = 3

allRooms.push(room);

// Room E
room = new Object();

room.name = "E"
room.melee = 4
room.ranged = 2
room.magic = 1

allRooms.push(room);

// Room F
room = new Object();

room.name = "F"
room.melee = 7
room.ranged = 0
room.magic = 12

allRooms.push(room);

// Room G
room = new Object();

room.name = "G"
room.melee = 8
room.ranged = 8
room.magic = 1

allRooms.push(room);

// Room H
room = new Object();

room.name = "H"
room.melee = 4
room.ranged = 8
room.magic = 9

allRooms.push(room);

// Room I
room = new Object();

room.name = "I"
room.melee = 3
room.ranged = 2
room.magic = 1

allRooms.push(room);

// Room J
room = new Object();

room.name = "J"
room.melee = 8
room.ranged = 8
room.magic = 7

allRooms.push(room);

return allRooms.length;
};
