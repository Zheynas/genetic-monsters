var level1 = require('./level1.js');
var initialPopulation = require('./initialPopulation.js');
var breeding = require('./breeding.js');
var utility = require('./utility.js');
var selection = require('./selection.js');
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
//       Stat Change Functions       //
//                                   //
//                                   //
///////////////////////////////////////

// Randomly decides whether the skill will increase or decrease by 1
skillChange = function(){
  randomNumber = utility.getRandom(0,2); // 0 or 1

  if(randomNumber==0){
    return 1;
  }else{
    return -1;
  }
};

/***************/
//    Health   //
/***************/

changeHealth= function(monster, changeAmount){
  monster.health_value = monster.health_value + changeAmount;
  if(monster.health_value < 1){
    monster.health_value = 1;
  }
  monster.health_code = utility.decbin(monster.health_value,8);
  return monster ;

};


/***************/
//    Speed    //
/***************/

changeSpeed= function(monster, changeAmount){

  monster.speed_value = monster.speed_value + changeAmount;
  if(monster.speed_value < 1){
    monster.speed_value = 1;
  }
  monster.speed_code = utility.decbin(monster.speed_value,8);
  return monster ;

};

/***************/
//    Damage   //
/***************/

changeDamage= function(monster, changeAmount){

  monster.damage_value = monster.damage_value + changeAmount;
  if(monster.damage_value < 1){
    monster.damage_value = 1;
  }
  monster.damage_code = utility.decbin(monster.damage_value,8);
  return monster ;
};

/****************/
//    Mixture   //
/****************/

// Increases stats according to randomly selected amoubts
increaseMonsterSkills = function(){

  monsterSkillChange = [0,maxSkillIncreaseAmount+1];
  finalSkillChange = [];

  // create array beginning at 0 and ending at maxSkillIncreaseAmount
  // make numberOfStats-1 random numbers
  for(i=0; i<numberOfStats-1; i++)
  {
    monsterSkillChange.push(utility.getRandom(0,maxSkillIncreaseAmount+1));
  }

  // sort array
  monsterSkillChange.sort();

  // find differences between array elements
  for(x=0; x< numberOfStats+1; x++)
  {
    finalSkillChange.push( (monsterSkillChange[x+1]- monsterSkillChange[x]) );

  }

  // apply those to the stats.
  for(y=0;y<population.length;y++)
  {

    increaseHealth(population[y],finalSkillChange[0]);
    increaseSpeed(population[y],finalSkillChange[1]);
    increaseDamage(population[y],finalSkillChange[2]);
    population[y].fitness = fitnessFunction(population[y]);

  }

  //Increase control stats
  increaseHealth(controlMonster,finalSkillChange[0]);
  increaseSpeed(controlMonster,finalSkillChange[1]);
  increaseDamage(controlMonster,finalSkillChange[2]);
  controlMonster.fitness = fitnessFunction(controlMonster);

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
