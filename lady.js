class Lady {
 constructor(){
   this.r = 70 ;
   this.x = 50;
   this.y = height - this.r;
   this.vy = 0;
   this.gravity = 2;
   }
  
  jump() {
   if (this.y == height - this.r) {
       this.vy = -30;
   }  
  }
  
  hits(politician) {
   return collideRectRect(this.x, this.y, this.r, this.r, politician.x, politician.y, politician.r, politician.r);
  }
  
  move() {
   this.y += this.vy;
   this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r);
  }
  
  show() {
   image(gImg, this.x, this.y, this.r, this.r);
  
  }
}