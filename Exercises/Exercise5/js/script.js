/**************************************************
Ex. 5
Am DeVito

interactive soundscape 'game'
**************************************************/
"use strict";
let gravityForce = 0.0025;

let mitocybria;

let mallet;

let sinButtons = [];

let triButtons = [];

let numSinButtons = 5;

let numTriButtons = 5;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  mitocybria = createVideo(["assets/images/mitocybria.mov"]);
  mitocybria.hide();

  mallet = new Mallet(100, 30, 60);

  for (let i = 0; i < numSinButtons; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let size = random(20, 80);
    let sinButton = new SinButton(x, y, size);
    sinButtons.push(sinButton);
  }

  for (let i = 0; i < numTriButtons; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let triButton = new TriButton(x, y);
    triButtons.push(triButton);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(149, 37, 186);
  imageMode(CENTER);
  image(mitocybria, width / 2, height / 2);

  mallet.move();
  mallet.display();

  for (let i = 0; i < sinButtons.length; i++) {
    let sinButton = sinButtons[i];
    sinButton.gravity(gravityForce);
    sinButton.move();
    sinButton.bounce();
    sinButton.display();
  }

  for (let i = 0; i < triButtons.length; i++) {
    let triButton = triButtons[i];
    triButton.gravity(gravityForce);
    triButton.move();
    triButton.bounce();
    triButton.display();
  }
}

function mousePressed() {
  mitocybria.loop();
}
