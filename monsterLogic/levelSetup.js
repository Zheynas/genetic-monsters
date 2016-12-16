var utility = require('./utility.js');
var level1 = require('./levels/level1.js');
var level2 = require('./levels/level2.js');
var breeding = require('./breeding.js');
var monsterTypes = require('./monsterTypes.js');
var roomSelector = require('./levels/roomSelector.js');



var exports = module.exports = {};

var currentLevel = 1;
var generationLevel = 1;

// Simulates a level being played
exports.playLevel = function(){
  console.log("Level ", currentLevel);

  switch (currentLevel) {

    case 1:
    utility.printLevelDetails(roomSelector.selectRoomForLevel(1,level1RoomNumber));
    exports.generationSimulator(level2GenerationNumber);
    break;

    case 2:
    utility.printLevelDetails(roomSelector.selectRoomForLevel(2,level2RoomNumber));
    exports.generationSimulator(level3GenerationNumber);
    break;

    case 3:
    utility.printLevelDetails(roomSelector.selectRoomForLevel(3,level3RoomNumber));
    exports.generationSimulator(level4GenerationNumber);
    break;

    case 4:
    utility.printLevelDetails(roomSelector.selectRoomForLevel(4,level4RoomNumber));
    exports.generationSimulator(level5GenerationNumber);
    break;

    case 5:
    utility.printLevelDetails(roomSelector.selectRoomForLevel(5,level5RoomNumber));
    exports.generationSimulator(level6GenerationNumber);
    break;

    case 6:
    utility.printLevelDetails(roomSelector.selectRoomForLevel(6,level6RoomNumber));
    break;

  }
  console.log("Level", currentLevel, "Completed");
  currentLevel = currentLevel +1;
};

// Simulates several rounds of evolution
exports.generationSimulator = function(generationNumber){

  if(currentLevel ==1){
    for(u=0;u<generationNumber;u++){

      if(u==lifeExpectancy){
        population.splice(0,initialPopulationSize)
      }
      if(u>lifeExpectancy){
        population.splice(0,numberOfChildrenCreated)
      }
      breeding.createChildren();
    }
  }else{
    for(u=0;u<generationNumber;u++){
      population.splice(0,numberOfChildrenCreated)
      breeding.createChildren();


    }
  }
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
