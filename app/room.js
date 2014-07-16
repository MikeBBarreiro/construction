'use strict';


function Room(name, length, width, height,  floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.color = color;
  this.floor = floor;
}
  /// this.area = function(){
  /// return this.length * this.width;
   // console.log('This is the area function!');
   // console.log('The length of this room is ', this.length);


Room.prototype.area = function(){
   return this.length * this.width;
};
Room.prototype.cost = function(){
  var rate, total = 0;

  switch(this.floor){
    case 'carpet':
      rate = 15;
      break;
   case 'tile':
      rate = 12;
      break;
   case 'wood':
      rate = 10;

}
  total += rate * this.area();
  total += (this.width * this.height) * 2 * 0.50;
  total += (this.length * this.height) * 2 * 0.50;

  return total;
};

module.exports = Room;

