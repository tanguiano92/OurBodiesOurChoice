'use strict';

// game components compiled from Dan Shiffman Coding Train tutorials

let lady;
let pills = [];
let politicians = [];
let gImg;
let pImg;
let mySound;

var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 3;


function resetGame() {
    lady = new Lady();
}

// civilized_villians sound by Eric Taylor
function preload() {
  gImg = loadImage('images/hpants_girl 1-1.png');
  pImg = loadImage('images/secret agent.png');
  bgImg = loadImage("images/bg.jpg");
  mySound = loadSound('audio/civilized_villans.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  resetGame();

  x2 = width;

  mySound.setVolume(0.1);
  mySound.play();
  mySound.loop();
}

function draw() {
background(0);

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
    pills[i].update();
    for (var j = 0; j < politicians.length - 1; j++) {
      if (pills[i].hits(politicians[j])) {
        politicians[j].decrease();
        pills[i].evaporate();
        console.log('Back up!');
      }
    }
  }

  if (random(1) < 0.01) {
    politicians.push(new Politician());
  }

  for (var i = pills.length - 1; i >= 0; i--) {
    pills[i].update();
    pills[i].show();
    if (pills[i].toDelete) {
      pills.splice(i, 1);
    }
  }

  for (let p of politicians) {
    p.move();
    p.show();
    if (lady.hits(p)) {
      console.log('Game over!');
    if (lady.intersects(p)) {
      resetGame();
    }
    }
  }

  lady.show();
  lady.move();

}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    lady.jump();
  } else if (key === ' ') {
    var pill = new Pill(lady.x + 15, lady.y + 20);
    pills.push(pill);
  }
}
