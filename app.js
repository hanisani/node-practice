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
// var name = 'Faheem Ahmad';
// var greet = 'Hello ' + name;
// var greet2 = `Hello ${ name }`;

// console.log(greet);
// console.log(greet2);

// Twenty First Lecture
// var obj = {
//     name: 'Faheem Ahmad',
//     greet: function() {
//         console.log(`Hello ${ this.name }`);
//     }
// }

// obj.greet();
// obj.greet.call({ name: 'Ali Khan' }); // Here we canpass multiple parameters as comma separated
// obj.greet.apply({ name: 'Hani Khan' }); // Here we can pass array of more than one parameters

// Twenty Second Lecture
// var EventEmitter = require('events');
// var util = require('util');

// function Greeter() {
//     EventEmitter.call(this);
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

// Twenty Third Lecture
// 'use strict';

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet() {
//         console.log('Hello, ' + this.firstName + ' ' + this.lastName);
//     }    
// }

// var faheem = new Person('Faheem', 'Ahmad');
// faheem.greet();

// Twenty Fourth Lecture
// 'use strict';
// var Greeter = require('./greeter');

// var greeter = new Greeter();

// greeter.on('greet', function(data) {
//     console.log('Someone greeted : ' + data);
// });

// greeter.greet('Faheem');

// Twenty Fifth Lecture
// var buffer = new Buffer('Hello', 'utf8');
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer[2]);
// buffer.write('wo');
// console.log(buffer.toString());

// Twenty Sixth Lecture
// var buffer = new ArrayBuffer(8);
// var view = new Int32Array(buffer);
// view[0] = 5;
// view[1] = 15;
// console.log(view);

// Twenty Seventh Lecture
// function greet(callback) {
//     console.log('Hello');
//     var data = {
//         name: 'Faheem Ahmad'
//     };
//     callback(data);
// }

// greet(function(data) {
//     console.log('The callback was invoked');
//     console.log(data);
// });

// greet(function(data) {
//     console.log('The callback was invoked again');
//     console.log(data.name);
// });

// Twenty Eighth Lecture
// var fs = require('fs');
// var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

// console.log(greet);

// // readFile is Asynchronous
// var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
//     console.log(data);
// });

// console.log('Done');

// Twenty Nineth Lecture
// var fs = require('fs');
// var readableStream = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16*1024 });
// var writeableStream = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readableStream.on('data', function(chunck) {
//     //console.log(chunck.length);
//     //console.log(chunck);
//     writeableStream.write(chunck);    
// });

// 30 Lecture
// var fs = require('fs');
// var zlib = require('zlib');

// var readableStream = fs.createReadStream(__dirname + '/greet.txt');
// var writeableStream = fs.createWriteStream(__dirname + '/greetcopy.txt');
// var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// var gzip = zlib.createGzip();

// readableStream.pipe(writeableStream);
// readableStream.pipe(gzip).pipe(compressed); // Method chaining/cascading

// 31 Lecture [Build web server in Node]
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {

//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
//     var message = 'Hello Faheem Ahmad';
//     html = html.replace('{message}', message);
//     response.end(html);

// }).listen(1337, '127.0.0.1'); // 127.0.0.1 or localhost

// 32 Lecture
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {

//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);

// }).listen(1337, '127.0.0.1'); // 127.0.0.1 or localhost

// 33 Lecture
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {

//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     var obj = {
//         firstName: 'Faheem',
//         lastName: 'Ahmad'
//     };
//     response.end(JSON.stringify(obj));

// }).listen(1337, '127.0.0.1'); // 127.0.0.1 or localhost

// 34 Lecture
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {

//     if(request.url == '/') {
//         fs.createReadStream(__dirname + '/index.html').pipe(response);
//     }
//     else if(request.url === '/api') {    
//         response.writeHead(200, { 'Content-Type': 'application/json' });
//         var obj = {
//             firstName: 'Faheem',
//             lastName: 'Ahmad'
//         };
//         response.end(JSON.stringify(obj));
//     }
//     else {
//         response.writeHead(404);
//         response.end();
//     }

// }).listen(1337, '127.0.0.1'); // 127.0.0.1 or localhost

// //major.minor.patch ^ (don't update major) or ~ (don't update minor)
// npm install -g nodemon
// C:\Users\fahmad\AppData\Roaming\npm\node_modules\nodemon

// 35 Lecture [npm install moment --save] [npm install jasmine-node --save --only=dev]
// var moment = require('moment');
// console.log(moment().format());
// console.log(moment().format("ddd, hh A"));

// 36 Lecture
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {

//     if(request.url == '/') {
//         fs.createReadStream(__dirname + '/index.html').pipe(response);
//     }
//     else if(request.url === '/json') {    
//         response.writeHead(200, { 'Content-Type': 'application/json' });
//         var obj = {
//             firstName: 'Faheem',
//             lastName: 'Ahmad'
//         };
//         response.end(JSON.stringify(obj));
//     }
//     else {
//         response.writeHead(404);
//         response.end();
//     }

// }).listen(1337, '127.0.0.1'); // 127.0.0.1 or localhost

// 37 Lecture
// var express = require('express');
// var app = express();
// var port = process.env.port || 3000;

// app.get('/', function(request, response) {
//     response.send('<html><head></head><body><h1>Hello World!!!</h1></body></html>');
// });

// app.get('/person/:id', function(request, response) {
//     response.send('<html><head></head><body><h1>Person: '+ request.params.id +'</h1></body></html>');
// });

// app.get('/person/:page/:id', function(request, response) {
//     response.send('<html><head></head><body><h1>Person: '+ request.params.page +'</h1><h1> id: '+ request.params.id +'</h1></body></html>');
// });

// app.get('/api', function(request, response) {
//     response.json({
//         firstName: 'Ali',
//         lastName: 'Khan'
//     });
// });

// app.listen(port);

// 38 Lecture
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(request, response, next) {
    console.log('Request URL : ' + request.url);
    next();
});

app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//     response.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!!!</h1></body></html>');
// });
// app.get('/', function(request, response) {
//     response.render('index');
// });
app.get('/', function(request, response) {
    response.render('index');
});
// app.get('/person/:id', function(request, response) {
//     response.send('<html><head></head><body><h1>Person: '+ request.params.id +'</h1></body></html>');
// });
// app.get('/person/:id', function(request, response) {
//     response.render('person', { id: request.params.id });
// });
app.get('/person/:id', function(request, response) {
    response.render('person', { id: request.params.id, queryString: request.query.age });
});

app.post('/person', urlencodedParser, function(request, response) {
    response.send('Thank you');
    console.log(request.body.firstName);
    console.log(request.body.lastName);
});

// app.post('/personJson', jsonParser, function(request, response) {
//     response.send('Thank you for sending json data');
//     console.log(request.body.firstName);
//     console.log(request.body.lastName);
// });

// RESTful api URLs looks like below
// 1.
app.get('/api/person/:id', function(request, response) {
    // get data from the database
});
// 2.
app.post('/api/person', jsonParser, function(request, response) {
    // save data to the database
});
// 3.
app.delete('/api/person/:id', function(request, response) {
    // delete data from the database
});

app.get('/person/:page/:id', function(request, response) {
    response.send('<html><head></head><body><h1>Person: '+ request.params.page +'</h1><h1> id: '+ request.params.id +'</h1></body></html>');
});
app.get('/api', function(request, response) {
    response.json({
        firstName: 'Ali',
        lastName: 'Khan'
    });
});

app.listen(port);