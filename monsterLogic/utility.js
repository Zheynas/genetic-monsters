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

//  Fisher - Yates shuffle
exports.shuffle = function(array)
{
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
};

// Prints out all of the monsters
exports.printPopulation = function(){

  console.log("Monsters:");
  console.log("H S D   Fitness       Type        Name");
  for(i=0; i<population.length; i++)
  {
    console.log(population[i].health_value,population[i].speed_value,
      population[i].damage_value,"(",population[i].fitness,")",
      "[", population[i].type_code,"]",population[i].name);
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
