var chai = require('chai');
var statChange = require('../monsterLogic/statChange.js');

var expect = chai.expect;
var assert = chai.assert;

var statMonster = {
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

describe('Stat change function', function(){

  it('Skill change amount generator works', function(){
    assert.oneOf(statChange.skillChange(), [-1,1]);
  })

  it('Stat changers work', function(){
    expect(statChange.changeHealth(statMonster,1).health_value).to.equal(4);
    expect(statMonster.health_code).to.equal("00000100");
    expect(statChange.changeSpeed(statMonster,1).speed_value).to.equal(4);
    expect(statMonster.speed_code).to.equal("00000100");
    expect(statChange.changeDamage(statMonster,1).damage_value).to.equal(4);
    expect(statMonster.damage_code).to.equal("00000100");
  })

})
