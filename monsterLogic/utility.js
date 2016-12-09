var exports = module.exports = {};

// Gets a random integer between two numbers (min is inclusive and max is exclusive)
exports.getRandom = function(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// Converts decimal into binary
exports.decbin = function(dec,length){
  var out = "";
  while(length--)
    out += (dec >> length ) & 1;
  return out;
};


// Prints out all of the monsters
exports.printPopulation = function(){

  console.log("Monsters:");
  for(i=0; i<population.length; i++)
  {
    console.log(population[i].health_value,population[i].speed_value,
      population[i].damage_value,"(",population[i].fitness,")",
      "[", population[i].type_code,"]");
  }
};

exports.printSelectedLevelMonsters = function(){
  console.log("Monsters selected for the level:");
  for(x=0;x<levelMonsterArray.length;x++)
  {
    console.log(levelMonsterArray[x].health_value,
    levelMonsterArray[x].speed_value, levelMonsterArray[x].damage_value,
    levelMonsterArray[x].fitness);
  }
}

exports.printAverageFitness = function(){
  total = 0;
  for(i=0;i<population.length;i++)
  {
    total =  total + population[i].fitness;
  }
  average = total / population.length;
  console.log(average);
};
