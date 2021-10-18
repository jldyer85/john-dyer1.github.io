/**
 * 
 * CONTROL FLOW: 
 *
 * 0. Control flow is the order in which a computer executes statements in its script. We use conditional 
 * statements to implement control flow in Javascript. Conditional statements like if, else-if, and switch
 * statements are based on truthy values or booleans and will execute the first truthy condition that is met.
 *
 * 1. If Statement: executes a statement based on a truthy value.  If the condition is true it will execute
 * that statement. It's syntax is the keyword if followed by open parantheses with the condition inside, followed by
 * open curly braces with the code that will execute if the condition is truthy.
 */

if('4' == 4){
    console.log(true); //prints => true
    };
/**
 *
 * 2. Else-If Statement: after the initial if statement is run, if it doesn't return a truthy, the program
 * runs the next condition which is else-if and if that condition is true, then the program will execute its code.
 * An if statement can contatin as many else-if conditions as it needs. The sytnax is the same as an if statement
 * with else if begininng behind the closed braces from the if condition, follwed by open parantheses with the condition
 * inside, followed by open curly braces with the code that will execute if the condition is truthy.
 */
    if('4' == 3){
        console.log('that is true')
    } else if('4' == 4){
        console.log('actually, that is true') //prints => actually that is true
    };
/**
 *
 * 3. else statement: after the initial if and subsequent else-if conditions, if none of those conditions are true,
 * then the program will default to the final else condition.  This condition will always be the final condition in an
 * if statement, however an else condition is not required.  But if it's included, the else statement will always
 * execute after all other conditions have proven false. The sytnax is the same as an if and else-if statement
 * with else if begininng behind the closed braces from the if condition, follwed by open parantheses with the condition
 * inside, followed by open curly braces with the code that will execute if the condition is truthy.
 */
    if('4' == 3){
        console.log('that is true')
    } else if('5' == 4){
        console.log('actually, that is true') 
    } else {
        console.log('default truth') //prints => default truth
    };
/**
 *
 * 4. switch statement: The switch statement evaluates an expression, matching the expression's value to a case clause, 
 * and executes statements associated with that case, as well as statements in cases that follow the matching case until
 * a break is met. It is important to always put a break after each case so that the code will stop once it's condition
 * is met.
 */
    var foo = 'grapes'
    switch(foo){
        case 'apples': 
            console.log('apples');
            break;
        case 'bananas':
            console.log('bananas');
            break;
        case 'grapes':
            console.log('grapes'); //this case executes then the switch codeblock breaks
            break;
        case 'cherries':
            console.log('cherries');
            break;
        default:
            console.log('default');
    };


