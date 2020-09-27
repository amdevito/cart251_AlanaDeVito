/**************************************************
DOdGing DOGS: Adventures of the White Squrriel
**************************************************/
let bg;
// dogs come in from the right at different distances outside of the frame so they are staggerd. so x= 1200 + randomNumber(1200, 1300, y position is randomNumber(height/2, height) midway to bottom
let dog1 = {
  x: 1200,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let dog2 = {
  x: 1200,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let dog3 = {
  x: 1200,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let dog4 = {
  x: 1200,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
//acorns roll across bottom of the ground, with the last one being the green one which stops the game. green one only comes out after 4 acorns have gone accross
//the acorns roll slower than the dogs, but evenly spaced. Squirrel must collect acorns while dodging dogs
let acorn1 = {
  x: 1200,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let acorn2 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let squrriel = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
function preload(){
  dog1 = loadImage('assets/images/dog1.png');
  dog2 = loadImage('assets/images/dog2.png');
  dog3 = loadImage('assets/images/dog3.png');
  dog4 = loadImage('assets/images/dog4.png');
  acorn1 = loadImage('assets/images/acorn1.png');
  acorn2 = loadImage('assets/images/acorn2.png');
  squrriel = loadImage('assets/images/squrriel.png');
}

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/images/park.jpg');
  createCanvas(1400, 800);
  
}

function draw() {
  background(bg);
  squirrel()
}
