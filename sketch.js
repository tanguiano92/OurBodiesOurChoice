let lady;
let pills = [];
let politicians = [];
let gImg;
let pImg;

var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 3;




function preload() {
  gImg = loadImage('images/hpants_girl 1-1.png');
  pImg = loadImage('images/special agent 1.png');
  bgImg = loadImage("images/bg.jpg");
  mySound = loadSound('audio/civilized_villans.mp3');
}

function setup() {
  createCanvas(800, 400);
  lady = new Lady();

  x2 = width;

  mySound.setVolume(0.3);
  mySound.play();
}

function draw() {
  background(255);

  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width) {
    x1 = width;
  }
  if (x2 < -width) {
    x2 = width;
  }


  for (var i = 0; i < pills.length; i++) {
    pills[i].show();
    pills[i].move();
    for (var j = 0; j < politicians.length; j++) {
      if (pills[i].hits(politicians[j])) {
        politicians[j].decrease();
        pills[i].evaporate();
        console.log('Back up!');
      }
    }
  }

  if (random(1) < 0.005) {
    politicians.push(new Politician());
  }

  for (let p of politicians) {
    p.move();
    p.show();
    if (lady.hits(p)) {
      console.log('Game over!');
    }
  }

  lady.show();
  lady.move();

}

for (var i = pills.length - 1; i >= 0; i--) {
  if (pills[i].toDelete) {
    pills.splice(i, 1);
  }

}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    lady.jump();
  } else if (key === ' ') {
    var pill = new Pill(lady.x + 15, lady.y + 20);
    pills.push(pill);
  }
}
