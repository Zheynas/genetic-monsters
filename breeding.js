var utility = require('./utility.js');
var selection = require('./selection.js');
var statChange = require('./statChange.js');


var exports = module.exports = {};

// Selects parents by the roulette selection method.
exports.createChildren = function(){
  selection.createRouletteSelectionArray(population);

  for(x=0;x<numberOfChildrenCreated; x++)
  {
    parent1 = population[selection.rouletteChooser()-1];
    parent2 = population[selection.rouletteChooser()-1];

    // Breeds the two parents to create a child
    exports.crossoverBreeding(parent1,parent2);
  }
};

// Takes two parents and creates a child using crossover breeding.
exports.crossoverBreeding = function(parent1,parent2){

  var childMonster = new Object();

  childHealth = exports.breedStat(
    parent1.health_value, parent1.health_code,
    parent2.health_value, parent2.health_code);

  childMonster.health_value = childHealth[0];
  childMonster.health_code = childHealth[1];

  childSpeed = exports.breedStat(
    parent1.speed_value, parent1.speed_code,
    parent2.speed_value, parent2.speed_code);

  childMonster.speed_value = childSpeed[0];
  childMonster.speed_code = childSpeed[1];

  childDamage = exports.breedStat(
    parent1.damage_value, parent1.damage_code,
    parent2.damage_value, parent2.damage_code);

  childMonster.damage_value = childDamage[0];
  childMonster.damage_code = childDamage[1];

  childMonster.type_code = exports.breedTypeCode(parent1.type_code,parent2.type_code);

  //Checks if child will mutate
  if(exports.mutateChild(childMonster) == false)
  {
    childMonster.fitness = fitnessFunction(childMonster);
    population.push(childMonster);
  }

};

// Chances the codes at random to simulate mutation
exports.mutateChild = function(childMonster){

  randomNumber = utility.getRandom(0,99);
  if(randomNumber< mutantChance)
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

    // Adds child to population
    population.push(childMonster);
  }
  // Child not selected to mutate
  else{
    return false;
  }
};

exports.breedTypeCode = function(parent1,parent2){

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


exports.breedStat = function(parent1Value, parent1Code, parent2Value, parent2Code){

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
