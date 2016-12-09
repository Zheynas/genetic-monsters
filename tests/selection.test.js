var chai = require('chai');
var selection = require('../selection.js');
var initialPopulation = require('../initialPopulation.js');


var expect = chai.expect;
var assert = chai.assert;

describe('Selection functions', function(){
  it('Creates cumulative fitness array correctly', function(){
    // Checks it is the correct length
    expect(selection.createRouletteSelectionArray(population).length).to.equal(population.length+1);

    // Checks last value is correct
    var total = 0;
    for(i=0; i<population.length;i++)
    {
      total = total + population[i].fitness;
    }
    expect(total).to.equal(rouletteSelectionArray[rouletteSelectionArray.length-1]);
  })

  it('Selects appropriate number of monsters',function(){
    expect(selection.selectLevelMonsters(10).length).to.equal(10);


  })


})
