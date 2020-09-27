/**************************************************
DOdGing DOGS: Adventures with the White Squrriel
**************************************************/
let bg;
let dog1 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let dog2 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let dog3 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
}
let dog4 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ax: 0
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
}
