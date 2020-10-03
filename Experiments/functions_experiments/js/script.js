/**************************************************
Functions
Alana DeVito

Functions Experiments
**************************************************/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
  r: 0,
  g: 0,
  b: 0
}

// setup()
//
// Description of setup() goes here.
function setup() { //function definition - 'function and then the name of the function' // function names are in blue
  createCanvas(500, 500); //call Function, inside brackets are the arguements for the function.

  circle.r = random(0, 255);
  circle.g = random(0, 255);
  circle.b = random(0, 255);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

circle.x += circle.vx;
circle.y += circle.vy;

if (circle.x > width) {
  circle.x = 0;
  circle.vx += 1;
  circle.size += 5;
  circle.r = random(0, 255);
  circle.g = random(0, 255);
  circle.b = random(0, 255);
}

  fill(circle.r, circle.g, circle.b);
  ellipse(circle.x, circle.y, circle.size);

}
