var utility = require('./utility.js');
var exports = module.exports = {};

  rouletteSelectionArray = [];
  levelMonsterArray = [];


// Populates array with cumulative fitness scores.
exports.createRouletteSelectionArray = function(population){

  // Initializes array
  rouletteSelectionArray = [];

  rouletteSelectionArray.push(0);
  rouletteSelectionArray.push(population[0].fitness);

  for(i=1;i<population.length;i++)
  {
    rouletteSelectionArray.push(rouletteSelectionArray[i]+population[i].fitness)
  }
  return rouletteSelectionArray;
};

// Returns the position of a chosen monster (using roulette selection)
// in the population array.
exports.rouletteChooser = function(){

  // Find a random number between 0 and the total of the cumulative fitness scores.
  randomNumber = utility.getRandom(0,rouletteSelectionArray[rouletteSelectionArray.length-1]);
  for(i=1;i<rouletteSelectionArray.length; i++)
  {
    if(randomNumber < rouletteSelectionArray[i] && randomNumber >= rouletteSelectionArray[i-1])
    {
      return i;
    }
  }

};

// Adds the appropriate amount of monsters selected using roulette selection
// into array of monsters for the level.
exports.selectLevelMonsters = function(numberOfMonsters){

  exports.createRouletteSelectionArray(population);

  // Initializes array
  levelMonsterArray = [];

  // Finds monsters
  for(j=0; j<numberOfMonsters; j++)
  {
    levelMonsterArray.push(population[exports.rouletteChooser()-1])
  }
  return levelMonsterArray;
}
