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
  speed: 1,
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

if (mouseX < width/3) {
  fill(255, 0, 0);
} else if (mouseX < 2 * width/3){
  fill (0, 255, 0);
} else {
  fill(0, 0, 255); /// colors change from red to blue to green depending on which third of the screen the mouse is in
}
  ellipse(circle.x, circle.y, circle.size);

}
