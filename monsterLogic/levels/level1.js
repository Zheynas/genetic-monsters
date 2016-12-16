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
    room = new exports.Room("A11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 3; mage = 1; rogue = 2; warlock = 1;
    room = new exports.Room("B11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  /************************/
  //     A, B, C, D       //
  /************************/

  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("C11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("D11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, C, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("E11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("F11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, B, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("G11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("H11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //     A, C, D, E       //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("I11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("J11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //     B, C, D, E       //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("K11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("L11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, C        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[2]){

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("M11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("N11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[3]){

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("O11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("P11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, B, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true && avaliableTypes[4]){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("Q11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("R11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //       A, C, D        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("S11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("T11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, C, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("U11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("V11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       A, D, E        //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("W11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("X11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, D        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[3]){

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Y11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("Z11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, C, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("AA11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("BB11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       B, D, E        //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("CC11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("DD11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //       C, D, E        //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true && avaliableTypes[4]){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("EE11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 1;
    room = new exports.Room("FF11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, B         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[1] == true){

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("GG11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("HH11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, C         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[2] == true){

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("II11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("JJ11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, D         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[3] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("KK11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("LL11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         A, E         //
  /************************/
  if(avaliableTypes[0] == true && avaliableTypes[4] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("MM11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("NN11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, C         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[2] == true){

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("OO11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("PP11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, D         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("QQ11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("RR11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         B, E         //
  /************************/
  if(avaliableTypes[1] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("SS11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("TT11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, D         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("UU11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 1; warlock = 0;
    room = new exports.Room("VV11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         C, E         //
  /************************/
  if(avaliableTypes[2] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("WW11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 1;
    room = new exports.Room("XX11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //         D, E         //
  /************************/
  if(avaliableTypes[3] == true && avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("YY11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 1;
    room = new exports.Room("ZZ11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          A           //
  /************************/
  if(avaliableTypes[0] == true){

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("AAA11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 1; ranged = 0; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("BBB11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }
  /************************/
  //          B           //
  /************************/
  if(avaliableTypes[1] == true){

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("CCC11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 2; mage = 0; rogue = 0; warlock = 0;
    room = new exports.Room("DDD11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          C           //
  /************************/
  if(avaliableTypes[2] == true){

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("EEE11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 1; rogue = 0; warlock = 0;
    room = new exports.Room("FFF11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          D           //
  /************************/
  if(avaliableTypes[3] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("GGG11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 1; warlock = 0;
    room = new exports.Room("HHH11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

  }
  /************************/
  //          E           //
  /************************/
  if(avaliableTypes[4] == true){

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("III11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);

    melee = 0; ranged = 0; mage = 0; rogue = 0; warlock = 1;
    room = new exports.Room("JJJ11",[melee,ranged,mage,rogue,warlock],monsterName.namesForLevel(melee,ranged,mage,rogue,warlock),selection.selectLevelMonsters(melee,ranged,mage,rogue,warlock));
    allRooms.push(room);
  }

  return allRooms;
};
