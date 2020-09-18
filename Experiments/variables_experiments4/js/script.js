/**************************************************
Variables Experiment 2 -
Animated piece: Black box with
Alana DeVito

**************************************************/
let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  speed: 1,
  fill:0,
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

  circle.speed = random(-5, 5); //makes the circle 'shiver' or move in a naturally animated way
  circle.x = circle.x + circle.speed;
  circle.y = random(0, height); // take this away and get a 'rain drop effect' or basically a circle that moves back and forwards.
  circle.fill = random(0, 255);
  circle.size = random(-20, 200);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

}
