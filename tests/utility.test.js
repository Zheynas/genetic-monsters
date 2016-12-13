var chai = require('chai');
var utility = require('../monsterLogic/utility.js');

var expect = chai.expect;
var assert = chai.assert;

var monster = {
  health_value: 3,
  health_code:"00000011",
  speed_value: 3,
  speed_code:"00000011",
  damage_value: 3,
  damage_code:"00000011",
  type_code: "ABABABABABABC",
  fitness : 15
}

describe('Type selection functions', function(){

  it('decides type correctly', function(){
    assert.oneOf(utility.dominantType(monster),["A","B"])
  })

})
