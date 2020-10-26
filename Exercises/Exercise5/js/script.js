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

  mallet = new Mallet(190, 20, 150, 50); //(w, h, malletThickness, malletHeight)

  for (let i = 0; i < numSinButtons; i++) {
    let x = random(50, width - 100);
    let y = random(-1000, -150);
    let size = random(30, 180);
    let sinButton = new SinButton(x, y, size);
    sinButtons.push(sinButton);
  }

  for (let i = 0; i < numTriButtons; i++) {
    let x1 = random(50, width - 100);
    let y1 = random(-1000, -150);
    let x2 = random(x1, x1 + 100);
    let y2 = random(y1, y1 + 100);
    let x3 = random(x2, x2 - 100);
    let y3 = random(y2, y2 - 100);
    let triButton = new TriButton(x1, y1, x2, y2, x3, y3);
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
    sinButton.bounce(mallet);
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
