/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    //loop through animals array
    for(var i = 0; i < animals.length; i++){
        //access animal obj name key and compare to name arg
        if(animals[i]["name"] === name){
            //return animal obj if equal
            return animals[i]
        }
    }
    //return null outside of loop block so that it iterates through entirety
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    //loop through array to compare animals obj name to name arg
    for(var i = 0; i < animals.length; i++){
    //if name matches return replace animal obj with replacement arg using replace()
        if(animals[i].name === name){
            return animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i]["name"] === name){
            animals.splice(animals[i]);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    for(var i = 0; i < animals.length; i++){
        for(var key in animal){
            if(animal.name.length > 0 && animal.species.length > 0 && animal.name === animals[i].name){
                animals.splice(animal)
            } 
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
