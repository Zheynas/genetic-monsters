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
currentLevel = 1;
numberOfChildrenCreated = 10;
mutantChance = 33; //%
maxSkillIncreaseAmount = 3; // Randomly spread across stats
numberOfStats = 3;
maxStartStat = 3;
numberOfTypes = 3;
lifeExpectancy = 3;
lengthOfTypeCode = 5;


/******************/
//    Level 1     //
/******************/
level1RoomNumber = 5;




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
  //utility.printPopulation();


  level1.selectRoomForLevel(level1RoomNumber);

  utility.printLevelDetails();







  //population = initialPopulation.createInitialPopulation(initialPopulationSize);

  // for(z=0;z<1000;z++){
  //
  //   levelSetup.playLevel();
  //   breeding.createChildren();
  //   //utility.printPopulation();
  //
  // }
  // utility.printPopulation();

};

/*
Create initial population
create room array for level

print level number

print room name
print monsters in room
print complete

print level Completed

create createChildren

*/

Main();
