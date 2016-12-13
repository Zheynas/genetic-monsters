var utility = require('./utility.js');
var level1 = require('./levels/level1.js');
var level2 = require('./levels/level2.js');
var breeding = require('./breeding.js');
var monsterTypes = require('./monsterTypes.js');


var exports = module.exports = {};

var currentLevel = 1;
var generationLevel = 1;

// Simulates a level being played
exports.playLevel = function(){
  console.log("Level ", currentLevel);
  monsterTypes.createTypeArrays();


  switch (currentLevel) {

    case 1:
    level1.selectRoomForLevel(level1RoomNumber);
    utility.printLevelDetails();
    exports.generationSimulator(level2GenerationNumber);
    break;

    case 2:
    breeding.createChildren();
    level2.selectRoomForLevel(level2RoomNumber);
    utility.printLevelDetails();
    break;

  }
  console.log("Level", currentLevel, "Completed");
  currentLevel = currentLevel +1;
};

// Simulates several rounds of evolution
exports.generationSimulator = function(generationNumber){
  simulationEnd = generationLevel+generationNumber;

  for(z=0; z<simulationEnd; z++)
  {
    if(generationLevel>=lifeExpectancy+1){
      exports.monstersLifeExpired();
    }
    breeding.createChildren();
    generationLevel = generationLevel+1;
  }
};

// Deletes monsters that would have died of old age
exports.monstersLifeExpired= function(){
  if(generationLevel == lifeExpectancy+1){
    population.splice(0,initialPopulationSize);
  }else{
    population.splice(0,monstersPerLevel);
  }
  return population.length;
}


/*
Create initial population //

Create type arrays //
Create type fitness arrays //
Select rooms //
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
