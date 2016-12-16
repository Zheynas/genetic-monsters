var utility = require('../utility.js');
var statChange = require('../statChange.js');

var exports = module.exports = {};


exports.statPill = function(){
  console.log("statPill");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],statChange.skillChange());
    statChange.changeSpeed(population[i],statChange.skillChange());
    statChange.changeDamage(population[i],statChange.skillChange());
  }

}



exports.healthUp = function(){
  console.log("healthUp");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],1);
  }
}

exports.healthDown = function(){
  console.log("healthDown");
  for(i=0;i<population.size;i++){
    statChange.changeHealth(population[i],-1);
  }
}

exports.speedUp = function(){
  console.log("speedUp");
  for(i=0;i<population.size;i++){
    statChange.changeSpeed(population[i],1);
  }
}

exports.speedDown = function(){
  console.log("speedDown");
  for(i=0;i<population.size;i++){
    statChange.changeSpeed(population[i],-1);
  }
}

exports.damageUp = function(){
  console.log("damageUp");
  for(i=0;i<population.size;i++){
    statChange.changeDamage(population[i],1);
  }
}

exports.damageDown = function(){
  console.log("damageDown");
  for(i=0;i<population.size;i++){
    statChange.changeDamage(population[i],-1);
  }
}
