
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //for loop that assigns var line that starts at # and ends at num, increment line + #
  for (var line = "#"; line.length <= num; line += "#")
  console.log(line);

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function fizzBuzz() {

  //loop through numbers 1-15
  for(var i = 1; i < 16; i++){

    //if multiple of 5 & 3 print fizzbuzz
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");

      //if multiple of 3 print fizz
    } else if(i % 3 === 0){
      console.log("fizz");

      //if multiple of 5 print buzz
    } else if(i % 5 === 0){
      console.log("buzz");
      
      //else print number
    } else {
      console.log(i);
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var board = "";
  for(var i = 0; i < num; i++){
   for(var a = 0; a < num; a++){
    board += (a % 2) == (i % 2) ? " " : "#";
   }
   board += "\n";
  }
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
