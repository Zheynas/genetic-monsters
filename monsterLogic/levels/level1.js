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
    room = new exports.Room("A1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 3; magic = 2;
    room = new exports.Room("D1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 2; magic = 2;
    room = new exports.Room("E1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 2; magic = 3;
    room = new exports.Room("G1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 4; magic = 3;
    room = new exports.Room("H1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 3; magic = 2;
    room = new exports.Room("J1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //       No Melee       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; magic = 3;
    room = new exports.Room("C1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 2; magic = 1;
    room = new exports.Room("F1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 1;
    room = new exports.Room("K1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 2; magic = 4;
    room = new exports.Room("L1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 2;
    room = new exports.Room("M1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 1;
    room = new exports.Room("N1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //      Only Melee      //
  /************************/

  if(avaliableTypes[0] == true){

    melee = 4; ranged = 0; magic = 0;
    room = new exports.Room("O1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 6; ranged = 0; magic = 0;
    room = new exports.Room("P1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 0;
    room = new exports.Room("Q1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 6; ranged = 0; magic = 0;
    room = new exports.Room("R1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 0;
    room = new exports.Room("S1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 5; ranged = 0; magic = 0;
    room = new exports.Room("T1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //      No Ranged       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 3; ranged = 0; magic = 4;
    room = new exports.Room("U1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 1;
    room = new exports.Room("V1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 4;
    room = new exports.Room("W1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 0; magic = 2;
    room = new exports.Room("X1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 0; magic = 3;
    room = new exports.Room("Y1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 0; magic = 1;
    room = new exports.Room("Z1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //     Only Ranged      //
  /************************/

  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; magic = 0;
    room = new exports.Room("I1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AB1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 6; magic = 0;
    room = new exports.Room("AC1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AD1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 3; magic = 0;
    room = new exports.Room("AE1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 4; magic = 0;
    room = new exports.Room("AF1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //       No Magic       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 3; ranged = 2; magic = 0;
    room = new exports.Room("B1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 1; ranged = 2; magic = 0;
    room = new exports.Room("AG1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 4; magic = 0;
    room = new exports.Room("AH1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 4; ranged = 4; magic = 0;
    room = new exports.Room("AI1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 2; ranged = 3; magic = 0;
    room = new exports.Room("AJ1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 3; ranged = 2; magic = 0;
    room = new exports.Room("AK1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  /************************/
  //      Only Magic      //
  /************************/

  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AL1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AM1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 3;
    room = new exports.Room("AN1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 6;
    room = new exports.Room("AO1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 5;
    room = new exports.Room("AP1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

    melee = 0; ranged = 0; magic = 4;
    room = new exports.Room("AQ1",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
    allRooms.push(room);

  }

  return allRooms;
};
