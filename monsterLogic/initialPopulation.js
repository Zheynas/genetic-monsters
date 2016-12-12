var utility = require('./utility.js');
var monsterName = require('./names.js');

var exports = module.exports = {};

// Creates the first population
exports.createInitialPopulation = function(){

  // Initialize
  population = [];
  // names = monsterName.namesForLevel(initialPopulationSize);

  for(i=0;i<initialPopulationSize;i++)
  {
    exports.createMonster(i);
  }
  return population;
};


// Creates a monster (for initial population)
exports.createMonster = function(i){
  var monster = new Object();

  monster.health_value = utility.getRandom(1,maxStartStat+1);
  monster.health_code = utility.decbin(monster.health_value,8);

  monster.speed_value = utility.getRandom(1,maxStartStat+1);
  monster.speed_code = utility.decbin(monster.speed_value,8);

  monster.damage_value = utility.getRandom(1,maxStartStat+1);
  monster.damage_code = utility.decbin(monster.damage_value,8);

  monster.fitness = fitnessFunction(monster);
  monster.type_code = exports.createTypeCode();

  // monster.name = names[i];

  population.push(monster);

  return monster;
};

exports.createTypeCode = function(){
  type = "";
  // Melee / Ranged / Magic
  choices = ["AAAAAAAAAAAAA","BBBBBBBBBBBBB","CCCCCCCCCCCCC"];

  randomNumber = utility.getRandom(0,3); // 0 - 2
  type = choices[randomNumber];

return type;
}
