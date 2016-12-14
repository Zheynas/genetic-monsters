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

    melee = 1; ranged = 2; magic = 1;
    room = new exports.Room("A3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 3; magic = 2;
    room = new exports.Room("D3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 2; magic = 2;
    room = new exports.Room("E3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 2; magic = 3;
    room = new exports.Room("G3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 4; magic = 3;
    room = new exports.Room("H3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 3; magic = 2;
    room = new exports.Room("J3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }
  /************************/
  //       No Melee       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; magic = 3;
    room = new exports.Room("C3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 2; magic = 1;
    room = new exports.Room("F3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 1;
    room = new exports.Room("K3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 2; magic = 4;
    room = new exports.Room("L3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 2;
    room = new exports.Room("M3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 1;
    room = new exports.Room("N3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }
  /************************/
  //      Only Melee      //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 4; ranged = 0; magic = 0;
    room = new exports.Room("O3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 6; ranged = 0; magic = 0;
    room = new exports.Room("P3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 0;
    room = new exports.Room("Q3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 6; ranged = 0; magic = 0;
    room = new exports.Room("R3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 0;
    room = new exports.Room("S3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 5; ranged = 0; magic = 0;
    room = new exports.Room("T3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }

  /************************/
  //      No Ranged       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 3; ranged = 0; magic = 4;
    room = new exports.Room("U3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 1;
    room = new exports.Room("V3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 4;
    room = new exports.Room("W3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 2;
    room = new exports.Room("X3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 0; magic = 3;
    room = new exports.Room("Y3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 1;
    room = new exports.Room("Z3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }

  /************************/
  //     Only Ranged      //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; magic = 0;
    room = new exports.Room("I3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AB3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 6; magic = 0;
    room = new exports.Room("AC3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AD3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 0;
    room = new exports.Room("AE3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AF3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //       No Magic       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 3; ranged = 2; magic = 0;
    room = new exports.Room("B3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 2; magic = 0;
    room = new exports.Room("AG3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 4; magic = 0;
    room = new exports.Room("AH3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 4; magic = 0;
    room = new exports.Room("AI3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 3; magic = 0;
    room = new exports.Room("AJ3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 2; magic = 0;
    room = new exports.Room("AK3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }

  /************************/
  //      Only Magic      //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AL3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AM3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AN3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 6;
    room = new exports.Room("AO3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 5;
    room = new exports.Room("AP3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 4;
    room = new exports.Room("AQ3",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);
  }
  return allRooms;
};
