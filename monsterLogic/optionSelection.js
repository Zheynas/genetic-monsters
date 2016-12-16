var normal = require('./items/normal.js');
var mmf = require('./items/MMF.js');

var exports = module.exports = {};

exports.options = function(option,level,room,generation){

  switch (option) {

    case "normal":
    normal.setup(level,room,generation);
    break;

    case "MMF":
    mmf.setup(level,room,generation);
    break;

  }

}
