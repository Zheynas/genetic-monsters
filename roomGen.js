// // Level 1
var exports = module.exports = {};

matrix =
[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

exports.changeMatrix = function(){

  for(i=1;i<matrix.length-1; i++){
    for(j=1;j<matrix[0].length-1;j++){

      if(matrix[i][j]==0){
        randomNumber = exports.getRandom(0,3);

        if(randomNumber==0){
          matrix[i][j] = 1;
        }
      }
    }
  }
}

exports.printMatix = function(){
  for(d=0;d<matrix.length;d++){
    console.log(matrix[d]);
  }
}

exports.getRandom = function(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

roomArray = [];
numberOfRooms = 0;

exports.createRooms = function(){
  for(i=1;i<matrix.length-1;i++){
    for(j=1;j<matrix[i].length-1;j++){
      if(matrix[i][j]==1){

        rooms = [];
        rooms.push([i,j]);

        if(matrix[i-1][j] == 1){
          rooms.push([i-1,j]);
        }
        if(matrix[i+1][j] == 1){
          rooms.push([i+1,j]);
        }
        if(matrix[i][j-1] == 1){
          rooms.push([i,j-1]);
        }
        if(matrix[i][j+1] == 1){
          rooms.push([i,j+1]);
        }

        roomArray.push(rooms);
      }
    }
  }
  numberOfRooms = roomArray.length;
}



exports.mergeRooms = function(array1,array2){
  for(y=0;y<array2.length;y++){
    array1.push([array2[y][0],array2[y][1]])
  }
  return array1;
}

exports.combineRooms = function(){
  v=roomArray.length;
  for(k=1;k<v;++k){
    for(h=0;h<v;h++){
      if(h!=k && k<v){
        if(exports.checkOverlap(roomArray[k],roomArray[h])==true){
          roomArray[h] = exports.mergeRooms(roomArray[h],roomArray[k])
          roomArray.splice(k,1);
          v=roomArray.length;
        }
      }
      v=roomArray.length;
    }
    v=roomArray.length;
  }
  for(t=0;t<roomArray.length;t++){
    roomArray[t] = exports.removeDuplicates(roomArray[t]);
  }
}

exports.checkOverlap = function(array1,array2){
  for(i=0;i<array1.length;i++){
    for(j=0;j<array2.length;j++){
      if(array1[i][0]==array2[j][0] && array1[i][1]==array2[j][1]){
        return true;
      }
    }
  }
  return false
}

exports.removeDuplicates = function(room){
  uniqueArray = [];

  for(i=0;i<room.length;i++){
    if(exports.checkDuplicates(uniqueArray,room[i])==false){
      uniqueArray.push(room[i]);
    }
  }
  return uniqueArray;
}

exports.checkDuplicates = function(array,room){
  for(w=0;w<array.length;w++){
    if(array[w][0]==room[0] && array[w][1]==room[1]){
      return true;
    }
  }
  return false;
}

exports.printRooms = function(){
  for(k=0;k<roomArray.length;k++){
    roomString = roomArray[k];
    console.log("Chain size: ", roomString.length);
    for(n=0;n<roomString.length;n++){
      console.log(roomString[n][0],roomString[n][1]);
    }
  }
}

chosenString = [];

exports.sortChains = function(){
  for(g=0;g<roomArray.length;g++){
    if(roomArray[g].length > 7){
      chosenString.push(roomArray[g]);
      break;
    }
  }
  if(chosenString.length == 0){
    exports.creation();
  }else{
    console.log("final string:");
    console.log(chosenString[0]);
  }
}

exports.creation = function(){
  exports.changeMatrix();
  exports.printMatix();
  exports.createRooms();
  exports.combineRooms();
  exports.printRooms();
  exports.sortChains();
}

chosenObjects = [];

exports.convert = function(){
  for(i=0;i<chosenString[0].length;i++){
    room = new Object();
    room.up = 0; room.down = 0; room.left = 0; room.right = 0;
    room.self = [chosenString[0][i][0],chosenString[0][i][1]];
    if(exports.checkDuplicates(chosenString[0],[room.self[0]-1,room.self[1]]) == true){
      room.left = [room.self[0]-1,room.self[1]];
    }
    if(exports.checkDuplicates(chosenString[0],[room.self[0]+1,room.self[1]]) == true){
      room.right = [room.self[0]+1,room.self[1]];
    }
    if(exports.checkDuplicates(chosenString[0],[room.self[0],room.self[1]-1]) == true){
      room.down = [room.self[0],room.self[1]-1];
    }
    if(exports.checkDuplicates(chosenString[0],[room.self[0],room.self[1]+1]) == true){
      room.up = [room.self[0],room.self[1]+1];
    }
    chosenObjects.push(room);
  }
}

exports.roomType = function(){
  for(p=0;p<chosenObjects.length;p++){
    room = chosenObjects[p];

    if(room.up == 0 && room.down == 0 && room.left ==0 && room.right !== 0){
      room.type = "Right only";
    }
    if(room.up == 0 && room.down == 0 && room.left !==0 && room.right == 0){
      room.type = "Left only";
    }
    if(room.up !== 0 && room.down == 0 && room.left ==0 && room.right == 0){
      room.type = "Up only";
    }
    if(room.up == 0 && room.down !== 0 && room.left ==0 && room.right == 0){
      room.type = "Down only";
    }

    if(room.up == 0 && room.down == 0 && room.left !==0 && room.right !== 0){
      room.type = "Sides";
    }
    if(room.up !== 0 && room.down !== 0 && room.left ==0 && room.right == 0){
      room.type = "Top and bottom";
    }
    if(room.up == 0 && room.down !== 0 && room.left !==0 && room.right == 0){
      room.type = "Bottom Left";
    }
    if(room.up == 0 && room.down !== 0 && room.left ==0 && room.right !== 0){
      room.type = "Bottom Right";
    }
    if(room.up !== 0 && room.down == 0 && room.left !==0 && room.right == 0){
      room.type = "Top Left";
    }
    if(room.up !== 0 && room.down == 0 && room.left ==0 && room.right !== 0){
      room.type = "Top Right";
    }

    if(room.up !== 0 && room.down !== 0 && room.left ==0 && room.right !== 0){
      room.type = "No Left";
    }
    if(room.up !== 0 && room.down !== 0 && room.left !==0 && room.right == 0){
      room.type = "No Right";
    }
    if(room.up == 0 && room.down !== 0 && room.left !==0 && room.right !== 0){
      room.type = "No Up";
    }
    if(room.up !== 0 && room.down == 0 && room.left !==0 && room.right !== 0){
      room.type = "No Down";
    }

  }
}

exports.printConvertedRooms = function(){
  console.log("Thing",chosenObjects.length);
  for(j=0;j<chosenObjects.length;j++){
    console.log(chosenObjects[j].self,chosenObjects[j].up,chosenObjects[j].down,chosenObjects[j].left,chosenObjects[j].right,chosenObjects[j].type);
  }
}


exports.main = function(){
exports.creation();
exports.convert();
exports.roomType();
exports.printConvertedRooms();


  // find appropriate string
  // get rid of others
  // place entrance (biggest y)
  // Place boss (smallest y)
  // Print
  // convert into rooms
  // attribute to type of rooms

}
