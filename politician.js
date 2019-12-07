class Politician{
 constructor() {
  this.r = 60;
  this.x = width;
  this.y = height - this.r;
 }

  decrease = function(){
    this.r = this.r - 30*2;
  }

  move() {
   this.x -= 3;
  }

  show() {
   image(pImg, this.x, this.y, this.r, this.r);
   noStroke();
   noFill();
   ellipseMode(CORNER);
   ellipse(this.x, this.y, this.r, this.r);
  }
}
