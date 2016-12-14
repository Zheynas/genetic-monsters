var utility = require('./utility.js');
var monsterName = require('./names.js');

var exports = module.exports = {};



// Populates array with cumulative fitness scores.
exports.createFitnessArray = function(monsterArray){

  // Initializes array
  monsterFitnessArray = [];

  monsterFitnessArray.push(0);
  monsterFitnessArray.push(monsterArray[0].fitness);

  for(i=1;i<monsterArray.length;i++)
  {
    monsterFitnessArray.push(monsterFitnessArray[i]+monsterArray[i].fitness)
  }
  return monsterFitnessArray;
};

// Returns the position of a chosen monster (using roulette selection)
// in the population array.
exports.rouletteChooser = function(monsterArray){
  // Find a random number between 0 and the total of the cumulative fitness scores.
  randomNumber = utility.getRandom(0,monsterArray[monsterArray.length-1]);
  for(i=1;i<monsterArray.length; i++)
  {
    if(randomNumber < monsterArray[i] && randomNumber >= monsterArray[i-1])
    {
      return i;
    }
  }

};

// takes each type array and does the fitness thang
exports.createTypeFitnessArray = function(){

  if(aType.length==0){
    aTypeFitness = [];
  }else{
    aTypeFitness = exports.createFitnessArray(aType);
  }
  if(bType.length==0){
    bTypeFitness = [];
  }else{
    bTypeFitness = exports.createFitnessArray(bType);
  }
  if(cType.length==0){
    cTypeFitness = [];
  }else{
    cTypeFitness = exports.createFitnessArray(cType);
  }

}

// Adds the appropriate amount of monsters selected using roulette selection
// into array of monsters for the level.
exports.selectLevelMonsters = function(melee,ranged,magic){
  meleeArray=[];
  rangedArray=[];
  magicArray=[];

  for(j=0;j<melee;j++){
    meleeArray.push(aType[exports.rouletteChooser(aTypeFitness)-1])
  }
  for(j=0;j<ranged;j++){
    rangedArray.push(bType[exports.rouletteChooser(bTypeFitness)-1])
  }
  for(j=0;j<magic;j++){
    magicArray.push(cType[exports.rouletteChooser(cTypeFitness)-1])
  }

  return [meleeArray,rangedArray,magicArray]

}
