/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

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
  if (keyIsPressed) { //when any key is pressed turn to white
    background(255);
  } else {
    background(0); //when it is not pressed (let go) go back to black
  }
}
