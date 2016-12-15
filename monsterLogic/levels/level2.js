var utility = require('../utility.js');
var selection = require('../selection.js');
var monsterName = require('../names.js');
var monsterTypes = require('../monsterTypes.js');

var exports = module.exports = {};

// types: [melee,ranged,mage,total]
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

    melee = 3; ranged = 3; mage = 3;
    room = new exports.Room("A2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 3; mage = 3;
    room = new exports.Room("D2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 1; mage = 3;
    room = new exports.Room("E2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 3; mage = 2;
    room = new exports.Room("G2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 1; mage = 1;
    room = new exports.Room("H2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 4; mage = 2;
    room = new exports.Room("J2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }
  /************************/
  //       No Melee       //
  /************************/

  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 3; mage = 3;
    room = new exports.Room("C2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 1; mage = 3;
    room = new exports.Room("F2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 4;
    room = new exports.Room("K2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 3;
    room = new exports.Room("L2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 2;
    room = new exports.Room("M2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 1; mage = 1;
    room = new exports.Room("N2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //      Only Melee      //
  /************************/

  if(avaliableTypes[0] == true){

    melee = 3; ranged = 0; mage = 0;
    room = new exports.Room("O2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 0;
    room = new exports.Room("P2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 5; ranged = 0; mage = 0;
    room = new exports.Room("Q2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 6; ranged = 0; mage = 0;
    room = new exports.Room("R2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 0;
    room = new exports.Room("S2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 0;
    room = new exports.Room("T2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //      No Ranged       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 2; ranged = 0; mage = 1;
    room = new exports.Room("U2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 1;
    room = new exports.Room("V2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 0; mage = 4;
    room = new exports.Room("W2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 3;
    room = new exports.Room("X2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 0; mage = 3;
    room = new exports.Room("Y2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 4;
    room = new exports.Room("Z2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }
  /************************/
  //     Only Ranged      //
  /************************/

  if(avaliableTypes[1] == true){

    melee = 0; ranged = 6; mage = 0;
    room = new exports.Room("I2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 5; mage = 0;
    room = new exports.Room("AB2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AC2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AD2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 6; mage = 0;
    room = new exports.Room("AE2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 0;
    room = new exports.Room("AF2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //       No mage       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 4; ranged = 3; mage = 0;
    room = new exports.Room("B2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 3; mage = 0;
    room = new exports.Room("AG2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 1; mage = 0;
    room = new exports.Room("AH2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 2; mage = 0;
    room = new exports.Room("AI2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 4; mage = 0;
    room = new exports.Room("AJ2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0;
    room = new exports.Room("AK2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }

  /************************/
  //      Only mage      //
  /************************/

  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 6;
    room = new exports.Room("AL2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 5;
    room = new exports.Room("AM2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 6;
    room = new exports.Room("AN2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AO2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 4;
    room = new exports.Room("AP2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 6;
    room = new exports.Room("AQ2",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }

  return allRooms;

};
