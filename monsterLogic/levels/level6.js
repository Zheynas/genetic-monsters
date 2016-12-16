var utility = require('../utility.js');
var selection = require('../selection.js');
var monsterName = require('../monsterNames.js');
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

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("A66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 1; rogue = 2; warlock = 1;
    room = new exports.Room("B66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  /************************/
  //     A, B, C, D       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("C66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("D66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, C, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("E66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("F66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("G66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("H66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, C, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("I66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("J66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //     B, C, D, E       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("K66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("L66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, C        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2]){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("M66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("N66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3]){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("O66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("P66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[4]){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("Q66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("R66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //       A, C, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("S66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("T66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, C, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("U66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("V66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, D, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("W66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("X66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, D        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Y66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Z66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("AA66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("BB66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, D, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("CC66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("DD66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       C, D, E        //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("EE66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("FF66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, B         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("GG66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("HH66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, C         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("II66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("JJ66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, D         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("KK66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("LL66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, E         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("MM66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("NN66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, C         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("OO66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("PP66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, D         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("QQ66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("RR66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, E         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("SS66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("TT66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, D         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("UU66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("VV66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, E         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("WW66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("XX66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         D, E         //
  /************************/
  if(avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("YY66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("ZZ66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          A           //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("AAA66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("BBB66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //          B           //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("CCC66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("DDD66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          C           //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("EEE66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("FFF66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          D           //
  /************************/
  if(avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("GGG66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("HHH66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          E           //
  /************************/
  if(avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("III66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("JJJ66",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  return allRooms;
};
