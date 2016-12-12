var level1 = require('./monsterLogic/level1.js');
var initialPopulation = require('./monsterLogic/initialPopulation.js');
var breeding = require('./monsterLogic/breeding.js');
var utility = require('./monsterLogic/utility.js');
var selection = require('./monsterLogic/selection.js');
var statChange = require('./monsterLogic/statChange.js');
var levelSetup = require('./monsterLogic/levelSetup.js');

///////////////////////////////////////
//                                   //
//                                   //
//             Setup                 //
//                                   //
//                                   //
///////////////////////////////////////


initialPopulationSize = 10;
population = [];
rouletteSelectionArray = [];
monstersPerLevel = 10;
levelMonsterArray = [];
numberOfChildrenCreated = 10;
mutantChance = 33; //%
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
level2GenerationNumber = 10;


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
  // utility.printPopulation();


     levelSetup.playLevel();
     levelSetup.playLevel();
  //  utility.printPopulation();

};

Main();
