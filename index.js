var roomSelector = require('./monsterLogic/levels/roomSelector.js');
var initialPopulation = require('./monsterLogic/initialPopulation.js');
var breeding = require('./monsterLogic/breeding.js');
var utility = require('./monsterLogic/utility.js');
var selection = require('./monsterLogic/selection.js');
var statChange = require('./monsterLogic/statChange.js');
var levelSetup = require('./monsterLogic/levelSetup.js');
var monsterTypes = require('./monsterLogic/monsterTypes.js');

///////////////////////////////////////
//                                   //
//                                   //
//             Setup                 //
//                                   //
//                                   //
///////////////////////////////////////
aType = [];
aTypeFitness = [];
bType = [];
bTypeFitness = [];
cType = [];
cTypeFitness = [];

initialPopulationSize = 50;
population = [];
populationFitnessArray = [];
monstersPerLevel = 10;
levelMonsterArray = [];
numberOfChildrenCreated = 50;
mutantChance = 30; //%
maxSkillIncreaseAmount = 3; // Randomly spread across stats

lifeExpectancy = 3;

/******************/
//     Stats      //
/******************/

numberOfStats = 3;
maxStartStat = 3;
numberOfTypes = 3;

/******************/
//    Initial     //
/******************/


/***************************/
//    Level room numbers   //
/***************************/
level1RoomNumber = 3;

level2RoomNumber = 2;
level2GenerationNumber = 20;

level3RoomNumber = 3;
level3GenerationNumber = 20;

level4RoomNumber = 1;
level4GenerationNumber = 20;

level5RoomNumber = 3;
level5GenerationNumber = 20;

level6RoomNumber = 2;
level6GenerationNumber = 20;

// This the fitness function that needs to be altered.
fitnessFunction = function(monster){
  return 2*monster.health_value + monster.speed_value + 2*monster.damage_value;
};

///////////////////////////////////////
//                                   //
//                                   //
//           Main Function           //
//                                   //
//                                   //
///////////////////////////////////////

Main = function(){
  population = initialPopulation.createInitialPopulation(initialPopulationSize);

  console.log("Level 1:");
  utility.printLevelDetails(roomSelector.selectRoomForLevel(1,level1RoomNumber));
  console.log("Level 1 done");

  for(u=0;u<level2GenerationNumber;u++){

    if(u==lifeExpectancy){
      population.splice(0,initialPopulationSize)
    }
    if(u>lifeExpectancy){
      population.splice(0,numberOfChildrenCreated)
    }
    breeding.createChildren();
  }

  console.log("Level 2:");
  utility.printLevelDetails(roomSelector.selectRoomForLevel(2,level2RoomNumber));
  console.log("Level 2 done");

  for(u=0;u<level3GenerationNumber;u++){
    population.splice(0,numberOfChildrenCreated)
    breeding.createChildren();
  }

  console.log("Level 3:");
  utility.printLevelDetails(roomSelector.selectRoomForLevel(3,level3RoomNumber));
  console.log("Level 3 done");

  for(u=0;u<level4GenerationNumber;u++){
    population.splice(0,numberOfChildrenCreated)
    breeding.createChildren();
  }

  console.log("Level 4:");
  utility.printLevelDetails(roomSelector.selectRoomForLevel(4,level4RoomNumber));
  console.log("Level 4 done");

  for(u=0;u<level5GenerationNumber;u++){
    population.splice(0,numberOfChildrenCreated)
    breeding.createChildren();
  }

  console.log("Level 5:");
  utility.printLevelDetails(roomSelector.selectRoomForLevel(5,level5RoomNumber));
  console.log("Level 5 done");

  for(u=0;u<level6GenerationNumber;u++){
    population.splice(0,numberOfChildrenCreated)
    breeding.createChildren();
  }

  console.log("Level 6:");
  utility.printLevelDetails(roomSelector.selectRoomForLevel(6,level6RoomNumber));
  console.log("Level6 done");

};

Main();
