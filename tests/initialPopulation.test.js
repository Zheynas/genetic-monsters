var chai = require('chai');
var initialPopulation = require('../monsterLogic/initialPopulation.js');

var expect = chai.expect;
var assert = chai.assert;

initialPopulationSize = 10;
maxStartStat = 3;

// This the fitness function that needs to be altered.
fitnessFunction = function(monster){
  return 2*monster.health_value + monster.speed_value + 2*monster.damage_value;
};

describe('Inital population creation', function(){

  it('Correct number of monsters made', function(){
    expect(initialPopulation.createInitialPopulation(initialPopulationSize).length).to.equal(initialPopulationSize);
  })
  it('Stats created correctly', function(){
    assert.oneOf(population[0].health_value, [1,2,3]);
    assert.oneOf(population[0].speed_value, [1,2,3]);
    assert.oneOf(population[0].damage_value, [1,2,3]);

    assert.oneOf(population[0].health_code, ["00000001","00000011","00000010"]);
    assert.oneOf(population[0].speed_code, ["00000001","00000011","00000010"]);
    assert.oneOf(population[0].damage_code, ["00000001","00000011","00000010"]);
  })
  it('Type created correctly')


})
