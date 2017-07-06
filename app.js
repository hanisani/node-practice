// First Lecture
// var a=1;
// var b=2;
// var c=a+b;

// Second Lecture
// console.log(c);

// function greet() {
//     console.log('hi');
// }

// greet();

// function logGreeting(fn) {
//     fn();
// }

// logGreeting(greet);

// var greetMe = function() {
//     console.log('Function expression');
// }

// greetMe();

// logGreeting(greetMe);

// logGreeting(function() {
//     console.log('Use anonymous function on the fly');
// })

// Third Lecture
// var greet = require('./greet.js'); // ./ means in the same folder level
// greet();

// Fourth Lecture
// var person = {
//     firstName: 'Faheem',
//     lastName: 'Ahmad',
//     greet: function() {
//         console.log('Hello, ' + this.firstName + ' ' + this.lastName);
//     }
// }

// person.greet();

// console.log(person['firstName']);
// console.log(person['lastName']);

// console.log(person.firstName);
// console.log(person.lastName);

// Fifth Lecture
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greet = function() {
//     console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// }

// var faheem = new Person('Faheem', 'Ahmad');

// console.log(faheem.firstName);
// console.log(faheem.lastName);

// faheem.greet();

// var ali = new Person('Ali', 'Hassan');
// ali.greet();

// console.log(faheem.__proto__);
// console.log(ali.__proto__);

// console.log(faheem.__proto__ === ali.__proto__);

// Sixth Lecture
// function change(b) {
//     b = 2;
// }

// var a = 1;
// change(a);

// console.log(a);

// function changeObj(d) {
//     d.prop1 = function() {};
//     d.prop2 = {};
// }

// var c = {};
// c.prop1 = {};
// changeObj(c);

// console.log(c);

// Seventh Lecture
// var firstName = 'Ahmad';

// (function(lastName) {
//     var firstName = 'Faheem';
//     console.log(firstName);
//     console.log(lastName);
// }('Khan'));

// console.log(firstName);

// Eight Lecture
// var greet = require('./greet.js');
// greet();

// Nineth Lecture
// var greet = require('./greet')

// greet.english();
// greet.spanish();

// Tenth Lecture
// var greet = require('./greet1.js');
// greet();

// Eleventh Lecture
// var greet = require('./greet2.js').greet;
// greet();

// Twelfth Lecture
// var greet = require('./greet3.js');
// greet.greet();
// greet.greeting = 'Changed hello world';

// var greet3 = require('./greet3.js');
// greet3.greet();

// var Greeter = require('./greet4.js');
// var greet4 = new Greeter();
// greet4.greet();

// var greet5 = require('./greet5.js');
// greet5.greet();

// Thirteenth Lecture
// var greet = require('./greet.js');
// var greet6 = require('./greet6.js');
// greet6.greet();

// Fourteenth Lecture
// var util = require('util');
// var name = 'Faheem';
// var greeting = util.format('Hello, %s', name);
// util.log(greeting);

// Fifteenth Lecture
// var obj = {
//     greet: 'Hello'
// }

// console.log(obj.greet);
// console.log(obj['greet']);

// var prop = 'greet';
// console.log(obj[prop]);

// var arr = [];

// arr.push(function() {
//     console.log('Hello world one');
// });
// arr.push(function() {
//     console.log('Hello world two');
// });
// arr.push(function() {
//     console.log('Hello world three');
// });

// arr.forEach(function(item) {
//     item();
// })

//arr.push('Hello world two');

// Sixteenth Lecture
//var Emitter = require('./emitter.js');
// Note: For build in files don't use file extension. e.g. use like events and not like events.js
// var Emitter = require('events'); // Use build in/Internal events.js Emitter
// var Config = require('./config.js');

// var emitter = new Emitter();
// var events = Config.events;

// emitter.on(events.GREET, function() {
//     console.log('Somewhere, someone said hello.');
// });
// emitter.on(events.GREET, function() {
//     console.log('A greeting occurred');
// });

// console.log('Hello');
// emitter.emit(events.GREET);

// Eighteenth Lecture
// var person = {
//     firstName: '',
//     lastName: '',
//     greet: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// var faheem = Object.create(person);
// faheem.firstName = 'Faheem';
// faheem.lastName = 'Ahmad';

// var ali = Object.create(person);
// ali.firstName = 'Ali';
// ali.lastName = 'Khan';

// console.log(faheem.greet());
// console.log(ali.greet());

// Nineteenth Lecture
// var EventEmitter = require('events');
// var util = require('util');

// function Greeter() {
//     this.greeting = 'Hello world';
// }

// util.inherits(Greeter, EventEmitter);

// Greeter.prototype.greet = function(data) {
//     console.log(this.greeting + ' : ' + data);
//     this.emit('greet', data);
// }

// var greeter1 = new Greeter();
// greeter1.on('greet', function(data) {
//     console.log('Someone greeted : ' + data);
// });

// greeter1.greet('Faheem');

// Twentieth Lecture