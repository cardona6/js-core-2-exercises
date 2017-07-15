/*
1. Refactor this function to use to .filter and ES6 syntax
2. Refactor the function to take a second parameter "length" - if the parameter is not provided then it should default to 10
3. Write tests to cover the case where length is provided
 */



var MESSAGE_LENGTH = 30;

var getShortMessages = function(messages) {

    var newArr = messages.filter(function (msg) {
        return msg.text.length < MESSAGE_LENGTH
    });

    console.dir(newArr);

    return newArr
}

module.exports = getShortMessages;
