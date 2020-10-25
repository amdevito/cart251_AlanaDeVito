/**************************************************
Ex. 5
Am DeVito

interactive soundscape 'game'
**************************************************/
"use strict";
let mitocybria;

let mallet;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  mitocybria = createVideo(["assets/images/mitocybria.mov"]);
  mitocybria.hide();

  mallet = new Mallet(100, 30, 60);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(47, 249, 108);
  imageMode(CENTER);
  image(mitocybria, width / 2, height / 2);

  mallet.move();
  mallet.display();
}

function mousePressed() {
  mitocybria.loop();
}
