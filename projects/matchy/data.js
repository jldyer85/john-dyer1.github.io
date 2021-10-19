/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = "dog";
animal["name"] = "Tank";
animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = "woof";
noises.push("growl");
noises.unshift("whine");
noises[noises.length] = "howl"

console.log(noises.length);

console.log(noises.length - 1);

console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;

animal.noises.push("bark")

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  - you can use dot or bracket notation to access and assign properties on objects
 *  - you can use method Object.keys or Object.values to access key/values in objects
 *  - you can loop through objects using a For In loop to gain access to key/val pairs
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *  - you can use bracket notation and the elements index to access the element in array
 *  - you can use push or unshift to add elements to the end and beginning of arrays respectively
 *  - you can use pop or shift to remove elements from the end and beginning of arrays respectively
 *  - you can use dot length to get length of arrays and dot length - 1 to access the last element
 *  - you can use splice() method to remove or add any number of elements in an array
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};

animals.push(duck);

console.log(animals);

var cat = {
  species: "cat",
  name: "Ponyboy",
  noises: ["meow", "hiss", "purr"]
};

var pig = {
  species: "pig",
  name: "Miss Piggy",
  noises: ["snort", "oink", "squeal"]
};

animals.push(cat, pig);

console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**an array is appropriate data structure to hold a list of friends names b/c
 * we only need a list of names and no other properties */

var friends = [];

function getRandom(animals){
  return Math.floor(Math.random() * animals.length);
};

getRandom(animals);

var randomAnimal = animals[getRandom(animals)];

friends.push(randomAnimal.name);

console.log(friends);

animals[0]["friends"] = friends;

console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}