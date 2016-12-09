var chai = require('chai');
var initialPopulation = require('../initialPopulation.js');

var expect = chai.expect;
var assert = chai.assert;

describe('Inital population creation', function(){

  it('Correct number of monsters made', function(){
    expect(initialPopulation.createInitialPopulation(20).length).to.equal(20);
  })
  it('Stats created correctly', function(){
    assert.oneOf(population[0].health_value, [1,2,3]);
    assert.oneOf(population[0].speed_value, [1,2,3]);
    assert.oneOf(population[0].damage_value, [1,2,3]);

    assert.oneOf(population[0].health_code, ["00000001","00000011","00000010"]);
    assert.oneOf(population[0].speed_code, ["00000001","00000011","00000010"]);
    assert.oneOf(population[0].damage_code, ["00000001","00000011","00000010"]);
  })
  it('Type created correctly', function(){
    assert.oneOf(population[0].type_code, ["AAAAA","BBBBB","CCCCC"]);
  })

})
