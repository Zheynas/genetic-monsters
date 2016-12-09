var chai = require('chai');
var threeParent = require('../monsterLogic/crossoverTypeIdeas/threeParentCrossover.js');

var expect = chai.expect;
var assert = chai.assert;

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

var monster3 = {
  health_value: 2,
  health_code:"00000010",
  speed_value: 2,
  speed_code:"00000010",
  damage_value: 2,
  damage_code:"00000010",
  type_code: "BBBBBBBB",
  dominant_type: "B",
  fitness : 15
}



describe('Three parent functions', function(){

  it('Child monster has all stats', function(){
    expect(threeParentCrossover(monster, monster2, monster3).length).to.equal(8);
  });

})
