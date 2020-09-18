/**************************************************
Variables Experiment 2 -
Animated piece: Black box with
Alana DeVito

**************************************************/
let backgroundShade = 0;

let circle = {
  x: 0,
  y: 250, // : says what is inside the property
  size: 200, // these are all properties
  speed: 2, //note these things are all one object
};

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
circle.x = circle.x + circle.speed; // getting the different properties for the variable circle
ellipse(circle.x, circle.y, circle.size);
}
