var utility = require('./utility.js');
var selection = require('./selection.js');
var monsterName = require('./names.js');

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

//
// roomCreator = function(name, total, monsterNames, monsters){
//   this.name = name;
//   this.total = total;
//   this.monsters = monsters;
// }






// Creates rooms for level 1
exports.createRooms = function(){

// A = new RoomCreator("A", 3, selection.selectLevelMonsters(3,monsterName.namesForLevel(3)) );
// allRooms.push(A);
// B = new RoomCreator("B", 5, selection.selectLevelMonsters(5,monsterName.namesForLevel(5)) );
// allRooms.push(B);
// C = new RoomCreator("C", 2, selection.selectLevelMonsters(2,monsterName.namesForLevel(2)) );
// allRooms.push(C);
// D = new RoomCreator("D", 4, selection.selectLevelMonsters(4,monsterName.namesForLevel(4)) );
// allRooms.push(D);
// E = new RoomCreator("E", 4, selection.selectLevelMonsters(4,monsterName.namesForLevel(4)) );
// allRooms.push(E);
// F = new RoomCreator("F", 3, selection.selectLevelMonsters(3,monsterName.namesForLevel(3)) );
// allRooms.push(F);
// G = new RoomCreator("G", 5, selection.selectLevelMonsters(5,monsterName.namesForLevel(5)) );
// allRooms.push(G);
// H = new RoomCreator("H", 4, selection.selectLevelMonsters(4,monsterName.namesForLevel(4)) );
// allRooms.push(H);
// I = new RoomCreator("I", 2, selection.selectLevelMonsters(2,monsterName.namesForLevel(3)) );
// allRooms.push(I);
// J = new RoomCreator("J", 3, selection.selectLevelMonsters(3,monsterName.namesForLevel(3)) );
// allRooms.push(J);


// Room A
room = new Object();

room.name = "A"
room.total = 3;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

//Room B
room = new Object();

room.name = "B"
room.total = 5;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room C
room = new Object();

room.name = "C"
room.total = 2;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room D
room = new Object();

room.name = "D"
room.total = 4;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room E
room = new Object();

room.name = "E"
room.total = 4;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room F
room = new Object();

room.name = "F"
room.total = 3;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room G
room = new Object();

room.name = "G"
room.total = 5;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room H
room = new Object();

room.name = "H"
room.total = 4;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room I
room = new Object();

room.name = "I"
room.total = 2;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

// Room J
room = new Object();

room.name = "J"
room.total = 3;
room.names = monsterName.namesForLevel(room.total);
room.monsters = selection.selectLevelMonsters(room.total);

allRooms.push(room);

return allRooms.length;
};
