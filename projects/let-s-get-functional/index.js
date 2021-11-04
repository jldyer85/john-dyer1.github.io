// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./john-dyer1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //assign var and using filter return the number of male genders
    var males = _.filter(array, function(customer){
       //access the gender prop through dot notation & if truthy, return 
       return customer.gender === "male"
    });
    //return males length
    return males.length;
};

var femaleCount = function(array){
    var females = _.reduce(array, function(previous, current, seed){
        return previous += current.gender === "female"
    }, 0);

    return females;
}; 

var oldestCustomer = function(array){
    //reduce down to oldest age in array
        var oldest = _.reduce(array, function(maxAge, currVal){
            //if current age value is greater than previous age
            if(currVal.age > maxAge.age){
                //return current age value
                return currVal
            //else return maxAge aka oldest person
            } else {
                return maxAge;
            }
        })
        //return oldest.name to return name string
        return oldest.name;
    };

var youngestCustomer = function(array){
    //use reduce to loop through customer objects to find youngest age
    var youngest = _.reduce(array, function(minAge, currVal){
        if(currVal.age < minAge.age){
            return currVal
        } else {
            return minAge;
        }
    })
    //return that objects (customer's) name
    return youngest.name;
};

var averageBalance = function(array){
    //using reduce add previous balance to current
    var average = _.reduce(array, function(previous, current){
        //slice dollar sign off beginning of string and replace comma w/ no space
        var currentBal = current.balance.slice(1).replace(",", "");
        //use parseFloat to force string to integer
        var currentBalNum = parseFloat(currentBal);
        //add previous to currentBalNum that is now a number
        return previous += currentBalNum
    }, 0);
    //return average divided by array length
    return average / array.length
};

var firstLetterCount = function(array, letter){
    var firstLetter = _.filter(array, function(val){
        if(val.name[0].toLowerCase() === letter.toLowerCase()){
            return val.name;
        }
    })
    return firstLetter.length;

};

var friendFirstLetterCount = function(array, customer, letter){
    //
};

var friendsCount = function(array, name){
    var friendsWith = _.filter(array, function(value, i, array){
        if(name === value.friends.name){
            return friendsWith;
        }
    })
    return friendsWith;
};

var topThreeTags = function(array){
    //create a variable with an array of tag arrays
    var tagsArray = _.map(array, function(val){
        return val.tags;
    }).reduce(function(prev, curr){
      return prev.concat(curr);
    }, []);

    // create obj to store key/value pairs of tags/occurrences
    var obj = {};
    //loop through tagsArray to create object w/ counts
    for(var i = 0; i < tagsArray.length; i++){
      if(obj[tagsArray[i]] !== undefined){
        obj[tagsArray[i]] += 1;
      } else{
        obj[tagsArray[i]] = 1;
      }
    };
    //return top3 keys in obj by using Object.entries, sort, map, & slice
    return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(el =>el[0])
    .slice(0, 3);
};

var genderCount = function(array){
  //count number of males, females, non binary using reduce
    var males = _.reduce(array, function(m, person){
        return m + (person.gender === "male")
    }, 0);

    var females = _.reduce(array, function(f, person){
        return f + (person.gender === "female")
    }, 0);

    var nonBinary = _.reduce(array, function(n, person){
        return n + (person.gender === "non-binary")
    }, 0);  
//return object {male: 3, female: 4, non-binary: 1}
    return {
        male: males,
        female: females,
        "non-binary": nonBinary //key with hypen needs to be coded as string
    }
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
