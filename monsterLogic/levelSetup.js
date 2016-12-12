var utility = require('./utility.js');
var level1 = require('./level1.js');
var level2 = require('./level2.js');
var breeding = require('./breeding.js');


var exports = module.exports = {};

var currentLevel = 1;
var generationLevel = 1;

// Simulates a level being played
exports.playLevel = function(){
  console.log("Level ", currentLevel);

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
