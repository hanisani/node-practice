var greetings = require('./greetings.json');

var greet = function() {
    console.log('Hello from ' + greetings.es);
}

module.exports = greet;