var utility = require('./utility.js');
var level1 = require('./level1.js');
var level2 = require('./level2.js');

var exports = module.exports = {};

// Simulates a level being played - purely for show
exports.playLevel = function(){
  console.log("Level ", currentLevel);

  switch (currentLevel) {
    case 1:
    level1.selectRoomForLevel(level1RoomNumber);
    utility.printLevelDetails();
    break;

    case 2:
    level2.selectRoomForLevel(level2RoomNumber);
    utility.printLevelDetails();
    break;

  }

  console.log("Level", currentLevel, "Completed");

  // if current level = life expectancy - delete initial
  if(currentLevel >= lifeExpectancy+1){
    exports.monstersLifeExpired();
  }

  currentLevel = currentLevel +1;
};


exports.monstersLifeExpired= function(){

  if(currentLevel == lifeExpectancy+1){

    population.splice(0,initialPopulationSize);

  }else{
    population.splice(0,monstersPerLevel);
  }

  return population.length;
}
