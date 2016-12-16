var normal = require('../items/normal.js');
var mmf = require('../items/MMF.js');
var statChangeItems = require('../items/statChangeItems.js')

var exports = module.exports = {};

exports.options = function(option,level,room,generation){

  switch (option) {
    case "MMF":
    mmf.setup();
    break;

    case "healthUp":
    statChangeItems.healthUp();
    break;

    case "healthDown":
    statChangeItems.healthDown();
    break;

    case "speedUp":
    statChangeItems.speedUp();
    break;

    case "speedDown":
    statChangeItems.speedDown();
    break;

    case "damageUp":
    statChangeItems.damageUp();
    break;

    case "damageDown":
    statChangeItems.damageDown();
    break;

    case "statPill":
    statChangeItems.statPill();
    break;

  }
  normal.setup(level,room,generation);
}
