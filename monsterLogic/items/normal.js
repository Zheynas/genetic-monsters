var utility = require('../utility.js');
var breeding = require('../breeding.js');
var roomSelector = require('../levels/roomSelector.js');



var exports = module.exports = {};

exports.setup = function (level,room,generation){
  exports.generationSimulator(generation);
  utility.printLevelDetails(roomSelector.selectRoomForLevel(level,room));

}

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
