var prompt = require('sync-prompt').prompt;
/* global = prompt:true */
/*jshint -W069 */

'use strict';

// creating a object manually
//

var dogs = [];
var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};
///^^^ both d1 and d2 are the same concept
var d3 = {};
d3['name'] = 'lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a};

var name='name';
var age = 'age';
var d5 = {};
d5 [name] = n;
d5 [age] = a;


dogs.push(d1,d2,d3,d4,d5);

console.log('dogs: ', dogs);
// there ^^^^ are 2 rex ! using the same var
console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);



// creating objects using a constructor
//

function Dog(name, age){
  this.name = name;
  this.age = age;
}

var input = prompt('Would like to make a (d)og? -or- (q)uit ? ');
while(input !== 'q'){
  if(input === 'd') {
      name  = prompt('What would you like to name it? ');
      age   = prompt('What age? ');
      var dog = new Dog(name,age);
      dogs.push(dog);
  }   
input = prompt('Would like to make another (d)og? -or- (q)uit ? ');
}

var d6 = new Dog('fluffy', 2);

console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);
console.log(dogs);//<---dogs is the array up top //


