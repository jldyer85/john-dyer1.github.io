/**
 * STRING MANIPULATION:
 *
 * String Maniuplation is the various ways to access the contents of a string variable via built in methods
 * such as length, indexOf(), replace(), slice(), toLowerCase(), toUpperCase(). 
 */
 
 var name = 'John Dyer';

 console.log(name.length) // => prints 9 because there are nine characters in the string John Dyer.
 
 console.log(name.indexOf('h')); // => prints 2 because the character h is at the third index in the string.
 
 console.log(name.replace("Dyer", "Smith")); // => prints John Smith because the replace method was called. 
 //Replace is not destructive meaning it will not alter original variable
 
 console.log(name.slice(5)); // => prints Dyer because it makes a copy of everything after index 5.
 
 console.log(name.toLowerCase()); // => prints john dyer.
 
 console.log(name.toUpperCase()); // => prints JOHN DYER.

