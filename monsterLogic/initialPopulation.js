var utility = require('./utility.js');
var monsterName = require('./monsterNames.js');
var monsterTypes = require('./monsterTypes.js');

var exports = module.exports = {};

// Creates the first population
exports.createInitialPopulation = function(){

  // Initialize
  population = [];

  for(i=0;i<initialPopulationSize;i++)
  {
    exports.createMonster();
  }

  return population;
};


// Creates a monster (for initial population)
exports.createMonster = function(){
  var monster = new Object();

  monster.health_value = utility.getRandom(1,maxStartStat+1);
  monster.health_code = utility.decbin(monster.health_value,8);

  monster.speed_value = utility.getRandom(1,maxStartStat+1);
  monster.speed_code = utility.decbin(monster.speed_value,8);

  monster.damage_value = utility.getRandom(1,maxStartStat+1);
  monster.damage_code = utility.decbin(monster.damage_value,8);

  monster.fitness = fitnessFunction(monster);

  monster.type_code = monsterTypes.createTypeCode();
  monsterTypes.dominantType(monster);

  return monster;
};
