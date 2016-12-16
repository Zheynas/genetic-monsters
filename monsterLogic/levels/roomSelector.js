var monsterTypes = require('../monsterTypes.js');
var level1 = require('./level1.js');
var level2 = require('./level2.js');
var level3 = require('./level3.js');
var level4 = require('./level4.js');
var level5 = require('./level5.js');
var level6 = require('./level6.js');
var utility = require('../utility.js');

var exports = module.exports = {};

exports.selectRoomForLevel = function(level,numberOfRooms){
  monsterTypes.createTypeArrays();
  monsterTypes.createPercentageArray()
  monsterTypes.compareTypeArrays();
  //utility.printLevelStats();

  switch (level) {
    case 1:
    rooms = utility.shuffle(level1.createRooms());
    selectedRooms = rooms.slice(0,numberOfRooms);
    return selectedRooms;
    break;

    case 2:
    rooms = utility.shuffle(level2.createRooms());
    selectedRooms = rooms.slice(0,numberOfRooms);
    return selectedRooms;
    break;

    case 3:
    rooms = utility.shuffle(level3.createRooms());
    selectedRooms = rooms.slice(0,numberOfRooms);
    return selectedRooms;
    break;

    case 4:
    rooms = utility.shuffle(level4.createRooms());
    selectedRooms = rooms.slice(0,numberOfRooms);
    return selectedRooms;
    break;

    case 5:
    rooms = utility.shuffle(level5.createRooms());
    selectedRooms = rooms.slice(0,numberOfRooms);
    return selectedRooms;
    break;

    case 6:
    rooms = utility.shuffle(level6.createRooms());
    selectedRooms = rooms.slice(0,numberOfRooms);
    return selectedRooms;
    break;

  }

}
