var utility = require('./utility.js')
population = [];

// Creates the first population
module.exports.createInitialPopulation = function(populationSize){

  for(i=0;i<populationSize;i++)
  {
    module.exports.createMonster();
  }
  return population;
};

// Creates a monster (for initial population)
module.exports.createMonster = function(){
  var monster = new Object();

  monster.health_value = utility.getRandom(1,maxStartStat+1);
  monster.health_code = utility.decbin(monster.health_value,8);

  monster.speed_value = utility.getRandom(1,maxStartStat+1);
  monster.speed_code = utility.decbin(monster.speed_value,8);

  monster.damage_value = utility.getRandom(1,maxStartStat+1);
  monster.damage_code = utility.decbin(monster.damage_value,8);

  monster.fitness = fitnessFunction(monster);
  monster.type_code = module.exports.createTypeCode();

  population.push(monster);

  return monster;
};

module.exports.createTypeCode = function(){
  type = "";
  // Melee / Ranged / Magic
  choices = ["AAAAA","BBBBB","CCCCC"];

  randomNumber = utility.getRandom(0,3); // 0 - 2
  type = choices[randomNumber];

return type;
}

// This the fitness function that needs to be altered.
fitnessFunction = function(monster){
  return 2*monster.health_value + monster.speed_value + 2*monster.damage_value;
};
