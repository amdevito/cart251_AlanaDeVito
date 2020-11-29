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

let tracksPlayback;
let files = [];

function preload() {
  // Load all the tracks into the array
  for (let i = 0; i < 4; i++) {
    let file = loadSound(`assets/sounds/track${i}.mp3`); // get track from file and push into array position
    files.push(file);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);

  tracksPlayback = new TracksPlayback(files); // open this after classes are made
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(1);

  // spiralType = random(3, 16);
  // noCursor();
  noStroke();
  fill(0);
  // circle(mouseX, mouseY, 5);

  //call function for the first record
  recordOne();
  //call function for the second record
  recordTwo();
  //call function for the third record
  recordThree();
  //call function for the four record
  recordFour();
  //call function for the five record
  recordFive();

  tracksPlayback.mousePosition();

  // mouseX++;
  //mouseX++ is moving the circles forward automatically - put onto a function to call when the cursor is hovering over that shape and clicks. after click = click and drag right = play forward, click and drag left = play backward -mouse++?
  //make angle negative if you want to 'play' backward.
}

function recordOne() {
  //first circle #1
  push();
  translate(0, height / 2);
  rotate(angle);
  angle = map(mouseX, 0, width, -90, 90);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
  }

  pop();
}

function recordTwo() {
  //second circle #2
  push();
  translate(width / 4, height / 2);
  rotate(angle);
  // angle++;
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }
  pop();
}

function recordThree() {
  //centre record #3
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  angle = map(mouseX, 0, width, -90, 90);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(
      0,
      0,
      cirSize + gap * i,
      cirSize + gap * i,
      15 * 2,
      360 - i / spiralType
    );
  }

  pop();
}

function recordFour() {
  //second last circle #4
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
}

function recordFive() {
  //last circle #5
  push();
  translate(width, height / 2);
  rotate(angle);
  // angle = map(mouseX, 0, width, -90, 90);
  angle = angle + map(mouseX, 0, width, -0.5, 0.5);
  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
  }

  pop();
}

//if active and mouse X is increaing to the right of centre and mousedragged then play forward
//if active and mouseX is descreasing to the left of centre and mousedragged then play backward
//if active and mouseY is descreasing (going up the screen) play faster +1 as you get closer to 0
//if active and mouseY is increasing (going down) play slower -1 as you get closer to height.
//call this code for mouse dragged
function mouseDragged() {
  value = value + 5;

  if (value > 255) {
    value = 0;
  }
}
//code inspired by https://www.youtube.com/watch?v=QjCtbMNLRuc
