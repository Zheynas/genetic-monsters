var initialPopulation = require('./monsterLogic/initialPopulation.js');
var levelSetup = require('./monsterLogic/levelSetup.js');
var utility = require('./monsterLogic/utility.js');
var roomSelector = require('./monsterLogic/levels/roomSelector.js');

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


currentGen = [];
lastGenTypePercentage = [0,0,0];

initialPopulationSize = 50;
population = [];
populationFitnessArray = [];
monstersPerLevel = 10;
levelMonsterArray = [];
numberOfChildrenCreated = 50;
mutantChance = 30; //%
maxSkillIncreaseAmount = 3; // Randomly spread across stats

lifeExpectancy = 3;
currentLevel=1;

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
level2GenerationNumber = 10;

level3RoomNumber = 3;
level3GenerationNumber = 10;

level4RoomNumber = 1;
level4GenerationNumber = 10;

level5RoomNumber = 3;
level5GenerationNumber = 10;

level6RoomNumber = 2;
level6GenerationNumber = 10;

// This the fitness function that needs to be altered.
fitnessFunction = function(monster){
  return monster.health_value*12 + monster.speed_value + 8*monster.damage_value;
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
  //utility.printPopulation();
  //roomSelector.selectRoomForLevel(1,level1RoomNumber)

  for(f=1;f<7;f++){
    levelSetup.playLevel();
  }

};

Main();
