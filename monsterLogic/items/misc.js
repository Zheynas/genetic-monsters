var utility = require('../utility.js');
var breeding = require('../breeding.js');

var exports = module.exports = {};

exports.invertChromosomes=function(){
  console.log("invertChromosomes");
  for(z=0;z<population.length;z++){

    population[z].health_code = exports.invert(population[z].health_code);
    population[z].health_value = breeding.findValue(population[z].health_code);

    population[z].speed_code = exports.invert(population[z].speed_code);
    population[z].speed_value = breeding.findValue(population[z].speed_code);

    population[z].damage_code = exports.invert(population[z].damage_code);
    population[z].damage_value = breeding.findValue(population[z].damage_code);

    population[z].fitness = fitnessFunction(population[z]);

  }
}

exports.invert = function(code){
  for(i=0;i<code.length;i++){
    if(code.charAt(i)=="0"){
      code = utility.setCharAt(code,i,"1");
    }else{
      code = utility.setCharAt(code,i,"0");
    }
  }
  return code;
}
