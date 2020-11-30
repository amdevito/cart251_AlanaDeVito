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

let recordOne = {
  x: undefined,
  y: undefined,
  directionF: undefined,
  directionB: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  active: false,
};

let recordTwo = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  directionF: undefined,
  directionB: undefined,
  size: undefined,
  style: undefined,
  active: false,
};

let recordThree = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  directionF: undefined,
  directionB: undefined,
  size: undefined,
  style: undefined,
  active: false,
};

let recordFour = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  directionF: undefined,
  directionB: undefined,
  size: undefined,
  style: undefined,
  active: false,
};

let recordFive = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  directionF: undefined,
  directionB: undefined,
  size: undefined,
  style: undefined,
  active: false,
};

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
  setUpRecords();

  tracksPlayback = new TracksPlayback(files); // call class directing stored track to playback.
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
  //

  //call function for the first record
  recordOneDisplay();
  //call function for the second record
  // recordTwoDisplay();
  // //call function for the third record
  // recordThreeDisplay();
  // //call function for the four record
  // recordFourDisplay();
  // //call function for the five record
  // recordFiveDisplay();

  // tracksPlayback.mousePosition();

  // mouseX++;
  //mouseX++ is moving the circles forward automatically - put onto a function to call when the cursor is hovering over that shape and clicks. after click = click and drag right = play forward, click and drag left = play backward -mouse++?
  //make angle negative if you want to 'play' backward.
}

function setUpRecords() {
  recordOne.x = 0;
  recordOne.y = height / 2;

  recordTwo.x = width / 4;
  recordTwo.y = height / 2;

  //
  recordThree.x = width / 2;
  recordThree.y = height / 2;

  //
  recordFour.x = width - width / 4;
  recordFour.y = height / 2;

  //
  recordFive.x = width;
  recordFive.y = height / 2;
}

function recordOneDisplay() {
  //first circle #1
  push();
  translate(recordOne.x, recordOne.y);
  rotate(angle);

  angle = recordOne.spin;

  // recordOneSpin();
  // <<<*** CALL THIS   ///put this in a function and call if active and clicked and to the right of centre

  // angle = map(mouseX, 0, width, -90, 90);
  // mouseX++;

  noFill();
  stroke(255);
  strokeWeight(1);

  //put this into a spin function and then call here;
  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
    //cirSize = 0 makes it wobble
  }
  // recordOneSpin();

  pop();
}

function recordOneSpin() {
  recordOne.spin = recordOne.spin + recordOne.speed;
}

function recordTwoDisplay() {
  //second circle #2
  push();
  translate(recordTwo.x, recordTwo.y); //change to recordTwo.x, recordTWo.y
  rotate(angle);
  // angle++;
  // angle = angle + map(mouseX, 0, width, -0.1, 0.1);

  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }
  pop();
}

function recordThreeDisplay() {
  //centre record #3
  push();
  translate(recordThree.x, recordThree.y);
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

function recordFourDisplay() {
  //second last circle #4
  push();
  translate(recordFour.x, recordFour.y);
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

function recordFiveDisplay() {
  //last circle #5
  push();
  translate(recordFive.x, recordFive.y);
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

///click on a character to engage in a dialogue
function checkMouseHover() {
  let d1 = dist(mouseX, mouseY, personLongHair.x, personLongHair.y);
  if (d1 < 20) {
    personLongHair.active = true;
  } else {
    personLongHair.active = false;
  }
  let d2 = dist(mouseX, mouseY, personShortHair.x, personShortHair.y);
  if (d2 < 20) {
    personShortHair.active = true;
  } else {
    personShortHair.active = false;
  }
  let d3 = dist(mouseX, mouseY, childParent.x, childParent.y);
  if (d3 < 20) {
    childParent.active = true;
  } else {
    childParent.active = false;
  }
  let d4 = dist(mouseX, mouseY, digiCanvas1.x, digiCanvas1.y);
  if (d4 < 50) {
    digiCanvas1.active = true;
  } else {
    digiCanvas1.active = false;
  }
  let d5 = dist(mouseX, mouseY, digiCanvas2.x, digiCanvas2.y);
  if (d5 < 50) {
    digiCanvas2.active = true;
  } else {
    digiCanvas2.active = false;
  }
  // console.log(personLongHair.x);
  // console.log(personLongHair.y);
  // console.log(mouseX);
  // console.log(mouseY);
  // console.log(d1);
}

function mousePressed() {
  //check if mouse is pressed while hovering over RECORD - change to play record when pressed. play forward if pressed to the right of center and play back wards if pressed to the left.
  if (digiCanvas1.active && mousePressed) {
    soundInstallation1(); //links to sonic Space invader
  }
  if (digiCanvas2.active && mousePressed) {
    soundInstallation2(); //links to kelidoscape
  }
  if (personLongHair.active && mousePressed) {
    narrative1(); //links to sonic Space invader
  }
  if (personShortHair.active && mousePressed) {
    narrative2(); //links to kelidoscape
  }
  if (childParent.active && mousePressed) {
    narrative3(); //links to sonic Space invader - for now, will be new generative virtual sound installation piece
  }
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
