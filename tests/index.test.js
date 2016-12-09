var chai = require('chai');
var index = require('../index.js');

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

var lifeExpectancy = 3;


describe('Initial Population Creation', function(){
  it('Creates desired amount of monsters', function(){
    expect(createInitialPopulation(10)).to.equal(10);
  })
  it('Stat values are created within range', function(){
    assert.isBelow(createMonster().health_value, 4, 'Health stat is below 4');
    assert.isBelow(createMonster().speed_value, 4, 'Speed stat is below 4');
    assert.isBelow(createMonster().damage_value, 4, 'Damage stat is below 4');
  })
  it('Stat codes are the correct length', function(){
    assert.equal(createMonster().health_code.length, 8, 'Health code is 8 bits long');
    assert.equal(createMonster().speed_code.length, 8, 'Speed code is 8 bits long');
    assert.equal(createMonster().damage_code.length, 8, 'Damage code is 8 bits long');
  })
  it('Fitness is correctly calculated', function(){
    assert.equal(fitnessFunction(monster),15, 'Fitness is 15');
  })
  it('Type is correctly created', function(){
    assert.oneOf(createTypeCode(), ["AAAAA","BBBBB","CCCCC"]);
  })
})

describe('Selection methods', function(){
  // Delete all monsters added by testing
  it('Deleting monsters works correctly', function(){
    expect(deleteTestMonsters()).to.equal(1)
  })
  it('Populates selection array correctly', function(){
    expect(createRouletteSelectionArray().length).to.equal(11);
  })
  it('Selects the correct amount of monsters for the level', function(){
    expect(selectLevelMonsters(10).length).to.equal(10);
  })
})

describe('Breeding functions', function(){
  it('Deleting monsters works correctly', function(){
    expect(deleteTestMonsters()).to.equal(1);
  })
  it('Type characteristics transferred', function(){
    expect(breedTypeCode(monster,monster2).length).to.eql(7);
  })
})

describe('Deletion functions', function(){
  it('Deleting old monsters works correctly', function(){
    expect(population.length-monstersPerLevel).to.equal(monstersLifeExpired());
  })
})




describe ('Stat change functions', function(){

  it('Health value and code changes correctly with values >1',function() {
    assert.deepEqual({
      health_value : changeHealth(monster,1).health_value,
      health_code : changeHealth(monster,1).health_code},
      {health_value : 4, health_code: "00000101"}, "Health changes accordingly")
  })
  it('Health handles values <1 correctly',function() {
    assert.deepEqual({
      health_value : changeHealth(monster,-4).health_value,
      health_code : changeHealth(monster,-5).health_code},
      {health_value : 1, health_code: "00000001"}, "Health changes accordingly")
  })
  it('Speed value and code changes correctly with values >1',function() {
    assert.deepEqual({
      speed_value : changeSpeed(monster,1).speed_value,
      speed_code : changeSpeed(monster,1).speed_code},
      {speed_value : 4, speed_code: "00000101"}, "Speed changes accordingly")
  })
  it('Speed handles values <1 correctly',function() {
    assert.deepEqual({
      speed_value : changeSpeed(monster,-4).speed_value,
      speed_code : changeSpeed(monster,-5).speed_code},
      {speed_value : 1, speed_code: "00000001"}, "Speed changes accordingly")
  })
  it('Damage value and code changes correctly with values >1',function() {
    assert.deepEqual({
      damage_value : changeDamage(monster,1).damage_value,
      damage_code : changeDamage(monster,1).damage_code},
      {damage_value : 4, damage_code: "00000101"}, "Damage changes accordingly")
  })
  it('Damage handles values <1 correctly',function() {
    assert.deepEqual({
      damage_value : changeDamage(monster,-4).damage_value,
      damage_code : changeDamage(monster,-5).damage_code},
      {damage_value : 1, damage_code: "00000001"}, "Damage changes accordingly")
  })


})





describe ('Utility functions', function(){
  it('Produces a random number in given range',function() {
    assert.includeMembers([1,2,3,4,5], [getRandom(1,6)], 'Random number is between 1 and 5 (inclusive)');
  })
  it('Converts an decimal into binary',function() {
    assert.equal(decbin(4,8), "00000100", 'Converts 13 into binary');
  })
})
