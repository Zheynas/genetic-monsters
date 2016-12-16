var chai = require('chai');
var initialPopulation = require('../monsterLogic/initialPopulation.js');
var monsterTypes = require('../monsterLogic/monsterTypes.js');
var roomSelector = require('../monsterLogic/levels/roomSelector.js');
var utility = require('../monsterLogic/utility.js');
var monsterNames = require('../monsterLogic/monsterNames.js');
var selection = require('../monsterLogic/selection.js');


var expect = chai.expect;
var assert = chai.assert;

///////////////////////////////////////
//                                   //
//                                   //
//             Setup                 //
//                                   //
//                                   //
///////////////////////////////////////
meleeType = [];
meleeTypeFitness = [];
rangedType = [];
rangedTypeFitness = [];
mageType = [];
mageTypeFitness = [];
rogueType = [];
rogueTypeFitness = [];
warlockType = [];
warlockTypeFitness = [];

deadTypes = [];


currentGen = [];
lastGenTypePercentage = [0,0,0,0,0];

initialPopulationSize = 50;
population = [];
populationFitnessArray = [];
monstersPerLevel = 10;
levelMonsterArray = [];
numberOfChildrenCreated = 50;
mutantChance = 30; //%
maxSkillIncreaseAmount = 3; // Randomly spread across stats

lifeExpectancy = 3;
currentLevel=1;

/******************/
//     Stats      //
/******************/

numberOfStats = 3;
maxStartStat = 3;

/******************/
//    Initial     //
/******************/


/***************************/
//    Level room numbers   //
/***************************/
level1RoomNumber = 3;

level2RoomNumber = 2;
level2GenerationNumber = 10;

level3RoomNumber = 3;
level3GenerationNumber = 10;

level4RoomNumber = 1;
level4GenerationNumber = 10;

level5RoomNumber = 3;
level5GenerationNumber = 10;

level6RoomNumber = 2;
level6GenerationNumber = 10;

// This the fitness function that needs to be altered.
fitnessFunction = function(monster){
  return 2*monster.health_value + monster.speed_value + 2*monster.damage_value;
};

describe('Utility functions', function(){
  it('Creates random number in range', function(){
    assert.oneOf(utility.getRandom(0,3),[0,1,2]);
  })
  it('Converts decimal into binary', function(){
    expect(utility.decbin(3,3)).to.equal("011");
  })
})

describe('Inital population creation', function(){

  it('Correct number of monsters made', function(){
    expect(initialPopulation.createInitialPopulation(initialPopulationSize).length).to.equal(initialPopulationSize);
  })
  it('Stats created correctly', function(){
    possibleStats = [];
    for(y=1;y<maxStartStat+1;y++){
      possibleStats.push(y);
    }
    possibleCodes = [];
    for(u=0;u<possibleStats.length;u++){
      possibleCodes.push(utility.decbin(possibleStats[u],8))
    }

    assert.oneOf(population[0].health_value, possibleStats);
    assert.oneOf(population[0].speed_value, possibleStats);
    assert.oneOf(population[0].damage_value, possibleStats);

    assert.oneOf(population[0].health_code, possibleCodes);
    assert.oneOf(population[0].speed_code, possibleCodes);
    assert.oneOf(population[0].damage_code, possibleCodes);
  })
  it('Type created correctly',function(){
    assert.oneOf(population[0].type_code, ["AAAAAAAAAAAAAAAAAAAAA","BBBBBBBBBBBBBBBBBBBBB","CCCCCCCCCCCCCCCCCCCCC","DDDDDDDDDDDDDDDDDDDDD","EEEEEEEEEEEEEEEEEEEEE"]);
    assert.oneOf(population[0].type, ["A","B","C","D","E"]);
  })
})

describe('Type and type fitness arrays', function(){

  it('Type arrays populated correctly', function(){

    meleeTestCount = 0;
    for(t=0;t<population.length;t++){
      if(population[t].type=="A"){
        meleeTestCount = meleeTestCount + 1;
      }
    }
    monsterTypes.createTypeArrays();

    expect(meleeType.length).to.equal(meleeTestCount);
  })
  it('Type fitness array populated correctly',function(){
    expect(meleeType.length+1).to.equal(meleeTypeFitness.length);
    expect(rangedType.length+1).to.equal(rangedTypeFitness.length);
    expect(mageType.length+1).to.equal(mageTypeFitness.length);
    expect(rogueType.length+1).to.equal(rogueTypeFitness.length);
    expect(warlockType.length+1).to.equal(warlockTypeFitness.length);

  })
})

describe('Room creation',function(){
  it('Correct number of rooms created', function(){
    expect(roomSelector.selectRoomForLevel(1,level1RoomNumber).length).to.equal(level1RoomNumber);
    expect(roomSelector.selectRoomForLevel(2,level2RoomNumber).length).to.equal(level2RoomNumber);
    expect(roomSelector.selectRoomForLevel(3,level3RoomNumber).length).to.equal(level3RoomNumber);
    expect(roomSelector.selectRoomForLevel(4,level4RoomNumber).length).to.equal(level4RoomNumber);
    expect(roomSelector.selectRoomForLevel(5,level5RoomNumber).length).to.equal(level5RoomNumber);
    expect(roomSelector.selectRoomForLevel(6,level6RoomNumber).length).to.equal(level6RoomNumber);

  })
  it('Type percentages created correctly', function(){
    percentageTotal = currentGen[0] + currentGen[1] + currentGen[2] + currentGen[3] + currentGen[4];
    expect(Math.round(percentageTotal)).to.equal(1);
  })
})

describe("Name creation", function(){
  it('Correct number of names created', function(){
    namesArray  = monsterNames.namesForLevel(4,3,2,1,5);
    expect(namesArray[0].length).to.equal(4);
    expect(namesArray[1].length).to.equal(3);
    expect(namesArray[2].length).to.equal(2);
    expect(namesArray[3].length).to.equal(1);
    expect(namesArray[4].length).to.equal(5);

  })
})

describe('Monster selection', function(){
  it('Correct number of each type of monster selected for level', function(){
    selectionArray = selection.selectLevelMonsters(4,3,2,1,5);
    expect(selectionArray[0].length).to.equal(4);
    expect(selectionArray[1].length).to.equal(3);
    expect(selectionArray[2].length).to.equal(2);
    expect(selectionArray[3].length).to.equal(1);
    expect(selectionArray[4].length).to.equal(5);
  })
  it('Roulette selection chooses a monster')
  it('Creates fitness array correctly')

})
describe('Life expectency', function(){
  it('Monsters die of old age when they should')
})
describe('Stat altering functions', function(){
  it('Skill change amount generator works')
  it('Stat changers work')
})
describe('Crossover Functions',function(){
  it('One point crossover produces correct stat_code length')
  it('Two point crossover produces correct type_code length')

})
describe('Breeding functions', function(){
    it('Child monster has all stats');
    it('Child has a type');
    it('Correct number of children created');
})
