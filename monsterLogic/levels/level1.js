var utility = require('../utility.js');
var selection = require('../selection.js');
var monsterName = require('../names.js');
var monsterTypes = require('../monsterTypes.js');


var exports = module.exports = {};

levelOneRooms=[];
allRooms=[];

// randomly selects required number of rooms
exports.selectRoomForLevel = function(numberOfRooms){

  monsterTypes.createTypeArrays();

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
  room.melee = 1;
  room.ranged = 2;
  room.magic = 1;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  //Room B
  room = new Object();

  room.name = "B1"
  room.melee = 3;
  room.ranged = 2;
  room.magic = 0;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room C
  room = new Object();

  room.name = "C1"
  room.melee = 0;
  room.ranged = 2;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room D
  room = new Object();

  room.name = "D1"
  room.melee = 1;
  room.ranged = 3;
  room.magic = 2;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room E
  room = new Object();

  room.name = "E1"
  room.melee = 2;
  room.ranged = 2;
  room.magic = 2;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room F
  room = new Object();

  room.name = "F1"
  room.melee = 0;
  room.ranged = 2;
  room.magic = 1;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room G
  room = new Object();

  room.name = "G1"
  room.melee = 4;
  room.ranged = 2;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room H
  room = new Object();

  room.name = "H1"
  room.melee = 1;
  room.ranged = 4;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room I
  room = new Object();

  room.name = "I1"
  room.melee = 0;
  room.ranged = 2;
  room.magic = 0;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room J
  room = new Object();

  room.name = "J1"
  room.melee = 1;
  room.ranged = 3;
  room.magic = 2;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  return allRooms.length;
};
