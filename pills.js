function Pill(x, y){
  this.x = x;
  this.y = y;
  this.r = 6;
  this.toDelete = false;
  
  this.show = function (){
    noStroke();
    fill(245, 135, 190);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.evaporate = function(){
    this.toDelete = true;
  }
  
  this.hits = function(politician){
    var d = dist(this.x, this.y, politician.x, politician.y);
    if (d < this.r + politician.r) { 
    return true;
    } else {
      return false;
    }
  }
  
  this.move = function() {
    this.x = this.x + 3;
  }
}