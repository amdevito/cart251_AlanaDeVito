/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 5,
  fill: 225
}
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade);

  circle.x += circle.speed;

  if (circle.x > width) { // conditional in brackets
    circle.speed = -circle.speed; //curly brackets = block of code
  }

  if (circle.x < 0) {
    circle.speed = -circle.speed;
  }

  if (mouseY < height/2) {
    fill(255, 0, 0);
  }

  if (mouseY > height/2) {
    fill(0, 0, 255);
  }

  ellipse(circle.x, circle.y, circle.size);

} /// this is a circle that bounces back and forth across the screen, and changes color depending on the y coordinates of the mouse.
