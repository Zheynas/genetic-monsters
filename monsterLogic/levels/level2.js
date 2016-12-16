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
    room = new exports.Room("A22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 1; rogue = 2; warlock = 1;
    room = new exports.Room("B22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  /************************/
  //     A, B, C, D       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("C22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("D22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, C, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("E22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("F22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("G22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("H22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, C, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("I22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("J22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //     B, C, D, E       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("K22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("L22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, C        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2]){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("M22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("N22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3]){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("O22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("P22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[4]){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("Q22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("R22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //       A, C, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("S22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("T22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, C, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("U22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("V22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, D, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("W22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("X22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, D        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Y22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Z22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("AA22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("BB22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, D, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("CC22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("DD22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       C, D, E        //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("EE22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("FF22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, B         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("GG22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("HH22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, C         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("II22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("JJ22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, D         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("KK22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("LL22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, E         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("MM22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("NN22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, C         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("OO22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("PP22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, D         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("QQ22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("RR22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, E         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("SS22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("TT22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, D         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("UU22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("VV22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, E         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("WW22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("XX22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         D, E         //
  /************************/
  if(avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("YY22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("ZZ22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          A           //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("AAA22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("BBB22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //          B           //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("CCC22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("DDD22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          C           //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("EEE22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("FFF22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          D           //
  /************************/
  if(avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("GGG22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("HHH22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          E           //
  /************************/
  if(avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("III22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("JJJ22",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  return allRooms;
};
