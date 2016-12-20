// Level 1
var exports = module.exports = {};

roomMatrix =
  [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,1,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

exports.changeMatrix = function(){

  for(i=0;i<roomMatrix.length; i++){

    randomNumber = exports.getRandom(0,3);

    if(randomNumber==0){
      roomMatrix[i] = 1;
    }
  }
}


exports.getRandom = function(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

exports.printMatrix = function(){
console.log(roomMatrix[0],roomMatrix[1],roomMatrix[2],roomMatrix[3],roomMatrix[4],roomMatrix[5],roomMatrix[6],roomMatrix[7],roomMatrix[8],roomMatrix[9]);
console.log(roomMatrix[10],roomMatrix[11],roomMatrix[12],roomMatrix[13],roomMatrix[14],roomMatrix[15],roomMatrix[16],roomMatrix[17],roomMatrix[18],roomMatrix[19]);
console.log(roomMatrix[20],roomMatrix[21],roomMatrix[22],roomMatrix[23],roomMatrix[24],roomMatrix[25],roomMatrix[26],roomMatrix[27],roomMatrix[28],roomMatrix[29]);
console.log(roomMatrix[30],roomMatrix[31],roomMatrix[32],roomMatrix[33],roomMatrix[34],roomMatrix[35],roomMatrix[36],roomMatrix[37],roomMatrix[38],roomMatrix[39]);
console.log(roomMatrix[40],roomMatrix[41],roomMatrix[42],roomMatrix[43],roomMatrix[44],roomMatrix[45],roomMatrix[46],roomMatrix[47],roomMatrix[48],roomMatrix[49]);
console.log(roomMatrix[50],roomMatrix[51],roomMatrix[52],roomMatrix[53],roomMatrix[54],roomMatrix[55],roomMatrix[56],roomMatrix[57],roomMatrix[58],roomMatrix[59]);
console.log(roomMatrix[60],roomMatrix[61],roomMatrix[62],roomMatrix[63],roomMatrix[64],roomMatrix[65],roomMatrix[66],roomMatrix[67],roomMatrix[68],roomMatrix[69]);
console.log(roomMatrix[70],roomMatrix[71],roomMatrix[72],roomMatrix[73],roomMatrix[74],roomMatrix[75],roomMatrix[76],roomMatrix[77],roomMatrix[78],roomMatrix[79]);
console.log(roomMatrix[80],roomMatrix[81],roomMatrix[82],roomMatrix[83],roomMatrix[84],roomMatrix[85],roomMatrix[86],roomMatrix[87],roomMatrix[88],roomMatrix[89]);

}

exports.main = function(){
  exports.changeMatrix();
  exports.printMatrix();
}
