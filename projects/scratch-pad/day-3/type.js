// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use Array.isArray method to test if value is an arr & return boolean
    if(Array.isArray(value)){
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //check if value is array, null, or date and return false
    if(Array.isArray(value)){
        return false;
    } else if(value === null){
        return false;
    } else if(value instanceof Date){
        return false;
    //else if typeof value is object return true
    } else if(typeof value === 'object'){
        return true;
    //default else return false
    } else {
        return false;
    }

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //check if type of value is date or null, return false
    if(value instanceof Date){
        return false;
    } else if(value === null){
        return false;
    //else if type is an array or object return true
    } else if(Array.isArray(value) || typeof value === 'object'){
        return true;
    //default return false for all other datatypes
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //use Array.isArray to return string array if value is arr
    if(Array.isArray(value)){
        return 'array'
    //use instanceof Date to return string of date if value is date
    } else if(value instanceof Date){
        return "date"
    //if value equals null return string null
    } else if(value === null){
        return "null"
    //else return typeof value which will auto return string datatype
    } else {
        return typeof value;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
