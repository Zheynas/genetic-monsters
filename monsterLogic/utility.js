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

// Changes the character of a string at a given index
exports.setCharAt=function(str,index,chr){
  if(index > str.length-1) return str;
     return str.substr(0,index) + chr + str.substr(index+1);
}

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
  exports.printLevelDetails = function(){

    // Cycle through chosen rooms
    for(i=0;i<level1RoomNumber;i++){
      console.log("Room:" ,levelOneRooms[i].name, "Total monsters: ", levelOneRooms[i].total);

      // Cycles through information in each room
      for(j=0;j<levelOneRooms[i].monsters.length;j++){
        console.log(levelOneRooms[i].monsters[j].health_value,levelOneRooms[i].monsters[j].speed_value,
          levelOneRooms[i].monsters[j].damage_value,"(",levelOneRooms[i].monsters[j].fitness,")",
          "[", levelOneRooms[i].monsters[j].type_code,"]",levelOneRooms[i].monsters[j].type,levelOneRooms[i].names[j]);
        }
      }
    };

    exports.printAverageFitness = function(){
      total = 0;
      for(i=0;i<population.length;i++)
      {
        total =  total + population[i].fitness;
      }
      average = total / population.length;
      console.log(average);
    };
