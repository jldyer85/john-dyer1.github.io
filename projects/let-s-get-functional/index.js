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
    //filter through array to get customer profile;
    var friendsWith = _.filter(array, function(value){ 
      if(value.name === customer){
        return value
      }
  })
  //map through customers profile to get their friend list
  .map((val) => val.friends)
  //flatten the friends array
  .reduce((prev, curr) => prev.concat(curr), [])
  //filter names that match letter arg, case sensitive
  .filter(val => val.name[0].toLowerCase() === letter.toLowerCase());

  //return length of results array
  return friendsWith.length;
};

var friendsCount = function(array, customer){
    //filter through array of objects
        var friendsWith = _.filter(array, function(profile){
          //loop through each filtered iterations friends array
          for(var i = 0; i < profile.friends.length; i++){
            //if customer is in friends list...
            if(profile.friends[i].name === customer){
              //return profile's name
              return true;
            }
          }
  }).map(customer => customer.name);
      return friendsWith;
  };

var topThreeTags = function(array){
    //create a variable with an array of tag arrays
    var tagsArray = _.map(array, function(val){
        return val.tags;
    }).reduce(function(prev, curr){
      return prev.concat(curr);
    }, []);

    //create obj to store key/value pairs of tags/occurrences
    var obj = {};
    //loop through tagsArray to create object w/ counts
    for(var i = 0; i < tagsArray.length; i++){
      if(obj[tagsArray[i]] !== undefined){
        obj[tagsArray[i]] += 1;
      } else{
        obj[tagsArray[i]] = 1;
      };
    };
    //return top3 keys in obj by using Object.entries, sort, map, & slice
    return Object.entries(obj)
    //sort entries in descending order by their numbers (index 1)
    .sort((a, b) => b[1] - a[1])
    //map the elements in array and return the tags (index 0)
    .map(el =>el[0])
    //slice a copy of top 3 elements in array
    .slice(0, 3);
};

var genderCount = function(array){
    //reduce genders into object
    var genders = _.reduce(array, function(genderObj, customer){
        //if genderobj doesn't exist, create it
        if(!genderObj[customer.gender]){
            genderObj[customer.gender] = 1;
            //else add 1 to existing gender key.
        } else {
            genderObj[customer.gender] += 1;
        }
        //return genderObj
        return genderObj;
    }, {})
    return genders;
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
