var breeding = require('../breeding.js')
var mmf = require('../items/MMF.js');

var exports = module.exports = {};

exports.breedingType = function(){
  breedingTechnique = breedingChoice;
  
  switch (breedingTechnique) {
    case "twoParentBreeding":
    breeding.createChildren();
    break;

    case "threeParentBreeding":
    mmf.createThreeParentChildren();
    break;

  }
}
