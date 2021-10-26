//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //declare an empty array to store values
    var result = [];

    //loop through object & push values into result array
    for(var key in object){
        result.push(object[key]);
    };

    //return result
    return result;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//use Object.keys method to access keys in object and join with space
 return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create string to store string values in
    var objValues = "";

    //loop through object
    for(var key in object){

        //check for which values are strings
        if(typeof object[key] === "string"){

            //add each string value to objValues empty string w/ a space after each
            objValues += object[key] + " ";
        }
    }
    //assign objValues to remove final character in string to delete last "space"
    objValues = objValues.slice(0, -1);

    //return the final result
    return objValues;
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //check if collection is array
    if(Array.isArray(collection)){
        return "array"

        //else if check if collection is an object
    } else if(typeof collection === "object"){
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return string at first index forced to upper case and concatenate 
    //rest of the string using slice copy at index 1.
    return string[0].toUpperCase() + string.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {  
    //split string of words into an array using split method separated w/ space
    var stringSplit = string.split(" ");
  
  //loop through split array and assign each iteration to uppercase
    for(var i = 0; i < stringSplit.length; i++){
      stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].slice(1);
    }
    //return the split string and join with a space.
    return stringSplit.join(" ");
  }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    //return "Welcome" + name from object using interpolation and uppercase
    return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    //interpolate object name + "is a " and object species with first letter capitalized
    return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if object has noises array
    if(object.noises && object.noises.length > 0){
        return object.noises.join(" ")
    } else {
        return "there are no noises"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split string into an array separated by a space
    var splitString = string.split(" ");

    //loop through array and see if any iteration matches word arg
    for(var i = 0; i < splitString.length; i++){
        if(splitString[i] === word){
            return true;
        }
    }
    //return false outside of loop so loop goes through entire string
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name into object's friends array
    object["friends"].push(name);

    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //if friends key doesn't exist, return false, must do this first before moving on to loop so 
    //because why???
    if(!object.friends){
        return false;
    }
    //loop through objects friends array and if name matches name arg ret true
    for(var i = 0; i < object.friends.length; i++){
        if(object.friends[i].includes(name)){
            return true;
        } 
    }
    //return false outside loop so it iterates through completely
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
        var nameList = [];
        var current = [];

    }


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //assign key to value so no matter what args are passed, that key becomes that val
    object[key] = value; 
    
    //return object with updated key: value pair;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//create nested loops to loop through array and object to compare if equalities exist
    for(var i = 0; i < array.length; i++){
        for(var key in object){
            //if array element matches object key delete object value
            if(array[i] === key)
            delete object[key];       
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
   //create array to store results
   var result = [... new Set(array)];
   return result;
  
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}