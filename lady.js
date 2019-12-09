'use strict';
class Lady {
 constructor(){
   this.r = 100;
   this.x = 50;
   this.y = height - this.r;
   this.vy = 0;
   this.gravity = 0.8;
   }

  jump() {
   if (this.y == height - this.r) {
       this.vy = -20;
   }
  }

  hits(politician) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = politician.x + politician.r * 0.5;
    let y2 = politician.y + politician.r * 0.5;

 return collideCircleCircle(x1, y1, this.r, x2, y2, politician.r);
  }

  move() {
   this.y += this.vy;
   this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r);
  }

  show() {
   image(gImg, this.x, this.y, this.r, this.r);
   noStroke();
   noFill();
   ellipseMode(CORNER);
   ellipse(this.x, this.y, this.r, this.r);
  }
}
