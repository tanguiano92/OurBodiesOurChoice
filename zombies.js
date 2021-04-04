'use strict';
// game components compiled from Dan Shiffman Coding Train tutorials
class Zombie{
 constructor() {
  this.r = 100;
  this.x = width;
  this.y = height - this.r;
 }

  decrease(){
    this.r = this.r - 100;
  }

  move() {
   this.x -= 8;
  }

  show() {
   image(zImg, this.x, this.y, this.r, this.r);
   noStroke();
   noFill();
   ellipseMode(CORNER);
   ellipse(this.x, this.y, this.r, this.r);
  }
}
