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