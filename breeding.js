var utility = require('./utility.js');

// Selects parents by the roulette selection method.
createChildren = function(){
  createRouletteSelectionArray();

  for(x=0;x<numberOfChildrenCreated; x++)
  {
    parent1 = population[rouletteChooser()-1];
    parent2 = population[rouletteChooser()-1];

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
