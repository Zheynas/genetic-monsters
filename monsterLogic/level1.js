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

// Creates rooms for level 1
exports.createRooms = function(){

  //Initializes
  allRooms=[];


  // Room A
  room = new Object();

  room.name = "A1"
  room.total = 3;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  //Room B
  room = new Object();

  room.name = "B1"
  room.total = 5;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room C
  room = new Object();

  room.name = "C1"
  room.total = 2;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room D
  room = new Object();

  room.name = "D1"
  room.total = 4;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room E
  room = new Object();

  room.name = "E1"
  room.total = 4;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room F
  room = new Object();

  room.name = "F1"
  room.total = 3;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room G
  room = new Object();

  room.name = "G1"
  room.total = 5;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room H
  room = new Object();

  room.name = "H1"
  room.total = 4;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room I
  room = new Object();

  room.name = "I1"
  room.total = 2;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room J
  room = new Object();

  room.name = "J1"
  room.total = 3;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  return allRooms.length;
};
