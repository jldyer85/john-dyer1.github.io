// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    } else {
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(collection, number) {
    let emptyArray = [];
    if (!Array.isArray(collection) || number < 0){
        return emptyArray;
    } else if (typeof number != "number"){
        return collection[0];
    } else if (number > collection.length) {
        return collection;
    } else if (typeof number == "number"){
        return collection.slice(0, number)
    }
    };

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(collection, num){
    var emptyArr = [];

    if(!Array.isArray(collection) || num < 0){
        return emptyArr;
    } else if(typeof num !== "number"){
        return collection[collection.length - 1];
    } else if (num > collection.length){
        return collection;
    } else if (typeof num === "number"){
        return collection.splice(collection.length - num, num);
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //loop through array to look for occurences of value
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    //return -1 after loop finishes looking for occurences if val doesn't exist
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //use .includes method to see if array holds the value
     return array.includes(value) ? true : false;
    
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //check if collection is array
    if(Array.isArray(collection)){
        //if yes, loop through array to grab each element
        for(var i = 0; i < collection.length; i++){
            //then call the test function with value, iteration, and arr params
            func(collection[i], i, collection);
        } 
        //but if collection is object
        } else {
            //assume collection is an object & loop through to grab the key/value pairs
            for(var key in collection){
                //and call the test func with the value, key and object params
                func(collection[key], key, collection)
            }
        }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
    _.unique = function(array) {
        var newArr = [];
        for (var i = 0; i < array.length; i++)
            if (newArr.indexOf(array[i]) === -1 && array[i] !== "")
                newArr.push(array[i]);
        return newArr;
    };



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    //create result array variable
    var result = [];
    //loop through array to grab elements
    for(var i = 0; i < array.length; i++){
        //if function call w/ element, index, arr is truthy, push element into result arr
        if(func(array[i], i, array)){
            result.push(array[i]);
        }
    }
    //return result array
    return result;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //create result array 
    var result = [];

    //loop through array to access elements
    for(var i = 0; i < array.length; i++){
        //call the test func on each value, index, & array to see if it's falsy
        if(!func(array[i], i, array)){
            //push value into result array
            result.push(array[i]);
        }
    }
    //return result array;
    return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    //declare parent array to store 2 sub arrays and 2 subarray to store results
    var result = [];
    var subArr1 = [];
    var subArr2 = [];

    //loop through array to run test func on each element
    for(var i = 0; i < array.length; i++){
        //if test func is truthy, push into first sub array
        if(func(array[i], i, array)){
            subArr1.push(array[i]);
            //else push into sub array 2
        } else {
            subArr2.push(array[i]);
        }
    }
    //push two sub arrays into parent result array
    result.push(subArr1, subArr2);

    //return
    return result;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //create result array
    var result = [];

    //check if collection is array or object
    if(Array.isArray(collection)){
        //if it's array, do a for loop to access it
        for(var i = 0; i < collection.length; i++){
            //push each func call into result passing through val, index, and arr
            result.push(func(collection[i], i, collection))
        }
        //but if it's object do a for in loop to access key/value pairs
    } else if (typeof collection === "object"){
        for(var key in collection){
            //push each func call into result passing through value, key, and obj
            result.push(func(collection[key], key, collection))
        }
    }



    //return result
    return result;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayOfObj, prop){
    //create result to call _.map func to store results
    var result = _.map(arrayOfObj, function(val){
        return val[prop];
    });

    return result;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    if(typeof func !== "function"){
        for(var i = 0; i < collection.length; i++){
            if(!collection[i]){
                return false;
            }
        }
        return true;
    }
        //check if collection is array or object
        if(Array.isArray(collection)){
            //if it's array, do a for loop to access it
            for(var i = 0; i < collection.length; i++){
                //if func call is truthy return true
                if(!func(collection[i], i, collection)){
                    return false;
                } 
            }
            return true;

        //but if it's object do a for in loop to access key/value pairs
        } else if (typeof collection === "object"){
            for(var key in collection){
                //if func call is truthy, return true/
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
            return true;
        }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //check if func isn't a function
    if(typeof func !== "function"){
        //if not, loop through collection and return true if some element is truthy
        for(var i = 0; i < collection.length; i++){
            if(collection[i]){
            return true;
        }
    }
    //return false if all elements are falsy
    return false;
}
    //check if collection is array or object
    if(Array.isArray(collection)){
        //if it's array, do a for loop to access it
        for(var i = 0; i < collection.length; i++){
            //if some func call is truthy return true
            if(func(collection[i], i, collection)){
                return true;
            } 
        }
        //return false if all func calls are falsy
        return false;

    //but if it's object do a for in loop to access key/value pairs
    } else if (typeof collection === "object"){
        for(var key in collection){
            //if some func call is truthy, return true/
            if(func(collection[key], key, collection)){
                return true;
            }
        }
        //return false if all func calls are falsy
        return false;
    }
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(collection, func, seed){
    //check if seed is not undefined
    if(seed !== undefined){
        //loop through collection
        for(var i = 0; i < collection.length; i++){
            //assign function call to seed for each iteration
          seed = func(seed, collection[i], i);
        }
        //return seed
        return seed;
    } else {
        //if seed is undefined assign it to first element of collection
        seed = collection[0];
        //loop through collection
        for(var i = 1; i < collection.length; i++){
            //assign seed to function call for each iteration
            seed = func(seed, collection[i], i);
    }
    //return seed
    return seed;
    }
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, obj2){
    //assign all arguments to variable using Object.assign
    var args = Object.assign(arguments);

    //using Object.assign copy all args using spread operator
    Object.assign(...args);

    //return the first arg "object" that has all updated properties
    return args[0];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
