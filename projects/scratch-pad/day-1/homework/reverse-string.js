// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //

    //create empty string var to store reversed letters from loop//

    var reverseStr = ""

  //create reverse For Loop starting at last char of input and ending at first//

    for(var i = input.length - 1; i >= 0; i--){

  //add each char that's looped over into the new reverseStr variable//
  
      reverseStr += input[i]
    }

  //return reversed string
    return reverseStr;
    
  /**this method below also works by splitting the input into an array, chaining
   * the reverse method to reverse that array, then chaining the join method to 
   * rejoin the chars in the array.  Returning the whole chain will return the 
   * reversed result: return input.split("").reverse().join(""); */
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}