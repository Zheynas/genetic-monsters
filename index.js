var initialPopulation = require('./monsterLogic/initialPopulation.js');
var levelSetup = require('./monsterLogic/levelSetup.js');
var utility = require('./monsterLogic/utility.js');
var roomSelector = require('./monsterLogic/levels/roomSelector.js');
var monsterTypes = require('./monsterLogic/monsterTypes.js');
var breeding = require('./monsterLogic/breeding.js');

var roomGen = require('./roomGen');

var prompt = require('prompt');
///////////////////////////////////////
//                                   //
//                                   //
//             Setup                 //
//                                   //
//                                   //
///////////////////////////////////////
meleeType = [];
meleeTypeFitness = [];
rangedType = [];
rangedTypeFitness = [];
mageType = [];
mageTypeFitness = [];
rogueType = [];
rogueTypeFitness = [];
warlockType = [];
warlockTypeFitness = [];

deadTypes = [];

breedingChoice = "twoParentBreeding";


currentGen = [];
lastGenTypePercentage = [0,0,0,0,0];

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

  for(f=1;f<7;f++){
    levelSetup.playLevel();
  }

};

//Main();
roomGen.main();
