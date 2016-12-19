var utility = require('./utility.js');
var level1 = require('./levels/level1.js');
var level2 = require('./levels/level2.js');
var breeding = require('./breeding.js');
var monsterTypes = require('./monsterTypes.js');
var roomSelector = require('./levels/roomSelector.js');
var optionSelection = require('./levelDetails/optionSelection.js');



var exports = module.exports = {};

var currentLevel = 1;
var generationLevel = 1;


// Simulates a level being played
exports.playLevel = function(){

  level1RoomNumber = 3;
  level1GenerationNumber = 0;

  level2RoomNumber = 2;
  level2GenerationNumber = 10;

  level3RoomNumber = 3;
  level3GenerationNumber = 10;

  level4RoomNumber = 4;
  level4GenerationNumber = 10;

  level5RoomNumber = 3;
  level5GenerationNumber = 10;

  level6RoomNumber = 2;
  level6GenerationNumber = 10;

  console.log("Level ", currentLevel);

  switch (currentLevel) {

    case 1:
    optionSelection.options("statPill",1,level1RoomNumber,level1GenerationNumber);
    break;

    case 2:
    optionSelection.options("statPill",2,level2RoomNumber,level2GenerationNumber);
    break;

    case 3:
    optionSelection.options("MMF",3,level3RoomNumber,level3GenerationNumber);
    break;

    case 4:
    optionSelection.options("healthDown",4,level4RoomNumber,level4GenerationNumber);
    break;

    case 5:
    optionSelection.options("obesity",5,level5RoomNumber,level5GenerationNumber);
    break;

    case 6:
    optionSelection.options("speedUp",6,level6RoomNumber,level6GenerationNumber);
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
