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

    melee = 1; ranged = 2; mage = 1;
    room = new exports.Room("A5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 2;
    room = new exports.Room("D5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 2; mage = 2;
    room = new exports.Room("E5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 2; mage = 3;
    room = new exports.Room("G5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 4; mage = 3;
    room = new exports.Room("H5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 2;
    room = new exports.Room("J5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }
  /************************/
  //       No Melee       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 3;
    room = new exports.Room("C5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1;
    room = new exports.Room("F5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 1;
    room = new exports.Room("K5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 4;
    room = new exports.Room("L5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 2;
    room = new exports.Room("M5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 1;
    room = new exports.Room("N5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

  }
  /************************/
  //      Only Melee      //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 4; ranged = 0; mage = 0;
    room = new exports.Room("O5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 6; ranged = 0; mage = 0;
    room = new exports.Room("P5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 0;
    room = new exports.Room("Q5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 6; ranged = 0; mage = 0;
    room = new exports.Room("R5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 0;
    room = new exports.Room("S5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 5; ranged = 0; mage = 0;
    room = new exports.Room("T5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }

  /************************/
  //      No Ranged       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 3; ranged = 0; mage = 4;
    room = new exports.Room("U5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 1;
    room = new exports.Room("V5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 4;
    room = new exports.Room("W5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 0; mage = 2;
    room = new exports.Room("X5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 3;
    room = new exports.Room("Y5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 0; mage = 1;
    room = new exports.Room("Z5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }

  /************************/
  //     Only Ranged      //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0;
    room = new exports.Room("I5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AB5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 6; mage = 0;
    room = new exports.Room("AC5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AD5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 3; mage = 0;
    room = new exports.Room("AE5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 4; mage = 0;
    room = new exports.Room("AF5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }


  /************************/
  //       No mage       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 3; ranged = 2; mage = 0;
    room = new exports.Room("B5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0;
    room = new exports.Room("AG5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 4; mage = 0;
    room = new exports.Room("AH5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 4; ranged = 4; mage = 0;
    room = new exports.Room("AI5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 2; ranged = 3; mage = 0;
    room = new exports.Room("AJ5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 3; ranged = 2; mage = 0;
    room = new exports.Room("AK5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }

  /************************/
  //      Only mage      //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AL5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AM5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 3;
    room = new exports.Room("AN5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 6;
    room = new exports.Room("AO5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 5;
    room = new exports.Room("AP5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 4;
    room = new exports.Room("AQ5",[melee,ranged,mage],monsterName.namesForLevel(melee,ranged,mage),selection.selectLevelMonsters(melee,ranged,mage));
    allRooms.push(room);
  }
  return allRooms;
};
