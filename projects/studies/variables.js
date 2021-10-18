/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
    var myName;

/**
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
    console.log(myName); // prints => undefined

// 2. initialization or assignment //
    myName = 'john';
    console.log(myName); // prints => john

// 3. re-assignment //
    myName = 'bob';
    console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
    var myVariable = 1;
    var myVariable = true;
    myVariable = "someString";

/**
 *VAR, LET, CONST
 *
 *0. Var - Variables are created with by using one of 3 keywords followed by the variable name. The first 
 * keyword that can be used is var. Var (short for variable) can vary, meaning we can reassign its
 * contents.
 */
 
    var myName = 'John';
    myName = 'Dyer'
    console.log(myName); // prints => Dyer
 
 /**
  *1. const - const is another keyword that precedes a variable's name.  It is short for constant.  Const variables
  * must be assigned immediately and can never change value. Const variables are block scoped meaning they cannot
  * be accessed outside of what code block they inhabit.
  */
 
    const myName = 'John';
    myName = 'Dyer';
    console.log(myName); // prints => Reference Error
 
 /**
  *2. let - let is another keyword that precedes a variable's name. Let variables are reassignable values and are
  * not hoisted to their code block.  It is limited to its code block.
  */
  
    console.log(myName); // prints => Reference Error
    let myName = 'John';
    myName = 'Dyer';
    console.log(myName); // prints => Dyer
  
  /**
   * HOISTING
   * Hoisting is the proccess of the interpreter hoising var declared variables and all functions to the top of the
   *  program or code.  Variables declared with let or const are not hoisted. If a var variable is called before it is 
   * initialized it will declare undefined instead of throwing an error because of hoisting.  Let and const variables
   * will always throw a reference error if called before initialized.
   */
   
    console.log(myFirstName); //=> prints undefined
    console.log(myMiddleName); //=> prints Reference Error
    console.log(myLast Name); //=> prints Reference Error
   
    var myFirstName = 'John';
    let myMiddleName = 'Lewis';
    const myLastName = 'Dyer';
 

