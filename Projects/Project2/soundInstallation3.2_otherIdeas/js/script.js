//state for turntable interaction

"use strict";
// setup()
//
// Description of setup() goes here.
let gap = 20;
let cirNum = 15;
let cirSize = 10;
let spiralType = 3; //randomize from  3-16
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(1);

  // noCursor();
  noStroke();
  fill(0);
  circle(mouseX, mouseY, 5);

  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  angle = map(mouseX, 0, width, -90, 90);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i / spiralType);
  }

  pop();

  push();
  translate(width, height / 2);
  rotate(-angle);
  // angle = map(mouseX, 0, width, -90, 90);
  angle = angle + map(mouseX, 0, width, -0.5, 0.5);
  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
  }

  pop();

  push();
  translate(0, height / 2);
  rotate(-angle);
  angle = map(mouseX, 0, width, -90, 90);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
  }

  pop();

  push();
  translate(width - width / 4, height / 2);
  rotate(angle);
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();

  pop();

  push();
  translate(width / 4, height / 2);
  rotate(-angle);
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();
}
