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
    room = new exports.Room("A44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 1; rogue = 2; warlock = 1;
    room = new exports.Room("B44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  /************************/
  //     A, B, C, D       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("C44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("D44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, C, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("E44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("F44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("G44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("H44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, C, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("I44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("J44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //     B, C, D, E       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("K44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("L44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, C        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2]){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("M44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("N44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3]){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("O44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("P44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[4]){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("Q44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("R44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //       A, C, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("S44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("T44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, C, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("U44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("V44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, D, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("W44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("X44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, D        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Y44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Z44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("AA44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("BB44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, D, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("CC44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("DD44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       C, D, E        //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("EE44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("FF44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, B         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("GG44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("HH44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, C         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("II44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("JJ44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, D         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("KK44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("LL44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, E         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("MM44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("NN44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, C         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("OO44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("PP44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, D         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("QQ44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("RR44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, E         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("SS44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("TT44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, D         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("UU44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("VV44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, E         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("WW44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("XX44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         D, E         //
  /************************/
  if(avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("YY44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("ZZ44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          A           //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("AAA44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("BBB44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //          B           //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("CCC44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("DDD44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          C           //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("EEE44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("FFF44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          D           //
  /************************/
  if(avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("GGG44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("HHH44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          E           //
  /************************/
  if(avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("III44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("JJJ44",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  return allRooms;
};
