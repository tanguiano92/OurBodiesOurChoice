'use strict';
class Politician{
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
   image(pImg, this.x, this.y, this.r, this.r);
   noStroke();
   noFill();
   ellipseMode(CORNER);
   ellipse(this.x, this.y, this.r, this.r);
  }
}
