var utility = require('../utility.js');
var selection = require('../selection.js');
var monsterName = require('../names.js');
var monsterTypes = require('../monsterTypes.js');

var exports = module.exports = {};

// types: [melee,ranged,magic,total]
exports.Room = function(name,types,names,monsters){
  this.name = name;
  this.types = types;
  this.names = names;
  this.monsters = monsters;
}


// Creates rooms for level 1
exports.createRooms = function(){

  //Initializes
  allRooms=[];
  avaliableTypes = monsterTypes.checkTypesExist();
  /************************/
  //       All types      //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 3; ranged = 3; magic = 3;
    room = new exports.Room("A6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 3; magic = 3;
    room = new exports.Room("D6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 1; magic = 3;
    room = new exports.Room("E6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 3; magic = 2;
    room = new exports.Room("G6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 1; magic = 1;
    room = new exports.Room("H6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 4; magic = 2;
    room = new exports.Room("J6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }
  /************************/
  //       No Melee       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 3; magic = 3;
    room = new exports.Room("C6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 1; magic = 3;
    room = new exports.Room("F6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 2; magic = 4;
    room = new exports.Room("K6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 3;
    room = new exports.Room("L6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 2;
    room = new exports.Room("M6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 1; magic = 1;
    room = new exports.Room("N6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }
  /************************/
  //      Only Melee      //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 3; ranged = 0; magic = 0;
    room = new exports.Room("O6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 0;
    room = new exports.Room("P6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 5; ranged = 0; magic = 0;
    room = new exports.Room("Q6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 6; ranged = 0; magic = 0;
    room = new exports.Room("R6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 0;
    room = new exports.Room("S6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 0;
    room = new exports.Room("T6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }
  /************************/
  //      No Ranged       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 2; ranged = 0; magic = 1;
    room = new exports.Room("U6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 1;
    room = new exports.Room("V6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 0; magic = 4;
    room = new exports.Room("W6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 3;
    room = new exports.Room("X6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 0; magic = 3;
    room = new exports.Room("Y6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 0; magic = 4;
    room = new exports.Room("Z6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }
  /************************/
  //     Only Ranged      //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 6; magic = 0;
    room = new exports.Room("I6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 5; magic = 0;
    room = new exports.Room("AB6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AC6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AD6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 6; magic = 0;
    room = new exports.Room("AE6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 0;
    room = new exports.Room("AF6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //       No Magic       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 4; ranged = 3; magic = 0;
    room = new exports.Room("B6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 3; magic = 0;
    room = new exports.Room("AG6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 1; magic = 0;
    room = new exports.Room("AH6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 2; magic = 0;
    room = new exports.Room("AI6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 4; magic = 0;
    room = new exports.Room("AJ6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 2; magic = 0;
    room = new exports.Room("AK6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }
  /************************/
  //      Only Magic      //
  /************************/
  if(avaliableTypes[2] == true){
    melee = 0; ranged = 0; magic = 6;
    room = new exports.Room("AL6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 5;
    room = new exports.Room("AM6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 6;
    room = new exports.Room("AN6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AO6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 4;
    room = new exports.Room("AP6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 6;
    room = new exports.Room("AQ6",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }
  return allRooms;
};
