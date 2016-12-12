var utility = require('./utility.js');
var selection = require('./selection.js');
var exports = module.exports = {};

levelOneRooms=[];
allRooms=[];

// randomly selects required number of rooms
exports.selectRoomForLevel = function(numberOfRooms){
  exports.createRooms();

  rooms = utility.shuffle(allRooms);
  levelOneRooms  = rooms.slice(0,numberOfRooms);


return levelOneRooms;

};

// Creates rooms for level 1
exports.createRooms = function(){

// Room A
room = new Object();

room.name = "A"
room.total = 3;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room B
room = new Object();

room.name = "B"
room.total = 5;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room C
room = new Object();

room.name = "C"
room.total = 2;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room D
room = new Object();

room.name = "D"
room.total = 4;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room E
room = new Object();

room.name = "E"
room.total = 4;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room F
room = new Object();

room.name = "F"
room.total = 3;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room G
room = new Object();

room.name = "G"
room.total = 5;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room H
room = new Object();

room.name = "H"
room.total = 4;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room I
room = new Object();

room.name = "I"
room.total = 2;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room J
room = new Object();

room.name = "J"
room.total = 3;
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

return allRooms.length;
};
