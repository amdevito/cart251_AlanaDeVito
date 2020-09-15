/**************************************************
Variables Experiment 2 - how to create Variables
Alana DeVito

**************************************************/
let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 400; //state variable before set up
let circleSpeed = -3.8; // have the negative in the variable not in the arguement
let circleAcceleration = 0.25;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  background(0);

}

// draw()
//
// Description of draw() goes here.
function draw() { /// writing 1/60th a second 'draw loop' or 'update loop'
//background(backgroundShade + 2); //activate these and you lose the ripple effect but get the backgroun changing from black to white and the green circle shoots off into the distance
//backgroundShade = backgroundShade + 2;
strokeWeight(3);
stroke(0, 255, 0);
circleSize = circleSize * 0.93; // keeps moving because program keeps looping around to it
circleY = circleY * 1.01;
circleX += circleSpeed; // short hand for circleX = circleX + circleSpeed
circleSpeed = circleSpeed + circleAcceleration;
ellipse(circleX, circleY, circleSize);
}
