/**
 * DATATYPES:
 *
 *0. In Javascript there are many datatypes or types of values. There are primitve and complex datatypes.
 * Here we will discuss 10 different datatypes.
 *
 *1. Number: numeric data - all integers, positive and negative, can be stored and manipulated in variables.
 * They can be assigned and reassigned and operated upon in all mathematical ways.
 */
        var number = 100 
  
 /*2 String: Strings are textual or character data that are wrapped in single or double quotes. It's important
  * to note that if we begin writing our string code in single quotes or double quotes, we should maintain single
  * or double throughout the code for uniformity.  String data can be manipulated in many ways and with many
  * different methods.  Their characters can be accessed by bracket notation and referencing its indexed position.
  */
  
        var string = 'this is a string'
   
   /**
    * 3. Boolean: a logical datatype that produces only a true or false value. Booleans are most often used in 
    * conditional if/else if statements.
    */
    var name = 'Mary'
    if(name === 'Joseph'){
     return true
   }
   console.log(name); //=> returns false
   
   /**
    * 4. Array: a datatype used to store multiple values in one place.  Arrays are high level list like objects. The syntax 
    * of an array is the variable name assigned to the array, the assignment operator, then open brackets, then all elements
    * inside the array are separated by commas. The contents of arrays are referred to as elements and are indexed by integers starting at 0.  
    * Elements within an array can be any datatype such as number, boolean, string, object, array, function. Arrays can be maniuplated or
    * altered via many different methods such as push, pop, shift, unshift, slice, length, etc.
   */
   
    var myArray = [true, 38, 'John', ['an array', 'within an array'], { age: 23, name: 'Jean'}, 'last element']; 
    
    console.log(myArray[0]); // => prints true because it is the first element in this array and the index of arrays begins at 0.
    
    console.log(myArray.length); // => prints 6 because there are 6 elements in this array.
    
    console.log(myArray.pop()); // => removes the string 'last element' because it is the last element in the array.
    
    console.log(myArray.push('banana')); // => adds 'banana' to the end of the array.
    
    console.log(myArray.shift()); // => removes true from the array because it's the first element in the array.
    
    console.log(myArray.unshift(false)); // => adds false to the first position of the array.
    
    console.log(myArray.slice()); // => prints a copy of the array.
   
   /*5. Object: a complex dataype that stores a collection of property values.  These property values are identified and accessed 
    * through key values.  The syntax is after the named variable and assignment operator, open curly braces, then the key is typed
    * like a string but without quotes, followed by a colon, and then the property value which can be any type of datatype like number,
    * boolean, string, array, object, function, etc. and then a comma separates each key/value pair and ends with closed curly braces.
   */
   
   var myObject = {
       key1: 34,
       
       key2: 'John',
       
       key3: false,
       
       key4: ['red', 'white', 'blue'],
       
       key5: {subKey1: 3, subKey2: 'Jane', subKey3: true}
   };
   
   /**
    * To access or change values in objects you can use dot notation or bracket notation. If using bracket notation you put the key in brackets
    * and in quotes.  Then the assignment operator and then whatever value you want to assign to that key.
    */
    
    myObject.key1 = 35
    console.log(myObject.key1) // => prints 35
    
    myObject["key2"] = 'Jamie';
    console.log(myObject["key2"]) // => prints Jamie
    
    myObject.key5.subKey3 = false;
    console.log(myObject.key5); // => to access a sub key/value pair you chain on the other key and then assign the new value;
    
    /** There are dot notation methods that can be used on objects to access their values.  The keyword Object followed by .keys, .values, .entries and then the object 
     * name in parantheses will give access to values as seen in the following examples:
     */
     
    Object.keys(myObject);  // gives all keys
    
    Object.values(myObject); // gives all values
    
    Object.entries(myObject); // gives nested arrays of key-value pairs
   
   
   /*6. Function: functions are blocks of code that are written to execute a specific task and are called or invoked
    * to perform the task.  They make coding easier because they store tasks that need to be repeated and can be called
    * as many times as needed.  They are named and can take in arguments that are passed to the function and they can return
    * an output. The syntax is the word function followed by the name of the function, open parantheses that hold the parameters
    * (if needed), followed by curly braces.  Inside the curly braces is the code that the function will execute and a return (if
    * needed).
    */
   
    function addTwo(num1, num2){
      return num1 + num2;
    }
    
    console.log(addTwo(5, 6)); // => returns 11
    
   /*7 Undefined: the undefined datatype means that a value has not been assigned to the variable or not declared.
    */
   
    var whatIsThis;
    
    console.log(whatIsThis); // => prints undefined because the variable has no value assigned.
    
   /*8. Null: The value null represents the intentional absence of any object value.
    * It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
    */
    
     var myVar = null; 
   
   /*9. NaN: is a value representing Not A Number; 
   
   */
   
   /*10. Infinity and -Infinity: The global property Infinity is a numeric value representing infinity. And -Infinity represents the opposite.
   
   */
   
   /*11. Primitive/simple vs Complex Datatypes:
    *   Simple Datatypes: numbers, booleans, strings, undefined, NaN, null
    *    - Simple datatypes are atomic or immutable meaning they don't hold or aggregate other values. They cannot cannot be
    *      altered. Operations on simple values return other simple values.
    */
    
    var simple0 = 'Hello';
    var simple1 = 34;
    var simple2 = false;
    var simple3 = undefined;
    var simple4 = NaN;
    var simple5 = null;
    
    /**
     * Complex Datatypes: Objects, Arrays, & Functions
     *    - complex datatypes are mutable.  They can aggregate other values and are indefinite in size.  They can hold
     *      as much data as needed.  They can be altered.  They are copied by reference.
     *  
     
   
   /**
    * 12. Copy vs Reference:
    * 
    * Primitive datatypes are copied by value. Passing by value means that every time you assign a value to a variable, a copy of that value is created.
    */
    var name = 'Tom';
    var myName = name;
    
    console.log(myName); // => prints Tom because name passed its value into myName
    
    /**
     * Complex datatypes are copied by reference. If 2 variables hold the same reference, then changing the object reflects in both variables.
     */
     let x = ['John'];
     let y = x;
 
    y.push('Dyer');
 
    console.log(x); // => prints John Dyer
    console.log(y); // => prints John Dyer 