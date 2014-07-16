'use strict';
var House = require('./house');
var Room = require('./room');


var r1 = new Room('living', 10, 12, 9, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 10,'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 12,'wood', 'orange');

console.log(r1, r2, r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1756);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1, r2 ,r3);
console.log(h1, h2, h3);

var totalcost = 0;

for(var i = 0; i < h1.rooms.length; i++) {
  totalcost += h1.rooms[i].cost();
  
}

  console.log('The area of room 1 is', r1.area());
  console.log('The cost of room 1 is', r1.cost());
  console.log('The cost of room 2 is', r2.cost());
  console.log('The cost of room 3 is', r3.cost());
  console.log('The total area of h1 is', h1.area());
  console.log('The total cost of h1 is', h1.h1Cost());

//This calls the area function that is created in room.js
//console.log('The are of room 1 is ', r1.area());

//study this
/*
var total = 0;
for ( var i = 0; i < h1.rooms.length; i++) {
  total += h1.rooms[i].area();
}
console.log('Total area of house 1 is ', total);

House.prototype.area = function() {
  var total = 0;
};
*/
