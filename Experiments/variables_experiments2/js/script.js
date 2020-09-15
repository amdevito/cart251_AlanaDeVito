/**************************************************
Variables Experiment 2 - how to create Variables
Alana DeVito

**************************************************/
let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 200; //state variable before set up
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
background(backgroundShade);
ellipse(circleX, circleY, circleSize);
}
