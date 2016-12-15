var utility = require('./utility.js');
var selection = require('./selection.js');

var exports = module.exports = {};


exports.createTypeCode = function(){
  typeInfo = [];
  type = "";

  // Melee / Ranged / mage / rogue / warlock
  choices = ["AAAAAAAAAAAAAAAAAAAAA","BBBBBBBBBBBBBBBBBBBBB","CCCCCCCCCCCCCCCCCCCCC","DDDDDDDDDDDDDDDDDDDDD","EEEEEEEEEEEEEEEEEEEEE"];

  randomNumber = utility.getRandom(0,3); // 0 - 2
  type = choices[randomNumber];
  return type;
}

exports.mutateTypeCode = function(monster){

  code = monster.type_code
  randomNumber = utility.getRandom(0,code.length-2) // to make sure there are at least 2 changes
  while(randomNumber!==code.length){

    mutateChooser = utility.getRandom(0,5) // 0:A, 1:B, 2:C , 3:D, 4:E
    switch (mutateChooser) {
      case 0:
      code = utility.setCharAt(code,randomNumber,"A")
      break;
      case 1:
      code = utility.setCharAt(code,randomNumber,"B")
      break;
      case 2:
      code = utility.setCharAt(code,randomNumber,"C")
      break;
      case 2:
      code = utility.setCharAt(code,randomNumber,"D")
      break;
      case 2:
      code = utility.setCharAt(code,randomNumber,"E")
      break;

    }
    randomNumber = utility.getRandom(randomNumber+1,code.length+1)

  }
  return code;
}

// Finds out dominant type of a monster
exports.dominantType=function(monster){

  meleeCount = 0;
  rangedCount = 0;
  mageCount = 0;
  rogueCount = 0;
  warlockCount = 0;

  typeArray = [];

  for(j=0;j<monster.type_code.length;j++)
  {
    switch (monster.type_code.charAt(j)) {
      case "A":
      meleeCount = meleeCount+1;
      break;

      case "B":
      rangedCount = rangedCount+1;
      break;

      case "C":
      mageCount = mageCount+1;
      break;

      case "D":
      rogueCount = rogueCount+1;
      break;

      case "E":
      warlockCount = warlockCount+1;
      break;
    }
  }

  if(meleeCount>= rangedCount && meleeCount>= mageCount && meleeCount>= rogueCount && meleeCount>= warlockCount ){
    typeArray.push("A")
  }
  if(rangedCount>= meleeCount && rangedCount>= mageCount && rangedCount>= rogueCount && rangedCount>= warlockCount ){
    typeArray.push("B")
  }
  if(mageCount>= rangedCount && mageCount>= meleeCount && mageCount>= rogueCount && mageCount>= warlockCount ){
    typeArray.push("C")
  }
  if(rogueCount>= rangedCount && rogueCount>= meleeCount && rogueCount>= mageCount && rogueCount>= warlockCount ){
    typeArray.push("D")
  }
  if(warlockCount>= rangedCount && warlockCount>= meleeCount && warlockCount>= mageCount && warlockCount>= rogueCount ){
    typeArray.push("E")
  }

  if(typeArray.length>1){
    randomNumber= utility.getRandom(0,typeArray.length);
    type = typeArray[randomNumber];
  }

  monster.type = type;

  population.push(monster);
  return type
};

exports.checkTypesExist = function(){
  melee = true; ranged = true; mage = true;

  if(meleeType.length ==0){
    melee = false;
  }
  if(rangedType.length ==0){
    ranged = false;
  }
  if(mageType.length ==0){
    mage = false;
  }
  if(rogueType.length ==0){
    mage = false;
  }
  if(warlockType.length ==0){
    mage = false;
  }

  return [melee,ranged,mage]

}

exports.compareTypeArrays = function(){

// If last generation had a value >0 and the current one has a value of 0
// Then that type has "died"
  for(i=0;i<currentGen.length;i++){
    if(currentGen[i]==0){
      if(lastGenTypePercentage[i]!==0){
        console.log("*********************************************** DEAD *******************************");
      }
    }
  }

  lastGenTypePercentage = currentGen;
}

exports.createPercentageArray = function(){
  meleePercent = meleeType.length / population.length;
  rangedPercent = rangedType.length / population.length;
  magePercent = mageType.length / population.length;
  roguePercent = rogueType.length / population.length;
  warlockPercent = warlockType.length / population.length;

  currentGen = [meleePercent,rangedPercent,magePercent,roguePercent,warlockPercent];
}

exports.createTypeArrays = function(){

  // Initializes
  meleeType = [];
  rangedType = [];
  mageType = [];
  rogueType = [];
  warlockType = [];


  for(i=0;i<population.length;i++){

    switch (population[i].type) {
      case "A":
      meleeType.push(population[i]);
      break;
      case "B":
      rangedType.push(population[i]);
      break;
      case "C":
      mageType.push(population[i]);
      break;
      case "D":
      rogueType.push(population[i]);
      break;
      case "E":
      warlockType.push(population[i]);
      break;
    }
  }



  selection.createTypeFitnessArray();
};
