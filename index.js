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
//   Monster Selection Functions     //
//                                   //
//                                   //
///////////////////////////////////////

//
// // Populates array with cumulative fitness scores.
// createRouletteSelectionArray = function(){
//
//   // Initializes array
//   rouletteSelectionArray = [];
//
//   rouletteSelectionArray.push(0);
//   rouletteSelectionArray.push(population[0].fitness);
//
//   for(i=1;i<population.length;i++)
//   {
//     rouletteSelectionArray.push(rouletteSelectionArray[i]+population[i].fitness)
//   }
//
//   return rouletteSelectionArray;
// };
//
// // Returns the position of a chosen monster (using roulette selection)
// // in the population array.
// rouletteChooser = function(){
//
//   // Find a random number between 0 and the total of the cumulative fitness scores.
//   randomNumber = utility.getRandom(0,rouletteSelectionArray[rouletteSelectionArray.length-1]);
//   for(i=1;i<rouletteSelectionArray.length; i++)
//   {
//     if(randomNumber < rouletteSelectionArray[i] && randomNumber >= rouletteSelectionArray[i-1])
//     {
//       return i;
//     }
//   }
//
// };
//
// // Adds the appropriate amount of monsters selected using roulette selection
// // into array of monsters for the level.
// selectLevelMonsters = function(numberOfMonsters){
//
//   createRouletteSelectionArray();
//
//   // Initializes array
//   levelMonsterArray = [];
//
//   // Finds monsters
//   for(j=0; j<numberOfMonsters; j++)
//   {
//     levelMonsterArray.push(population[rouletteChooser()])
//
//   }
//   return levelMonsterArray;
// }

///////////////////////////////////////
//                                   //
//                                   //
//       Breeding Functions          //
//                                   //
//                                   //
///////////////////////////////////////

// Selects parents by the roulette selection method.
createChildren = function(){
  selection.createRouletteSelectionArray(population);

  for(x=0;x<numberOfChildrenCreated; x++)
  {
    parent1 = population[selection.rouletteChooser()-1];
    parent2 = population[selection.rouletteChooser()-1];

    // Breeds the two parents to create a child
    crossoverBreeding(parent1,parent2);
  }

};

// Takes two parents and creates a child using crossover breeding.
crossoverBreeding = function(parent1,parent2){

  var childMonster = new Object();

  childHealth = breedStat(
    parent1.health_value, parent1.health_code,
    parent2.health_value, parent2.health_code);

  childMonster.health_value = childHealth[0];
  childMonster.health_code = childHealth[1];

  childSpeed = breedStat(
    parent1.speed_value, parent1.speed_code,
    parent2.speed_value, parent2.speed_code);

  childMonster.speed_value = childSpeed[0];
  childMonster.speed_code = childSpeed[1];

  childDamage = breedStat(
    parent1.damage_value, parent1.damage_code,
    parent2.damage_value, parent2.damage_code);

  childMonster.damage_value = childDamage[0];
  childMonster.damage_code = childDamage[1];

  childMonster.type_code = breedTypeCode(parent1.type_code,parent2.type_code);

  //Checks if child will mutate
  if(mutateChild(childMonster) == false)
  {
    childMonster.fitness = fitnessFunction(childMonster);
    population.push(childMonster);
  }

};

// Chances the codes at random to simulate mutation
mutateChild = function(childMonster){

  randomNumber = utility.getRandom(0,99);
  if(randomNumber< mutantChance)
  {
    randomNumber = utility.getRandom(1,7); // 1-6 to produce a 3 digits binary number
    skillAddition = utility.decbin(randomNumber,3);

    // Health
    if(skillAddition.charAt(0)=="1"){
      changeHealth(childMonster,skillChange());
    }

    // Speed
    if(skillAddition.charAt(1)=="1"){
      changeSpeed(childMonster,skillChange());
    }

    // Damage
    if(skillAddition.charAt(1)=="1"){
      changeDamage(childMonster,skillChange());
    }

    childMonster.fitness = fitnessFunction(childMonster);

    // Adds child to population
    population.push(childMonster);
  }
  // Child not selected to mutate
  else{
    return false;
  }
};

///////////////////////////////////////
//                                   //
//                                   //
//     Stats creation functions      //
//                                   //
//                                   //
///////////////////////////////////////

breedTypeCode = function(parent1,parent2){

  parentOrder = utility.getRandom(0,2); // 0 or 1
  randomNumber = utility.getRandom(0,parent1.length);
  splitPoint = parent1.length - randomNumber;

  //Parent 1 on the left of the split
  if(parentOrder == 1){
    parent1Section = parent1.substring(0,splitPoint);
    parent2Section = parent2.substring(splitPoint)
    childType = parent1Section.concat(parent2Section);
  }
  // Parent 2 on the left of the split
  else{
    parent2Section = parent2.substring(0,splitPoint);
    parent1Section = parent1.substring(splitPoint)
    childType = parent2Section.concat(parent1Section);
  }

  // make object to add dominantType at the same time
  return childType;

}

// decideDominantType = function(typeCode){
//
//   dominantType="";
//   aCount = 0;
//   bCount = 0;
//   cCount = 0;
//
//   for(i=0;i<lengthOfTypeCode; i++)
//   {
//     switch(typeCode.charAt(i)){
//
//       case("A"):
//       aCount = aCount +1;
//       break;
//
//       case("B"):
//       bCount = bCount +1;
//       break;
//
//       case("C"):
//       cCount = cCount +1;
//       break;
//     }
//   }
//
//   if(aCount>)
//
//
//
//
//
//   return dominantType;
// }

breedStat = function(parent1Value, parent1Code, parent2Value, parent2Code){

  parentOrder = utility.getRandom(0,2); // 0 or 1
  randomNumber = utility.getRandom(0,4); // 0 - 3  ** this is to do with the length of the binary string
  splitPoint = parent1Code.length - randomNumber;

  //Parent 1 on the left of the split
  if(parentOrder == 1){
    parent1Section = parent1Code.substring(0,splitPoint);
    parent2Section = parent2Code.substring(splitPoint)
    childMonsterCode = parent1Section.concat(parent2Section);
  }
  // Parent 2 on the left of the split
  else{
    parent2Section = parent2Code.substring(0,splitPoint);
    parent1Section = parent1Code.substring(splitPoint)
    childMonsterCode = parent2Section.concat(parent1Section);
  }

  // turns binary into decimal
  childMonsterValue = parseInt(childMonsterCode,2);

  if(childMonsterValue == 0)
  {
    childMonsterValue =1;
    childMonsterCode = utility.decbin(childMonsterValue,8)
  }

  return[childMonsterValue, childMonsterCode]
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
    createChildren();

  }
  printPopulation();

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
