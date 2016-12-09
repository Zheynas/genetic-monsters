var level1 = require('./level1.js');
var initialPopulation = require('./initialPopulation.js');
var breeding = require('./breeding.js');
var utility = require('./utility.js');
var selection = require('./selection.js');
var statChange = require('./statChange.js');

///////////////////////////////////////
//                                   //
//                                   //
//             Setup                 //
//                                   //
//                                   //
///////////////////////////////////////

// Melee / archer / magic

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
controlMonster = {
  health_value: 3,
  health_code:"00000011",
  speed_value: 3,
  speed_code:"00000011",
  damage_value: 3,
  damage_code:"00000011",
  type_code: "AAAAA",
  dominant_type: "A",
  fitness : 15
}

// This the fitness function that needs to be altered.
fitnessFunction = function(monster){
  return 2*monster.health_value + monster.speed_value + 2*monster.damage_value;
};



// Deletes the end monsters
deleteTestMonsters = function(){
  population.splice(initialPopulation-1, population.length - initialPopulation);
  if(population.length == initialPopulation)
  {
    return 1;
  }
  else{
    return 0;
  }
};


///////////////////////////////////////
//                                   //
//                                   //
//         Utility Functions         //
//                                   //
//                                   //
///////////////////////////////////////


// Prints out all of the monsters
printPopulation = function(){
  console.log("Control Monster: ", controlMonster.health_value,
  controlMonster.speed_value, controlMonster.damage_value, controlMonster.fitness );

  console.log("Other Monsters:");
  for(i=0; i<population.length; i++)
  {
    console.log(population[i].health_value,population[i].speed_value,
      population[i].damage_value,"(",population[i].fitness,")",
      "[", population[i].type_code,"]");
  }
};

printSelectedLevelMonsters = function(){
  console.log("Monsters selected for the level:");
  for(x=0;x<levelMonsterArray.length;x++)
  {
    console.log(levelMonsterArray[x].health_value,
    levelMonsterArray[x].speed_value, levelMonsterArray[x].damage_value,
    levelMonsterArray[x].fitness);
  }
}

printAverageFitness = function(){
  total = 0;
  for(i=0;i<population.length;i++)
  {
    total =  total + population[i].fitness;
  }
  average = total / population.length;
  console.log(average);
};



monstersLifeExpired= function(){

  population.splice(0,monstersPerLevel);

  return population.length;
}

///////////////////////////////////////
//                                   //
//                                   //
//         Level Functions           //
//                                   //
//                                   //
///////////////////////////////////////

// Simulates a level being played - purely for show
playLevel = function(){
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
  if(currentLevel > lifeExpectancy+1){

    monstersLifeExpired();


  }

  currentLevel = currentLevel +1;
};

// meleeMonsters =[];
// rangedMonsters = [];
// magicMonsters = [];
//
// createMonsterTypeArray = function(){
//
//   for(i=0; i< population.length;i++)
//   {
//
//     switch (population[i].) {
//       case expression:
//
//         break;
//       default:
//
//     }
//
//
//
//
//
//
//
//
//   }
//
//
//
//
// }
//
// selectMonstersForRoom = function(room){
//
//   // Find # of each type required
//
//
// }

///////////////////////////////////////
//                                   //
//                                   //
//           Main Function           //
//                                   //
//                                   //
///////////////////////////////////////

Main = function(){

  population = initialPopulation.createInitialPopulation(initialPopulationSize);
  printPopulation();
  //playLevel();





  for(z=0;z<5;z++){

    playLevel();
    breeding.createChildren(population);
    printPopulation();


  }

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

///////////////////////////////////////
//                                   //
//                                   //
//                                   //
//                                   //
//                                   //
///////////////////////////////////////
