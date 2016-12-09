var chai = require('chai');
var twoCrossover = require('../monsterLogic/crossoverTypeIdeas/twoCrossover.js');

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

describe('2 point Crossover',function(){
  it('Child has correct type',function(){
    expect(twoPointCrossover(monster,monster2).length = 8);
  })
})
