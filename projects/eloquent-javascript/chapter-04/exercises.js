////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  var array = [];
  for(var i = start; i <= end; i++){
    array.push(i)
  }
  

  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let sumResult = 0;
  for(var i = 0; i < array.length; i++){
    sumResult += array[i];
  }
  return sumResult;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create array to store results
  var result = [];
  //loop through array in reverse
  for(var i = array.length - 1; i >= 0; i--){
    //push each iteration into result array
    result.push(array[i]);
  }

  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
