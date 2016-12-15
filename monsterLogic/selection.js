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

  if(meleeType.length==0){
    meleeTypeFitness = [];
  }else{
    meleeTypeFitness = exports.createFitnessArray(meleeType);
  }
  if(rangedType.length==0){
    rangedTypeFitness = [];
  }else{
    rangedTypeFitness = exports.createFitnessArray(rangedType);
  }
  if(mageType.length==0){
    mageTypeFitness = [];
  }else{
    mageTypeFitness = exports.createFitnessArray(mageType);
  }

}

// Adds the appropriate amount of monsters selected using roulette selection
// into array of monsters for the level.
exports.selectLevelMonsters = function(melee,ranged,mage){
  meleeArray=[];
  rangedArray=[];
  mageArray=[];

  for(j=0;j<melee;j++){
    meleeArray.push(meleeType[exports.rouletteChooser(meleeTypeFitness)-1])
  }
  for(j=0;j<ranged;j++){
    rangedArray.push(rangedType[exports.rouletteChooser(rangedTypeFitness)-1])
  }
  for(j=0;j<mage;j++){
    mageArray.push(mageType[exports.rouletteChooser(mageTypeFitness)-1])
  }

  return [meleeArray,rangedArray,mageArray]

}
