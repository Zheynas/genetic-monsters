var utility = require('../utility.js');
var breeding = require('../breeding.js');
var selection = require('../selection.js');
var monsterTypes = require('../monsterTypes.js');
var roomSelector = require('../levels/roomSelector.js');


var exports = module.exports = {};

exports.setup = function(level,room,generation){

  breedingChoice = "threeParentBreeding";

}

exports.createThreeParentChildren = function(){
  populationFitnessArray = selection.createFitnessArray(population);


  for(x=0;x<numberOfChildrenCreated; x++)
  {
    parent1 = population[selection.rouletteChooser(populationFitnessArray)-1];
    parent2 = population[selection.rouletteChooser(populationFitnessArray)-1];
    parent3 = population[selection.rouletteChooser(populationFitnessArray)-1];


    // Breeds the two parents to create a child
    exports.threeParentBreeding(parent1,parent2,parent3);
  }

}

exports.threeParentCrossover=function(parent1Code, parent2Code, parent3Code){

  // for each bit, if the first two match, use that.. if not, use the 3rd

  parentOrder = [parent1Code,parent1Code,parent1Code];
  parentOrder = utility.shuffle(parentOrder);

  childCode = "";

  for(i=0;i<parent1Code.length; i++)
  {
    if(parentOrder[0].charAt(i) == parentOrder[1].charAt(i)){

      childCode = childCode.concat(parentOrder[0].charAt(i))
    }else{
      childCode = childCode.concat(parentOrder[2].charAt(i))
    }
  }

  return childCode;
}


exports.threeParentBreeding = function(parent1, parent2, parent3){

  var childMonster = new Object();

  childHealth = exports.threeParentCrossover(parent1.health_code,parent2.health_code,parent3.health_code);

  childMonster.health_code = childHealth;
  childMonster.health_value = breeding.findValue(childMonster.health_code);

  childSpeed = exports.threeParentCrossover(parent1.speed_code,parent2.speed_code,parent3.speed_code);

  childMonster.speed_code = childSpeed;
  childMonster.speed_value = breeding.findValue(childMonster.speed_code);

  childDamage = exports.threeParentCrossover(parent1.damage_code,parent2.damage_code,parent3.damage_code);

  childMonster.damage_code = childDamage;
  childMonster.damage_value = breeding.findValue(childMonster.damage_code);

  childMonster.type_code = exports.threeParentCrossover(parent1.type_code,parent2.type_code,parent3.type_code);

  //Checks if child will mutate
  if(breeding.mutateChild(childMonster) == false)
  {
    childMonster.fitness = fitnessFunction(childMonster);
    monsterTypes.dominantType(childMonster);

  }

}
