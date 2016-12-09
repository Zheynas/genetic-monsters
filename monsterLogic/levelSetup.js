var utility = require('./utility.js');
var exports = module.exports = {};

// Simulates a level being played - purely for show
exports.playLevel = function(){
  console.log("Level ", currentLevel);
  //
  // level1RoomSelection();
  //
  // for(i=0; i< level1Rooms.length;i++){
  //
  //   console.log("Room: ", level1Rooms[i].name);
  // }

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
