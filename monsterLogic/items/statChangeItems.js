var utility = require('../utility.js');
var statChange = require('../statChange.js');

var exports = module.exports = {};


exports.statPill = function(){
  console.log("statPill");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],statChange.skillChange());
    statChange.changeSpeed(population[i],statChange.skillChange());
    statChange.changeDamage(population[i],statChange.skillChange());
    population[i].fitness = fitnessFunction(population[i]);
  }

}

exports.obesity = function(){
  console.log("obesity");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],1);
    statChange.changeSpeed(population[i],-1);
    population[i].fitness = fitnessFunction(population[i]);
  }
}

exports.healthUp = function(){
  console.log("healthUp");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],1);
    population[i].fitness = fitnessFunction(population[i]);

  }
}

exports.healthDown = function(){
  console.log("healthDown");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],-1);
    population[i].fitness = fitnessFunction(population[i]);

  }
}

exports.speedUp = function(){
  console.log("speedUp");
  for(i=0;i<population.size;i++){
    statChange.changeSpeed(population[i],1);
    population[i].fitness = fitnessFunction(population[i]);

  }
}

exports.speedDown = function(){
  console.log("speedDown");
  for(i=0;i<population.size;i++){
    statChange.changeSpeed(population[i],-1);
    population[i].fitness = fitnessFunction(population[i]);

  }
}

exports.damageUp = function(){
  console.log("damageUp");
  for(i=0;i<population.size;i++){
    statChange.changeDamage(population[i],1);
    population[i].fitness = fitnessFunction(population[i]);

  }
}

exports.damageDown = function(){
  console.log("damageDown");
  for(i=0;i<population.size;i++){
    statChange.changeDamage(population[i],-1);
    population[i].fitness = fitnessFunction(population[i]);

  }
}
