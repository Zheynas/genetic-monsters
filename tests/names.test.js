var chai = require('chai');
var names = require('../monsterLogic/names.js');

var expect = chai.expect;
var assert = chai.assert;

describe('Name Creation', function(){
  it('Creates correct number of names', function(){
    expect(names.namesForLevel(10).length).to.equal(10);
  })


})
