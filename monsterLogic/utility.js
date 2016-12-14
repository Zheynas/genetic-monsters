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


exports.printLevelStats=function(){

    console.log("Total monsters in population: ", population.length,"[",currentGen[0], "/",currentGen[1],"/",currentGen[2],"]");

}

// Changes the character of a string at a given index
exports.setCharAt=function(str,index,chr){
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
};

exports.printTypeArrays = function(){

  console.log("A monsters");
  for(a=0;a<aType.length;a++){
    console.log(aType[a].health_value,aType[a].speed_value,
      aType[a].damage_value,"(",aType[a].fitness,")",
      "[", aType[a].type_code,"]", aType[a].type);
    }
    console.log("B monsters");
    for(a=0;a<bType.length;a++){
      console.log(bType[a].health_value,bType[a].speed_value,
        bType[a].damage_value,"(",bType[a].fitness,")",
        "[", bType[a].type_code,"]", bType[a].type);
      }
      console.log("C monsters");
      for(a=0;a<cType.length;a++){
        console.log(cType[a].health_value,cType[a].speed_value,
          cType[a].damage_value,"(",cType[a].fitness,")",
          "[", cType[a].type_code,"]", cType[a].type);
        }
      };

      exports.printTypeFitnessArrays = function(){

        console.log("A monsters");
        for(a=0;a<aTypeFitness.length;a++){
          console.log(aTypeFitness[a]);
          }
          console.log("B monsters");
          for(a=0;a<bTypeFitness.length;a++){
            console.log(bTypeFitness[a]);
            }
            console.log("C monsters");
            for(a=0;a<cTypeFitness.length;a++){
              console.log(cTypeFitness[a]);
              }
            };

      // Prints out all of the monsters
      exports.printPopulation = function(){

        console.log("Monsters:");
        console.log("H S D   Fitness       Type");
        for(z=0; z<population.length; z++)
        {
          console.log(population[z].health_value,population[z].speed_value,
            population[z].damage_value,"(",population[z].fitness,")",
            "[", population[z].type_code,"]", population[z].type);
          }
        };

        // Prints details about the level (monsters and rooms)
        exports.printLevelDetails = function(rooms){

          // Cycle through chosen rooms
          for(i=0;i<rooms.length;i++){
            console.log("Room:" ,rooms[i].name);
            // Cycle through types of monsters
            for(j=0;j<rooms[i].monsters.length;j++)
            {
              // Cycle through monster of that type
              for(k=0;k<rooms[i].monsters[j].length;k++)
              {
                console.log(
                  rooms[i].monsters[j][k].health_value,
                  rooms[i].monsters[j][k].speed_value,
                  rooms[i].monsters[j][k].damage_value,
                  "(",rooms[i].monsters[j][k].fitness,")",
                  "[",rooms[i].monsters[j][k].type_code,"]",
                  rooms[i].monsters[j][k].type,
                  rooms[i].names[j][k]
                );
              }
            }
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
