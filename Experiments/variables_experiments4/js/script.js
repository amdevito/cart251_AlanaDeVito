/**************************************************
Variables Experiment 4 -
Map and constrain with objects intro
Alana DeVito

**************************************************/
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255,
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

  circle.x = circle.x + circle.speed;
  circle.x = constrain(circle.x, 0, width);


  circle.size = map(mouseY, height, 0, 20, 500);

  circle.fill = map(circle.x, 0, width, 0, 255); //acts like 'scale' in MAXMSP
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

}
