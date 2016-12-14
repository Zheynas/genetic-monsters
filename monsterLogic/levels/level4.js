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

      melee = 3; ranged = 3; magic = 3;
      room = new exports.Room("A4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 3; magic = 3;
      room = new exports.Room("D4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 1; magic = 3;
      room = new exports.Room("E4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 3; ranged = 3; magic = 2;
      room = new exports.Room("G4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 4; ranged = 1; magic = 1;
      room = new exports.Room("H4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 4; magic = 2;
      room = new exports.Room("J4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);
    }
    /************************/
    //       No Melee       //
    /************************/
    if(avaliableTypes[1] == true && avaliableTypes[2] == true){

      melee = 0; ranged = 3; magic = 3;
      room = new exports.Room("C4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 1; magic = 3;
      room = new exports.Room("F4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 2; magic = 4;
      room = new exports.Room("K4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 3; magic = 3;
      room = new exports.Room("L4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 3; magic = 2;
      room = new exports.Room("M4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 1; magic = 1;
      room = new exports.Room("N4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

    }
    /************************/
    //      Only Melee      //
    /************************/
    if(avaliableTypes[0] == true){

      melee = 3; ranged = 0; magic = 0;
      room = new exports.Room("O4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 4; ranged = 0; magic = 0;
      room = new exports.Room("P4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 5; ranged = 0; magic = 0;
      room = new exports.Room("Q4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 6; ranged = 0; magic = 0;
      room = new exports.Room("R4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 3; ranged = 0; magic = 0;
      room = new exports.Room("S4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 4; ranged = 0; magic = 0;
      room = new exports.Room("T4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);
    }

    /************************/
    //      No Ranged       //
    /************************/

    if(avaliableTypes[0] == true && avaliableTypes[2] == true){

      melee = 2; ranged = 0; magic = 1;
      room = new exports.Room("U4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 4; ranged = 0; magic = 1;
      room = new exports.Room("V4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 0; magic = 4;
      room = new exports.Room("W4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 4; ranged = 0; magic = 3;
      room = new exports.Room("X4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 0; magic = 3;
      room = new exports.Room("Y4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 1; ranged = 0; magic = 4;
      room = new exports.Room("Z4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

    }
    /************************/
    //     Only Ranged      //
    /************************/
    if(avaliableTypes[1] == true){

      melee = 0; ranged = 6; magic = 0;
      room = new exports.Room("I4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 5; magic = 0;
      room = new exports.Room("AB4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 4; magic = 0;
      room = new exports.Room("AC4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 4; magic = 0;
      room = new exports.Room("AD4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 6; magic = 0;
      room = new exports.Room("AE4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 3; magic = 0;
      room = new exports.Room("AF4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);
    }


    /************************/
    //       No Magic       //
    /************************/
    if(avaliableTypes[0] == true && avaliableTypes[1] == true){

      melee = 4; ranged = 3; magic = 0;
      room = new exports.Room("B4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 3; magic = 0;
      room = new exports.Room("AG4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 1; ranged = 1; magic = 0;
      room = new exports.Room("AH4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 2; ranged = 2; magic = 0;
      room = new exports.Room("AI4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 1; ranged = 4; magic = 0;
      room = new exports.Room("AJ4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 1; ranged = 2; magic = 0;
      room = new exports.Room("AK4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

    }
    /************************/
    //      Only Magic      //
    /************************/
    if(avaliableTypes[2] == true){

      melee = 0; ranged = 0; magic = 6;
      room = new exports.Room("AL4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 0; magic = 5;
      room = new exports.Room("AM4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 0; magic = 6;
      room = new exports.Room("AN4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 0; magic = 3;
      room = new exports.Room("AO4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 0; magic = 4;
      room = new exports.Room("AP4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);

      melee = 0; ranged = 0; magic = 6;
      room = new exports.Room("AQ4",[melee,ranged,magic],monsterName.namesForLevel(melee,ranged,magic),selection.selectLevelMonsters(melee,ranged,magic));
      allRooms.push(room);
    }
    return allRooms;
  };
