var chai = require('chai');
var level1 = require('../level1.js');

var expect = chai.expect;
var assert = chai.assert;

describe('Room Creation', function(){
  it('Correct number of rooms made', function(){
    expect(level1.createRooms()).to.equal(10);
  })
  it('Correct number of rooms selected', function(){
    expect(level1.selectRoomForLevel(4)).to.equal(4);
  })

})
