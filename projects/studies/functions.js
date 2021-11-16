/** 
 * FUNCTIONS:
 *
 * 0. Functions are blocks of code written to execute specific actions when called. 
 *    There are two phases of functions, first we declare/name it and next we call or invoke it.
 */
 
 function addTwo(num1, num2){ // => declare the function with name addTwo and give 2 input parameters representing numbers.
    return num1 + num2; // => return output of the sum of the 2 params.
}

console.log(addTwo(3, 5)) //calling this function prints => 8

/**
 * 
 * 1. Parameters: Parameters are placeholders that are written in the function code block.  They come after the function name 
 * and are placed in parantheses. Parameters should be named something that they represent such as array, number, function, etc.
 * 
 * 2. Arguments: Arguments are what is passed through the function when it is called.  They are entered in the place where the 
 * parameters hold space in the function code block.  Arguments are other pieces of code that are being called to pass through 
 * the function and execute some type of action.
 * 
 * 3. Syntax for a NAMED functions or function DECLARATION is as follows:
 */
 
 function twoStrings(str1, str2){ // => the keyword function followed by the name for the function (it should represent something the func does)
   console.log(str1 + str2); 
 }

/**
 * 4. Functions can alternately be assigned to a variable. This is known as function EXPRESSION The syntax is as follows:
 */
 var times2 = function(num){ // => a variable is named and assigned to the function.
    return num * 2;
 }
 

/**
* 
* 4. Functions can OPTIONALLY take inputs and return a single value.  Their inputs are written as parameters and when 
* invoked those parameters become arguments. This is optional as a function doesn't necessarily need to take any arguments 
* in order to be a function. Similarly a function can return an output, but again this is optional.
* 
* 5. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
* JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible from outside the function.
* Variables declared with var, let and const are similar when declared inside a function meaning they are all function scoped.
*/

var suffix = "III"

function myName(){
 var first = 'John';
 let middle = 'Lewis';
 const last = 'Dyer;' // => these 3 variables are all confined inside this function and cannot be called outside of it because of BLOCK or FUNCTION SCOPE

 //however var suffix can be called and reached inside of this function because it is in the GLOBAL SCOPE
}

/**
*
* 6. Closures: Functions form closures around the data they house. If an object returned from a func and is
* held in memory elsewhere (referenced), that closure stays ALIVE, and data can continue to exist in these
* closures.
*/

function myPizza() {
 var topping = 'pepperoni';
 function displayName() {
   alert(topping); // => variable topping can be called inside the child function because of closure from its parent scope.
 }
 return displayName;
}

var myFunc = myPizza();
myFunc();