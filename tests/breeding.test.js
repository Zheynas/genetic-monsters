var chai = require('chai');
var breeding = require('../monsterLogic/breeding.js');

var expect = chai.expect;
var assert = chai.assert;





var monster = {
  health_value: 3,
  health_code:"00000011",
  speed_value: 3,
  speed_code:"00000011",
  damage_value: 3,
  damage_code:"00000011",
  type_code: "AAAAA",
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
  ttype_code: "CCCCC",
  dominant_type: "C",
  fitness : 15
}

describe('Breeding functions', function(){

  it('Child monster has all stats');
  it('Child has a type');
  it('Correct number of childrent created');
})
