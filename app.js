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
var greet = require('./greet3.js');
greet.greet();
greet.greeting = 'Changed hello world';

var greet3 = require('./greet3.js');
greet3.greet();

var Greeter = require('./greet4.js');
var greet4 = new Greeter();
greet4.greet();

var greet5 = require('./greet5.js');
greet5.greet();