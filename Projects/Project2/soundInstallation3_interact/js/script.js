/**************************************************
Virtual Sound Installation 3
Different effects or speeds tyed to different circles?

Video of AV piece month of march in background. plays forward or backward. CAn I layer tranparent video over each other?

hover over each circle and spin to modelate tracks - track temp placy back and direction. short video lopo underneath each circle?
circles in classes

turn to web GL to have shapes rotate in wards and outwards
**************************************************/
"use strict";

let gap = 10;
let cirNum = 30;
let cirSize = 200;
let spiralType = 3; //randomize from  3-16
let angle;
let angle2;
let angle3;
let angle4;
let activeZoom;
let activeZoom2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(1);

  rotateX(70); // looks cool without the rotate as well
  fill(random(0, 170));
  stroke(255);
  strokeWeight(4);

  for (let i = 0; i < 20; i++) {
    beginShape();
    for (let j = 0; j < 360; j += 15) {
      let rad = i * 3;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 10 + i * 50) * 100;
      //
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }

  // noCursor();
  noStroke();
  fill(0);
  circle(mouseX, mouseY, 10);

  push();
  frameRate(5);
  translate((width / 2) * 0.005, (height / 2) * 0.005, activeZoom); ///active zoom tied to an fft value
  activeZoom = map(mouseX, 0, width, -200, 100);
  rotateX(angle2 + 60);
  angle2 = map(mouseY, 0, width, -60, 80);
  rotate(angle);
  angle = map(mouseX, 0, width, -80, 80);

  noFill();
  stroke(0, 0, 255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();

  push();
  translate((width / 2) * 0.005, (height / 2) * 0.005, activeZoom);
  activeZoom = map(mouseX, 0, width, -600, 500);
  // console.log(activeZoom);
  rotateX(angle3 + 60);
  frameRate(5);
  angle3 = map(mouseY, 0, width, -60, 60);
  // random(0, 360, 2);
  rotate(angle);
  angle = map(mouseX, 0, width, -60, 60);
  // translate(width / 2, height / 2);
  // rotateX(60);
  // rotate(-angle);

  // // angle = map(mouseX, 0, width, -90, 90);
  // angle = angle + map(mouseX * 2, 0, width, -0.1, 0.1);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();

  push();
  frameRate(5);
  translate((width / 2) * 0.005, (height / 2) * 0.005, -activeZoom2);
  activeZoom2 = map(mouseY, 0, height, -1000, 1000);
  rotateX(angle4 + 60);
  angle4 = map(mouseY, 0, width, -30, 30);
  rotate(angle);
  angle = map(mouseX, 0, width, -80, 180);
  // random(0, 360, 2); -- auto spin
  // frameRate(10);
  noFill();

  stroke(0, 255, 0);
  // random(0, 255), random(0, 255), random(0, 255)
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }

  pop();
}
