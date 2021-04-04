'use strict';
// game components compiled from Dan Shiffman Coding Train tutorials
function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 3;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255, 215, 0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.hits = function(zombie) {
    var d = dist(this.x, this.y, zombie.x, zombie.y);
    if (d < this.r + zombie.r) {
      return true;
    } else {
      return false;
    }
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.update = function() {
    this.x = this.x + 2;
  }
}
