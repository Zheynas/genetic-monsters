
// DO NOT USE ON INITAL POPULATION IF THEY START AT 100% TYPE!!!!

threeParentCrossover=function(parent1, parent2, parent3){

// for each bit, if the first two match, use that.. if not, use the 3rd

parentOrder = [parent1,parent2,parent3];
parentOrder = shuffle(parentOrder);

child = "";

for(i=0;i<parent1.type_code.length; i++)
{
  if(parentOrder[0].type_code.charAt(i) == parentOrder[1].type_code.charAt(i)){

    child = child.concat(parentOrder[0].type_code.charAt(i))
  }else{
    child =child.concat(parentOrder[2].type_code.charAt(i))
  }
}

  return child;
}

//  Fisher - Yates shuffle
function shuffle (array) {
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
}


// Gets a random integer between two numbers (min is inclusive and max is exclusive)
getRandom = function(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// Converts decimal into binary
decbin = function(dec,length){
  var out = "";
  while(length--)
    out += (dec >> length ) & 1;
  return out;
};

var monster = {
  health_value: 3,
  health_code:"00000011",
  speed_value: 3,
  speed_code:"00000011",
  damage_value: 3,
  damage_code:"00000011",
  type_code: "AAAAAAAA",
  dominant_type: "A",
  fitness : 15
}

var monster2 = {
  health_value: 1,
  health_code:"00000001",
  speed_value: 1,
  speed_code:"00000001",
  damage_value: 1,
  damage_code:"00000001",
  type_code: "CCCCCCCC",
  dominant_type: "C",
  fitness : 15
}

var monster3 = {
  health_value: 2,
  health_code:"00000010",
  speed_value: 2,
  speed_code:"00000010",
  damage_value: 2,
  damage_code:"00000010",
  type_code: "BBBBBBBB",
  dominant_type: "B",
  fitness : 15
}

threeParentCrossover(monster, monster2, monster3);
