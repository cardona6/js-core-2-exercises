/*
1. Refactor this function to use to .find and ES6 syntax
2. Refactor the function to take a second parameter "word" - if the parameter is not provided then it should default to 'Lorem'
3. Write tests to cover where a word is provided
4. Write a test to check if your function is case insensitive
5. If it is not case insensitive, then make it!
 */

var WORD_TO_FIND = 'Lorem';

function findMessages(messages) {
  return messages.find(findtext => {
    console.log(findtext);
    return findtext.text.match(WORD_TO_FIND)
  });
      
}

module.exports = findMessages;