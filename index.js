var level1 = require('./monsterLogic/levels/level1.js');
var level2 = require('./monsterLogic/levels/level2.js');
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

initialPopulationSize = 10;
population = [];
populationFitnessArray = [];
monstersPerLevel = 10;
levelMonsterArray = [];
numberOfChildrenCreated = 10;
mutantChance = 30; //%
maxSkillIncreaseAmount = 3; // Randomly spread across stats

lifeExpectancy = 3;
lengthOfTypeCode = 5;

/******************/
//     Stats      //
/******************/

numberOfStats = 3;
maxStartStat = 3;
numberOfTypes = 3;

/******************/
//    Initial     //
/******************/


/******************/
//    Level 1     //
/******************/
level1RoomNumber = 3;

/******************/
//    Level 2     //
/******************/
level2RoomNumber = 5;
level2GenerationNumber = 20;


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
  level1.selectRoomForLevel(level1RoomNumber);
  utility.printLevelDetails(levelOneRooms);
  console.log("Level 1 done");
  console.log("No old ones to kill off");

  for(u=0;u<10;u++){
    breeding.createChildren();
  }

  console.log("Level 2:");
  level2.selectRoomForLevel(level2RoomNumber);
  utility.printLevelDetails(levelTwoRooms);
  console.log("Level 2 done");
  console.log("No old ones to kill off");

};

Main();
