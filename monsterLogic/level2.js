var utility = require('./utility.js');
var selection = require('./selection.js');
var monsterName = require('./names.js');

var exports = module.exports = {};

levelTwoRooms=[];
allRooms=[];

// randomly selects required number of rooms
exports.selectRoomForLevel = function(numberOfRooms){
  exports.createRooms();

  rooms = utility.shuffle(allRooms);
  levelOneRooms  = rooms.slice(0,numberOfRooms);


  return levelOneRooms;

};

// Creates rooms for level 2
exports.createRooms = function(){

  //Initializes
  allRooms=[];

  // Room A
  room = new Object();

  room.name = "A2"
  room.total = 5;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  //Room B
  room = new Object();

  room.name = "B2"
  room.total = 6;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room C
  room = new Object();

  room.name = "C2"
  room.total = 8;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room D
  room = new Object();

  room.name = "D2"
  room.total = 7;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room E
  room = new Object();

  room.name = "E2"
  room.total = 8;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room F
  room = new Object();

  room.name = "F2"
  room.total = 5;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room G
  room = new Object();

  room.name = "G2"
  room.total = 8;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room H
  room = new Object();

  room.name = "H2"
  room.total = 7;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room I
  room = new Object();

  room.name = "I2"
  room.total = 4;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  // Room J
  room = new Object();

  room.name = "J2"
  room.total = 6;
  room.names = monsterName.namesForLevel(room.total);
  room.monsters = selection.selectLevelMonsters(room.total);

  allRooms.push(room);

  return allRooms.length;
};
