var utility = require('./utility.js');
var level1 = require('./levels/level1.js');
var level2 = require('./levels/level2.js');
var breeding = require('./breeding.js');
var monsterTypes = require('./monsterTypes.js');
var roomSelector = require('./levels/roomSelector.js');
var optionSelection = require('./optionSelection.js');



var exports = module.exports = {};

var currentLevel = 1;
var generationLevel = 1;

// Simulates a level being played
exports.playLevel = function(){
  console.log("Level ", currentLevel);

  switch (currentLevel) {

    case 1:
    optionSelection.options("normal",1,level1RoomNumber,level1GenerationNumber);
    break;

    case 2:
    optionSelection.options("MMF",2,level2RoomNumber,level2GenerationNumber);
    break;

    case 3:
    optionSelection.options("normal");
    break;

    case 4:
    optionSelection.options("normal");
    break;

    case 5:
    optionSelection.options("normal");
    break;

    case 6:
    optionSelection.options("normal");
    break;

  }

  console.log("Level", currentLevel, "Completed");
  currentLevel = currentLevel +1;
};



/*
Create initial population // T

Create type arrays // T
Create type fitness arrays // T
Select rooms // T
Find monsters needed from type fitness //
Play Level //
Kill old ones //
Increase skill of survivers --
Create population fitness array
Create baby monsters
Mutate (if chosen)

Create type arrays
Create type fitness arrays
Select rooms
Find monsters needed from type fitness
Play Level
Kill old ones
Increase skill of survivers
Create population fitness array
Create baby monsters
Mutate (if chosen)


 */
