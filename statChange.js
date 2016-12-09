var utility = require('./utility.js');
var exports = module.exports = {};


// Randomly decides whether the skill will increase or decrease by 1
exports.skillChange = function(){
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

exports.changeHealth= function(monster, changeAmount){
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

exports.changeSpeed= function(monster, changeAmount){

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

exports.changeDamage= function(monster, changeAmount){

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

// Not sure will be used

// Increases stats according to randomly selected amoubts
exports.increaseMonsterSkills = function(){

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

    exports.changeHealth(population[y],finalSkillChange[0]);
    exports.changeSpeed(population[y],finalSkillChange[1]);
    exports.changeDamage(population[y],finalSkillChange[2]);
    population[y].fitness = fitnessFunction(population[y]);

  }

  //Increase control stats
  exports.changeHealth(controlMonster,finalSkillChange[0]);
  exports.changeSpeed(controlMonster,finalSkillChange[1]);
  exports.changeDamage(controlMonster,finalSkillChange[2]);
  controlMonster.fitness = fitnessFunction(controlMonster);

};
