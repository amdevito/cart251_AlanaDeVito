/**************************************************
Virtual Sound Installation 3
Different effects or speeds tyed to different circles?

Video of AV piece month of march in background. plays forward or backward. CAn I layer tranparent video over each other?

hover over each circle and spin to modelate tracks - track temp placy back and direction. short video lopo underneath each circle?
circles in classes

turn to web GL to have shapes rotate in wards and outwards
**************************************************/
"use strict";
// setup()
//
// Description of setup() goes here.
let gap = 10;
let cirNum = 30;
let cirSize = 200;
let spiralType = 3; //randomize from  3-16
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
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
  rotateX(60);
  rotate(-angle);
  angle = map(mouseX, 0, width, -90, 90);

  noFill();
  stroke(0, 255, 0);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i / spiralType);
  }

  pop();

  push();
  translate(-width, -height / 2);
  rotateX(60);
  rotate(-angle);

  // angle = map(mouseX, 0, width, -90, 90);
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);
  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();

  push();
  translate(0, -height / 2);
  rotate(-angle);
  angle = map(mouseX, 0, width, -90, 90);
  rotateX(60);
  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
  }

  pop();

  push();
  translate(-width - width / 4, -height / 2, -1000);
  rotate(angle);
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);
  rotateX(60);
  noFill();
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();

  push();
  translate(-width / 4, -height / 2);
  rotate(-angle);
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);
  rotateX(60);
  noFill();
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();
}
