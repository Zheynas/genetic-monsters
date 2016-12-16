var utility = require('./utility.js');
var selection = require('./selection.js');
var statChange = require('./statChange.js');
var monsterName = require('./monsterNames.js');
var monsterTypes = require('./monsterTypes.js');


var exports = module.exports = {};

// Selects parents by the roulette selection method.
exports.createChildren = function(){
  populationFitnessArray = selection.createFitnessArray(population);


  for(x=0;x<numberOfChildrenCreated; x++)
  {
    parent1 = population[selection.rouletteChooser(populationFitnessArray)-1];
    parent2 = population[selection.rouletteChooser(populationFitnessArray)-1];

    // Breeds the two parents to create a child
    exports.crossoverBreeding(parent1,parent2);
  }
};

// Takes two parents and creates a child using crossover breeding.
exports.crossoverBreeding = function(parent1,parent2){
  var childMonster = new Object();

  childHealth = exports.oneCrossover(parent1.health_code,parent2.health_code);

  childMonster.health_code = childHealth;
  childMonster.health_value = exports.findValue(childHealth);

  childSpeed = exports.oneCrossover(parent1.speed_code,parent2.speed_code);

  childMonster.speed_code = childSpeed;
  childMonster.speed_value = exports.findValue(childSpeed);

  childDamage = exports.oneCrossover(parent1.damage_code,parent2.damage_code);

  childMonster.damage_code = childDamage;
  childMonster.damage_value = exports.findValue(childDamage);

  childMonster.type_code = exports.twoCrossover(parent1.type_code,parent2.type_code);

  //Checks if child will mutate
  if(exports.mutateChild(childMonster) == false)
  {
    childMonster.fitness = fitnessFunction(childMonster);
    monsterTypes.dominantType(childMonster);

  }

};

// Chances the codes at random to simulate mutation
exports.mutateChild = function(childMonster){


  randomNumber = utility.getRandom(0,99);
  if(randomNumber < mutantChance)
  {
    randomNumber = utility.getRandom(1,7); // 1-6 to produce a 3 digits binary number
    skillAddition = utility.decbin(randomNumber,3);

    // Health
    if(skillAddition.charAt(0)=="1"){
      statChange.changeHealth(childMonster,statChange.skillChange());
    }

    // Speed
    if(skillAddition.charAt(1)=="1"){
      statChange.changeSpeed(childMonster,statChange.skillChange());
    }

    // Damage
    if(skillAddition.charAt(1)=="1"){
      statChange.changeDamage(childMonster,statChange.skillChange());
    }

    childMonster.fitness = fitnessFunction(childMonster);
    childMonster.type_code = monsterTypes.mutateTypeCode(childMonster);

    monsterTypes.dominantType(childMonster);

  }
  // Child not selected to mutate
  else{
    return false;
  }
};

exports.findValue = function(code){

  value = parseInt(code,2);

  if(value == 0)
  {
    value =1;
    code = utility.decbin(value,5)
  }

  return value;

}



// One point crossover
exports.oneCrossover = function(parent1Code, parent2Code){

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


  return childMonsterCode
};

// Two point crossover
exports.twoCrossover = function(parent1Code,parent2Code){

  point1 = utility.getRandom(0,parent1Code.length);
  point2 = utility.getRandom(point1+1,parent1Code.length);

  parentOrder = utility.getRandom(0,2);

  switch (parentOrder) {
    case 0:

    parent1Section1 = parent1Code.substring(0,point1);
    parent1Section2 = parent1Code.substring(point2);
    parent2Section = parent2Code.substring(point1,point2);

    childType = parent1Section1.concat(parent2Section,parent1Section2);

      break;

    case 1:

    parent2Section1 = parent2Code.substring(0,point1);
    parent2Section2 = parent2Code.substring(point2);
    parent1Section = parent1Code.substring(point1,point2);

    childType = parent2Section1.concat(parent1Section,parent2Section2);

      break;
  }
  return childType;

}
