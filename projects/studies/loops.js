/**
 * LOOPS: 
 *
 * 0. For, For In, While Loops - Loops are blocks of code that will loop through data as many times as the program needs 
 * in order to find what its looking for to execute a specific action. 3 types of loop are the for loop, for-in loop, and
 * while loop.
 * 
 * The For Loop is used to loop through arrays a number of times and is given a starting point, an ending point, and an 
 * increment value for how many iterations it should loop through before moving on to the next value in the object. The loop 
 * will stop when the first false condition is met. The syntax is as follows:
 */
 
for(var i = 0; i <= 15; i++)
console.log(i); //=> prints ascending numbers 0 - 15

//Loops can be iterated reversely by starting at the end point and incrementing down by 1 using --;
for(var x = 15; x >= 0; x--)
console.log(x) // => prints descending numbers 15 - 0

//Arrays are looped through the same as numbers, but the end point must be indicated using dot length.
var array = ['John', 'Lewis', 'Dyer'];
for(var i = 0; i < array.length; i++){
   console.log(array[i]); // => prints John Lewis Dyer
}

//To loop over an array in reverse order is same as reverse loop for numbers, but for starting point we use dot length
var arr =  ['loop', 'reverse', 'a'];
for (var i = arr.length - 1; i >= 0; i--) { // => prints a reverse loop
  console.log(arr[i]);
}

/* The For In Loop iterates through the properties of an object. Because objects are not indexed, we must use the For In Loop
* because it loops through the key properties in the object and returns the value properties. The syntax is as follows:
* for(var key in object){ statement }; The variable in the loop can be named anything, but its often called key or property
* since that is what the loop is looping through to access the objects values.
*/
var myStats = {
   name: 'John',
   age: 36,
   eyes: 'blue',
   height: '6 ft.'
}

for(var key in myStats){
   console.log(myStats[key]); // => prints John 36 blue 6 ft.
};

/*The While Loop executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:
* while(condition){ statement }
*/

var x = 0;
while (x < 10) {
  console.log(x); // => prints numbers 0 - 9 to the console.
  x++;
};