var utility = require('./utility.js');
var selection = require('./selection.js');

var exports = module.exports = {};


exports.createTypeCode = function(){
  typeInfo = [];
  type = "";

  // Melee / Ranged / mage
  choices = ["AAAAAAAAAAAAA","BBBBBBBBBBBBB","CCCCCCCCCCCCC"];

  randomNumber = utility.getRandom(0,3); // 0 - 2
  type = choices[randomNumber];
  return type;
}

exports.mutateTypeCode = function(monster){

  code = monster.type_code
  randomNumber = utility.getRandom(0,code.length-2) // to make sure there are at least 2 changes
  while(randomNumber!==code.length){

    mutateChooser = utility.getRandom(0,3) // 0:A, 1:B, 2:C
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

    }
    randomNumber = utility.getRandom(randomNumber+1,code.length+1)

  }
  return code;
}

// Finds out dominant type of a monster
exports.dominantType=function(monster){

  aCount = 0;
  bCount = 0;
  cCount = 0;
  typeArray = [];

  for(j=0;j<monster.type_code.length;j++)
  {
    switch (monster.type_code.charAt(j)) {
      case "A":
      aCount = aCount+1;
      break;

      case "B":
      bCount = bCount+1;
      break;

      case "C":
      cCount = cCount+1;
      break;
    }
  }

  if(aCount>= bCount && aCount>= cCount ){
    typeArray.push("A")
  }
  if(bCount>= aCount && bCount>= cCount ){
    typeArray.push("B")
  }
  if(cCount>= bCount && cCount>= aCount ){
    typeArray.push("C")
  }

  if(typeArray.length>1){

    randomNumber= utility.getRandom(0,2); //0 or 1
    if(randomNumber==0){
      type = typeArray[1];
    }else{
      type = typeArray[0];
    }
  }else{
    type = typeArray[0];
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

  currentGen = [meleePercent,rangedPercent,magePercent];
}

exports.createTypeArrays = function(){

  // Initializes
  meleeType = [];
  rangedType = [];
  mageType = [];

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
    }
  }



  selection.createTypeFitnessArray();
};
