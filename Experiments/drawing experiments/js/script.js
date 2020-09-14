/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 800); // set canvas size (width, height)
    background(200, 123, 200, 170); // RBGA < a for alpha 0 = completely transparent, 250 = solid)
    stroke(250, 255, 0); // good palette! lilac, turquoise, yellow//
rectMode(CORNER);

fill(0, 160, 190, 50);
  rect(400, 400, 100, 100);
  rect(400, 400, 80, 80, 0, 0, 20, 0);
  fill(0, 190, 190, 50);
  rect(400, 400, 60, 60);
  rect(400, 400, 40, 40, 0, 0, 20, 0);
  ellipseMode(CORNER);
  noStroke(); // removes outline from everything at follows
  ellipse(200, 400, 100, 100);
  fill(0, 165, 190, 100);
  ellipse(200, 390, 60, 60);
  fill(0, 170, 200, 100);
  ellipse(200, 380, 40, 40);




}

// draw()
//
// Description of draw() goes here.
function draw() {

}
