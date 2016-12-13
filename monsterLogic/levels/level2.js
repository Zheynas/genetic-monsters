var utility = require('../utility.js');
var selection = require('../selection.js');
var monsterName = require('../names.js');
var monsterTypes = require('../monsterTypes.js');

var exports = module.exports = {};

// Creates rooms for level 2
exports.createRooms = function(){

  //Initializes
  allRooms=[];

  // Room A
  room = new Object();

  room.name = "A2"
  room.melee = 1;
  room.ranged = 4;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  //Room B
  room = new Object();

  room.name = "B2"
  room.melee = 4;
  room.ranged = 4;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room C
  room = new Object();

  room.name = "C2"
  room.melee = 1;
  room.ranged = 5;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room D
  room = new Object();

  room.name = "D2"
  room.melee = 1;
  room.ranged = 4;
  room.magic = 6;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room E
  room = new Object();

  room.name = "E2"
  room.melee = 2;
  room.ranged = 4;
  room.magic = 4;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room F
  room = new Object();

  room.name = "F2"
  room.melee = 4;
  room.ranged = 4;
  room.magic = 0;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room G
  room = new Object();

  room.name = "G2"
  room.melee = 0;
  room.ranged = 4;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room H
  room = new Object();

  room.name = "H2"
  room.melee = 6;
  room.ranged = 0;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room I
  room = new Object();

  room.name = "I2"
  room.melee = 4;
  room.ranged = 4;
  room.magic = 3;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  // Room J
  room = new Object();

  room.name = "J2"
  room.melee = 0;
  room.ranged = 4;
  room.magic = 6;
  room.total = room.melee + room.ranged + room.magic;
  room.names = monsterName.namesForLevel(room.melee,room.ranged,room.magic);
  room.monsters = selection.selectLevelMonsters(room.melee,room.ranged,room.magic);

  allRooms.push(room);

  return allRooms;
};
