/**
 * OPERATORS:
 *
 * 0. Assignment Operators: the = symbol is the assignment operator in Javascript. It does not mean equal to as it does in
 * mathematics.  When a variable is declared it is followed by the assignment operator = and then the variable declaration
 * follows it. Until a variable is declared, it holds no value.  The = operator allows us to declare values of variables.
 */
 var color; // => holds no value and is undefined.
 color = 'orange'; // => now holds value of the string 'orange' and will execute that string when called.

/*
* 1. ARITHMETIC Operators: arithmetic operators take operands to compute mathematical operations such as addition(+, +=), subtraction (- -=),
* multiplication (*, *=), division(/ /=), exponents(**), modulus or remainder(% %=).
*/

var x = 2
var y = 3

console.log(x + y) // => prints 5

console.log(x += y) // => prints 5

var x = 8;
var y = 4;

console.log(x - y) // => prints 4

console.log(x -= y) // => prints 4

var x = 5
var y = 3

console.log(x * y); // => prints 15

console.log(x *= y); // => prints 15

var x = 12
var y = 6

console.log(x / y); // => prints 2

console.log(x /= y); // => prints 2

var x = 15
var y = 4

console.log(x % y); // => prints 3

console.log(x %= y); // => prints 3

var x = 4
var y = 2

console.log(x ** y); // => prints 16

/**
 * 2. COMPARISON Operators: Comparison operators are used in logical statements to determine equality or difference between 
 * variables or values. They are as follows with x considered as 5 for all examples:
 */

var x = 5;

/** 
 * The == or "loose" comparison operator tests the equality of 2 comparisons. It's loose because it will consider the number 
 * type and string type of a number to be true.
 */

console.log(x == 5); // => prints true
console.log(x === 'five'); // => prints false
console.log(x == '5'); // => prints true

/** The === or "strict" comparison tests the equality of 2 comparisons.  It's strict because it must be exactly the same 
 * datatype and value to produce a truthy. */

console.log(x === 5); // => prints true
console.log(x === '5'); // => prints false
console.log(x === 3); // => prints false.

//The != operator is the "loose" not equal comparison operator.  It follows the same rules as == but tests whether 2 comparisons are not equal.
console.log(x != 5) // => prints false
console.log(x != 'five') // => prints true
console.log(x != '5') // => prints false

//The !== is the "strict" not equal comparison operator. It follows the same rules === but tests whether 2 comparisons are not equal.
console.log(x !== 5) // prints => false
console.log(x !== '5') // => prints true
console.log(x !== 3) // => prints true

//The > or greater than comparison operator compares whether an operand on the left is greater than the operand on the right.
console.log(x > 3) // => prints true
console.log(x > 6) // => prints false

//The >= or greater than or equal to operator compares whether an operand on the left is greater than or equal to the operand on the right.
console.log(x >= 5) // => prints true
console.log(x >= 6) // => prints false

//The < or less than comparison operator compares whether an operand on the left is less than the operand on the right.
console.log(x < 3) // => prints false
console.log(x < 6) // => prints true

//The <= or less than or equal to operator compares whether an operand on the left is less than or equal to the operand on the right.
console.log(x <= 5) // => prints true
console.log(x <= 6) // => prints true

/* 
* 3. LOGICAL Operators: Logical operators are used to determine the logic between variables or values. They are as follows with x equaling 10
* and y equaling 15 for the examples:
*/
var x = 10
var y = 15

//The && logical operator compares 2 or more expressions and indicates that all expressions must return a truthy value in order for it to execute.
console.log(x > 9 && y < 20) // => prints true
console.log('10' == x && '20' == y) // => prints false

/*The || logical operator compares 2 or more expressions and indicates that all either one OR the other expression must return a truthy value in 
* order for it to execute*/
console.log(x > 12 || y < 20) // => prints true
console.log('10' == x || '20' == y) // => prints true

//The ! operator or bang operator acts as "not" thereby turning any value it precedes into a falsy. The !! operator or double bang

/*
* 4. UNARY Operators: The simplest operators in Javascript are unary operators because they use only one operand.  They are as follows:
*/

//The ++ unary operator when placed in front of its operand increments the value by one.
var y = 4
console.log(++y); // => prints 5
console.log(++y); // => prints 6

//When ++ is placed be
/*
* 5. TERNARY Operators (a ? b : c)
*/

