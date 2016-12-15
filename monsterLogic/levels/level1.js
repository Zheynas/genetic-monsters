var utility = require('../utility.js');
var selection = require('../selection.js');
var monsterName = require('../names.js');
var monsterTypes = require('../monsterTypes.js');


var exports = module.exports = {};

// types: [melee,ranged,mage,total]
exports.Room = function(name,types,names,monsters,rogue,warlock){
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

    melee = 1; ranged = 2; mage = 1;
    room = new exports.Room("A1",[melee,ranged,mage,rouge,warlock],monsterName.namesForLevel(melee,ranged,mage,rouge,warlock),selection.selectLevelMonsters(melee,ranged,mage,rouge,warlock));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 2;
    room = new exports.Room("D1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 2; mage = 2;
    room = new exports.Room("E1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 2; mage = 3;
    room = new exports.Room("G1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 4; mage = 3;
    room = new exports.Room("H1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 2;
    room = new exports.Room("J1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //       No Melee       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 3;
    room = new exports.Room("C1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1;
    room = new exports.Room("F1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 1;
    room = new exports.Room("K1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 4;
    room = new exports.Room("L1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 2;
    room = new exports.Room("M1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 1;
    room = new exports.Room("N1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //      Only Melee      //
  /************************/

  if(avaliableTypes[0] == true){

    melee = 4; ranged = 0; mage = 0;
    room = new exports.Room("O1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 6; ranged = 0; mage = 0;
    room = new exports.Room("P1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 0;
    room = new exports.Room("Q1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 6; ranged = 0; mage = 0;
    room = new exports.Room("R1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 0;
    room = new exports.Room("S1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 5; ranged = 0; mage = 0;
    room = new exports.Room("T1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //      No Ranged       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 3; ranged = 0; mage = 4;
    room = new exports.Room("U1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 1;
    room = new exports.Room("V1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 4;
    room = new exports.Room("W1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 2;
    room = new exports.Room("X1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 3;
    room = new exports.Room("Y1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 1;
    room = new exports.Room("Z1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //     Only Ranged      //
  /************************/

  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0;
    room = new exports.Room("I1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AB1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 6; mage = 0;
    room = new exports.Room("AC1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AD1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 0;
    room = new exports.Room("AE1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AF1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //       No mage       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 3; ranged = 2; mage = 0;
    room = new exports.Room("B1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0;
    room = new exports.Room("AG1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 4; mage = 0;
    room = new exports.Room("AH1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 4; mage = 0;
    room = new exports.Room("AI1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 3; mage = 0;
    room = new exports.Room("AJ1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 2; mage = 0;
    room = new exports.Room("AK1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //      Only mage      //
  /************************/

  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AL1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AM1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AN1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 6;
    room = new exports.Room("AO1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 5;
    room = new exports.Room("AP1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 4;
    room = new exports.Room("AQ1",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  return allRooms;
};
