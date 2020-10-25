/**************************************************
Ex. 5
Am DeVito

interactive soundscape 'game'
**************************************************/
"use strict";

let mallet;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  mallet = new Mallet(100, 30, 60);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(47, 249, 108);

  mallet.move();
  mallet.display();
}
