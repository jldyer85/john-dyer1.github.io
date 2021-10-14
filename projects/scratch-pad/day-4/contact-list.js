// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. 
 *          The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addContact key with function that takes a contact arg and pushes it into contacts arr
        addContact: function(contact){
            return contacts.push(contact)
        },
        //findContact key with function that takes a fullName 
        findContact: function(fullName){
            //loop through contacts array to get access to contacts
            for(var i = 0; i < contacts.length; i++){

                //interpolate contact obj first & last name to compare to fullName
                if(`${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName){

                    //if equal, return contact obj
                    return contacts[i];
                }
            }
        },
        removeContact: function(contact){
            return contacts.pop();
        },
        //printAllNames from contacts list in string with new line for each name
        printAllContactNames: function(){
            //create var to store final list of names
            var returnList = ""

            //loop through contacts list obj to get access to names
            for(var i = 0; i < contacts.length; i++){

                //create var to store full name from contact obj
                var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;

              //if last contact reached return full name with no new line break  
              if(i === contacts.length - 1){
                  returnList += `${fullName}`;

              //else return fullName with new line break  
              } else {
                  returnList += `${fullName}\n`
              }
            }

            //return final list of names
            return returnList;
        }

    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
