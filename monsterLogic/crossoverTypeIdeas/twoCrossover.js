
// find two random numbers, one after the other
// random order the parents

twoPointCrossover = function(parent1, parent2){

  point1 = getRandom(0,parent1.type_code.length);
  point2 = getRandom(point1+1,parent1.type_code.length);

  parentOrder = getRandom(0,2);

  switch (parentOrder) {
    case 0:

    parent1Section1 = parent1.type_code.substring(0,point1);
    parent1Section2 = parent1.type_code.substring(point2);
    parent2Section = parent2.type_code.substring(point1,point2);

    child = parent1Section1.concat(parent2Section,parent1Section2);

      break;

    case 1:

    parent2Section1 = parent2.type_code.substring(0,point1);
    parent2Section2 = parent2.type_code.substring(point2);
    parent1Section = parent1.type_code.substring(point1,point2);

    child = parent2Section1.concat(parent1Section,parent2Section2);


      break;
  }
  return child;
};

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



twoPointCrossover(monster,monster2);
