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

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("A55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 1; rogue = 2; warlock = 1;
    room = new exports.Room("B55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  /************************/
  //     A, B, C, D       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("C55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("D55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, C, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("E55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("F55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("G55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("H55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, C, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("I55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("J55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //     B, C, D, E       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("K55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("L55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, C        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2]){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("M55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("N55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3]){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("O55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("P55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[4]){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("Q55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("R55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //       A, C, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("S55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("T55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, C, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("U55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("V55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, D, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("W55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("X55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, D        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Y55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Z55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("AA55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("BB55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, D, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("CC55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("DD55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       C, D, E        //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("EE55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("FF55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, B         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("GG55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("HH55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, C         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("II55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("JJ55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, D         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("KK55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("LL55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, E         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("MM55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("NN55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, C         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("OO55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("PP55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, D         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("QQ55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("RR55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, E         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("SS55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("TT55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, D         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("UU55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("VV55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, E         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("WW55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("XX55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         D, E         //
  /************************/
  if(avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("YY55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("ZZ55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          A           //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("AAA55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("BBB55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //          B           //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("CCC55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("DDD55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          C           //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("EEE55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("FFF55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          D           //
  /************************/
  if(avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("GGG55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("HHH55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          E           //
  /************************/
  if(avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("III55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("JJJ55",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  return allRooms;
};
