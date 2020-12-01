// Sound installation 3:
// 2 states spinVinyl and interact.
// in the spin vinyl state click on the record and the track assigned to that record plays.
// If you click to the left of centre it plays backwards and if you click to the right it plays forwards.
// Click it again to stop. Hit space bar to switch between states. Interact state:
// As you move your mouse the delay time for the entire track is modulated and the middle circles move to the pulse of the sounds.

//state for turntable interaction

"use strict";

let gap = 20;
let cirNum = 15;
let cirSize = 10;
let spiralType = 3;
let angle;
let angle2;
let angle3;
let angle4;
let angle5;

let tracksPlayback;

let delay;

let recordOne = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  activeF: false,
  activeB: false,
  track: undefined,
  color: {
    r: 194,
    g: 169,
    b: 135,
  },
};

let recordTwo = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  activeF: false,
  activeB: false,
  track: undefined,
  color: {
    r: 0,
    g: 0,
    b: 0,
  },
};

let recordThree = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  activeF: false,
  activeB: false,
  track: undefined,
  color: {
    r: 194,
    g: 169,
    b: 135,
  },
};

let recordFour = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  activeF: false,
  activeB: false,
  track: undefined,
  color: {
    r: 94,
    g: 69,
    b: 35,
  },
};

let recordFive = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  activeF: false,
  activeB: false,
  track: undefined,
  color: {
    r: 94,
    g: 69,
    b: 35,
  },
};

function preload() {
  recordOne.track = loadSound(`assets/sounds/track3.mp3`);
  recordTwo.track = loadSound(`assets/sounds/track4.mp3`);
  recordThree.track = loadSound(`assets/sounds/track2.mp3`);
  recordFour.track = loadSound(`assets/sounds/track3.mp3`);
  recordFive.track = loadSound(`assets/sounds/track4.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
  setUpRecords();
  recordOne.color.r = mouseX;
  recordOne.color.b = mouseY;

  delay = new p5.Delay();

  delay.setType("pingPong");
}

function draw() {
  background(1);

  noStroke();
  fill(0);
  //show directions when all records are inactive, hide when interaction starts.
  if (
    !recordOne.activeF &&
    !recordOne.activeB &&
    !recordTwo.activeF &&
    !recordTwo.activeB &&
    !recordThree.activeF &&
    !recordThree.activeB &&
    !recordFour.activeF &&
    !recordFour.activeB &&
    !recordFive.activeF &&
    !recordFive.activeB
  ) {
    push();
    textSize(20);
    fill(255);
    textFont("Monospace");
    text("Spinning into Oblivion", 20, 25);
    textSize(16);
    fill(170);
    textFont("Monospace");
    text(
      "Click on each record to play a sample of the song.\nClicking the upper right corner of the record plays the track forwards and at regular speed.\nClicking the upper left corner plays the track backwards at regular speed.\nClicking the lower right corner plays the track forward but at quarter speed.\nClicking the lower left corner plays the track backward at quarter speed.\nClick on the record in the same place to stop playing. When a record is active the cursor movement changes its color.\nHit your browser's back button to return to the gallery.",
      20,
      50
    );
    pop();
  }

  //

  //call function for the first record
  recordOneDisplay();
  //call function for the second record
  recordTwoDisplay();
  // //call function for the third record
  recordThreeDisplay();
  // //call function for the four record
  recordFourDisplay();
  // //call function for the five record
  recordFiveDisplay();

  spinRecords();
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

  noFill();
  stroke(255);
  stroke(recordOne.color.r, recordOne.color.g, recordOne.color.b);
  if (recordOne.activeF) {
    recordOne.color.r = mouseX;
    recordOne.color.b = mouseY;
    stroke(recordOne.color.r, recordOne.color.g, recordOne.color.b);
    map(mouseX, 0, width, 0, 255);
    map(mouseY, 0, height, 0, 255);
  } else {
    stroke(255);
  }

  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
  }

  pop();
}

function recordOneSpinForward() {
  recordOne.spin = recordOne.spin + recordOne.speed;
}

function recordOneSpinBackward() {
  recordOne.spin = recordOne.spin - recordOne.speed;
}

function recordTwoDisplay() {
  //second circle #2
  push();
  translate(recordTwo.x, recordTwo.y); //
  rotate(angle2);

  angle2 = recordTwo.spin;

  noFill();
  stroke(255);
  stroke(recordTwo.color.r, recordTwo.color.g, recordTwo.color.b);
  if (recordTwo.activeF) {
    recordTwo.color.r = mouseX;
    recordTwo.color.b = mouseY;
    map(mouseX, 0, width, 0, 255);
    map(mouseY, 0, height, 0, 255);
  } else if (recordTwo.activeB) {
    recordTwo.color.g = mouseX;
    recordTwo.color.r = mouseX;
    recordTwo.color.b = mouseY;
    map(mouseX, 0, width, 170, 255);
    map(mouseY, 0, height, 170, 255);
  } else {
    stroke(255);
  }
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(
      0,
      0,
      cirSize + gap * i,
      cirSize + gap * i,
      angle2 * i,
      360 - angle2 / 2
    );
  }
  pop();

  // recordTwoSpin();
}

function recordTwoSpinForward() {
  recordTwo.spin = recordTwo.spin + recordTwo.speed;
}

function recordTwoSpinBackward() {
  recordTwo.spin = recordTwo.spin - recordTwo.speed;
}

function recordThreeDisplay() {
  //centre record #3
  push();
  translate(recordThree.x, recordThree.y);
  rotate(angle3);
  angle3 = recordThree.spin;

  noFill();
  stroke(255);
  stroke(recordThree.color.r, recordThree.color.g, recordThree.color.b);
  if (recordThree.activeF) {
    recordThree.color.r = mouseX;
    recordThree.color.b = mouseY;
    map(mouseX, 0, width, 0, 255);
    map(mouseY, 0, height, 0, 255);
  } else if (recordThree.activeB) {
    recordThree.color.g = mouseX;
    recordThree.color.r = mouseX;
    recordThree.color.b = mouseY;
    map(mouseX, 0, width, 170, 255);
    map(mouseY, 0, height, 0, 170);
  } else {
    stroke(255);
  }
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

  // recordThreeSpin();
}

function recordThreeSpinForward() {
  recordThree.spin = recordThree.spin + recordThree.speed;
}

function recordThreeSpinBackward() {
  recordThree.spin = recordThree.spin - recordThree.speed;
}

function recordFourDisplay() {
  //second last circle #4
  push();
  translate(recordFour.x, recordFour.y);
  rotate(angle4);
  angle4 = recordFour.spin;

  noFill();
  stroke(255);
  stroke(recordFour.color.r, recordFour.color.g, recordFour.color.b);
  if (recordFour.activeF) {
    recordFour.color.r = mouseX;
    recordFour.color.b = mouseY;
    map(mouseX, 0, width, 170, 255);
    map(mouseY, 0, height, 0, 170);
  } else if (recordFour.activeB) {
    recordFour.color.g = mouseX;
    recordFour.color.r = mouseX;
    recordFour.color.b = mouseY;
    map(mouseX, 0, width, 55, 170);
    map(mouseY, 0, height, 170, 255);
  } else {
    stroke(255);
  }
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(
      0,
      0,
      cirSize + gap * i,
      cirSize + gap * i,
      angle4 * i,
      360 - angle4 / 2
    );
  }
  pop();
  // recordFourSpin();
}

function recordFourSpinForward() {
  recordFour.spin = recordFour.spin + recordFour.speed;
}

function recordFourSpinBackward() {
  recordFour.spin = recordFour.spin - recordFour.speed;
}

function recordFiveDisplay() {
  //last circle #5
  push();
  translate(recordFive.x, recordFive.y);
  rotate(angle5);
  // angle = map(mouseX, 0, width, -90, 90);
  angle5 = recordFive.spin;

  noFill();
  stroke(255);
  stroke(recordFive.color.r, recordFive.color.g, recordFive.color.b);
  if (recordFive.activeF) {
    recordFive.color.r = mouseX;
    recordFive.color.b = mouseY;
    map(mouseX, 0, width, 70, 170);
    map(mouseY, 0, height, 30, 70);
  } else if (recordFive.activeB) {
    recordFive.color.g = mouseY;
    recordFive.color.r = mouseX;
    recordFive.color.b = mouseY;
    map(mouseX, 0, width, 55, 170);
    map(mouseY, 0, height, 170, 255);
  } else {
    stroke(255);
  }
  strokeWeight(1);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle5);
  }

  pop();
  // recordFiveSpin();
}

function recordFiveSpinForward() {
  recordFive.spin = recordFive.spin + recordFive.speed;
}

function recordFiveSpinBackward() {
  recordFive.spin = recordFive.spin - recordFive.speed;
}

///check if mouse is on top of the record, if on top and to left of centre, recordFive.spin = recordFive.spin - recordFive - recordFive.speed
function checkMouseHover() {
  //TRACK/RECORD ONE
  let d1 = dist(mouseX, mouseY, recordOne.x, recordOne.y);
  //play track one back (hidden but will keep in for future use)
  if (d1 < 145 && mouseX < recordOne.x && !recordOne.activeB) {
    recordOne.speed = 0.08;
    recordOne.activeB = true;
    recordOne.track.rate(-1);
    recordOne.track.play();
    recordOne.track.loop();
    recordOne.activeF = false;
    //play track one forward regular speed
  } else if (
    d1 < 145 &&
    mouseX > recordOne.x &&
    mouseY < recordOne.y &&
    !recordOne.activeF
  ) {
    recordOne.speed = 0.08;
    recordOne.activeF = true;
    recordOne.track.rate(1);
    recordOne.track.play();
    recordOne.track.loop();
    recordOne.activeB = false;
    //play track one backward and slower (hidden but will keep in for future use)
  } else if (
    d1 < 145 &&
    mouseX < recordOne.x &&
    mouseY > recordOne.y &&
    !recordOne.activeB
  ) {
    recordOne.speed = 0.008;
    recordOne.activeB = true;
    recordOne.track.rate(-0.25);
    recordOne.track.play();
    recordOne.track.loop();
    recordOne.activeF = false;
    //play track one forwards and slower
  } else if (
    d1 < 145 &&
    mouseX > recordOne.x &&
    mouseY > recordOne.y &&
    !recordOne.activeF
  ) {
    recordOne.speed = 0.008;
    recordOne.activeF = true;
    recordOne.track.rate(0.25);
    recordOne.track.play();
    recordOne.track.loop();
    recordOne.activeB = false;
    //stop playing track one
  } else if (
    d1 < 145 &&
    mouseX > recordOne.x &&
    mouseY > recordOne.y &&
    recordOne.activeF
  ) {
    recordOne.activeF = false;
    recordOne.track.stop();
    recordOne.activeB = false;
  } else if (d1 < 145 && mouseX < recordOne.x && recordOne.activeB) {
    recordOne.activeB = false;
    recordOne.track.stop();
  } else if (d1 < 145 && mouseX > recordOne.x && recordOne.activeF) {
    recordOne.activeF = false;
    recordOne.track.stop();
  }
  //TRACK/RECORD Two
  let d2 = dist(mouseX, mouseY, recordTwo.x, recordTwo.y);
  //play track Two back regular speed
  if (
    d2 < 145 &&
    mouseX < recordTwo.x &&
    mouseY < recordTwo.y &&
    !recordTwo.activeB
  ) {
    recordTwo.speed = 0.08;
    recordTwo.activeB = true;
    recordTwo.track.rate(-1);
    recordTwo.track.play();
    recordTwo.track.loop();
    delay.process(recordTwo.track, 0, 0, 8000);
    recordTwo.track.connect();
    recordTwo.activeF = false;
    //play track two forward regular speed
  } else if (
    d2 < 145 &&
    mouseX > recordTwo.x &&
    mouseY < recordTwo.y &&
    !recordTwo.activeF
  ) {
    recordTwo.speed = 0.08;
    recordTwo.activeF = true;
    recordTwo.track.rate(1);
    recordTwo.track.play();
    recordTwo.track.loop();
    delay.process(recordTwo.track, 0, 0, 8000);
    recordTwo.track.connect();
    recordTwo.activeB = false;
    //play track Two backward and with delay (to 'fake' back and slow, you just hear the delay signal)
  } else if (
    d2 < 145 &&
    mouseX < recordTwo.x &&
    mouseY > recordTwo.y &&
    !recordTwo.activeB
  ) {
    recordTwo.speed = 0.008;
    recordTwo.activeB = true;
    recordTwo.track.rate(-1);
    recordTwo.track.play();
    recordTwo.track.loop();
    delay.process(recordTwo.track, 0.5, 0.7, 200);
    recordTwo.track.disconnect();
    recordTwo.track.connect(delay);
    recordTwo.activeF = false;
    //play track Two forwards and slower
  } else if (
    d2 < 145 &&
    mouseX > recordTwo.x &&
    mouseY > recordTwo.y &&
    !recordTwo.activeF
  ) {
    recordTwo.speed = 0.008;
    recordTwo.activeF = true;
    recordTwo.track.rate(0.25);
    recordTwo.track.play();
    recordTwo.track.loop();
    delay.process(recordTwo.track, 0, 0, 8000);
    recordTwo.track.connect();
    recordTwo.activeB = false;
    //stop playing track Two
  } else if (
    d2 < 145 &&
    mouseX > recordTwo.x &&
    mouseY > recordTwo.y &&
    recordTwo.activeF
  ) {
    recordTwo.activeF = false;
    recordTwo.track.stop();
    recordTwo.activeB = false;
  } else if (d2 < 145 && mouseX < recordTwo.x && recordTwo.activeB) {
    recordTwo.activeB = false;
    recordTwo.track.stop();
  } else if (d2 < 145 && mouseX > recordTwo.x && recordTwo.activeF) {
    recordTwo.activeF = false;
    recordTwo.track.stop();
  }
  //TRACK/RECORD Three
  let d3 = dist(mouseX, mouseY, recordThree.x, recordThree.y);
  //play track Three back regular speed
  if (
    d3 < 145 &&
    mouseX < recordThree.x &&
    mouseY < recordThree.y &&
    !recordThree.activeB
  ) {
    recordThree.speed = 0.2;
    recordThree.activeB = true;
    recordThree.track.rate(-1);
    recordThree.track.play();
    recordThree.track.loop();
    delay.process(recordThree.track, 0, 0, 8000);
    recordThree.track.connect();
    recordThree.activeF = false;
    //play track three forward regular speed
  } else if (
    d3 < 145 &&
    mouseX > recordThree.x &&
    mouseY < recordThree.y &&
    !recordThree.activeF
  ) {
    recordThree.speed = 0.2;
    recordThree.activeF = true;
    recordThree.track.rate(1);
    recordThree.track.play();
    recordThree.track.loop();
    delay.process(recordThree.track, 0, 0, 8000);
    recordThree.track.connect();
    recordThree.activeB = false;
    //play track Three backward and with delay (to 'fake' back and slow, you just hear the delay signal)
  } else if (
    d3 < 145 &&
    mouseX < recordThree.x &&
    mouseY > recordThree.y &&
    !recordThree.activeB
  ) {
    recordThree.speed = 0.05;
    recordThree.activeB = true;
    recordThree.track.rate(-1);
    recordThree.track.play();
    recordThree.track.loop();
    delay.process(recordThree.track, 0.5, 0.7, 200);
    recordThree.track.disconnect();
    recordThree.track.connect(delay);
    recordThree.activeF = false;
    //play track Three forwards and slower
  } else if (
    d3 < 145 &&
    mouseX > recordThree.x &&
    mouseY > recordThree.y &&
    !recordThree.activeF
  ) {
    recordThree.speed = 0.05;
    recordThree.activeF = true;
    recordThree.track.rate(0.25);
    recordThree.track.play();
    recordThree.track.loop();
    delay.process(recordThree.track, 0, 0, 8000);
    recordThree.track.connect();
    recordThree.activeB = false;
    //stop playing track Three
  } else if (
    d3 < 145 &&
    mouseX > recordThree.x &&
    mouseY > recordThree.y &&
    recordThree.activeF
  ) {
    recordThree.activeF = false;
    recordThree.track.stop();
    recordThree.activeB = false;
  } else if (d3 < 145 && mouseX < recordThree.x && recordThree.activeB) {
    recordThree.activeB = false;
    recordThree.track.stop();
  } else if (d3 < 145 && mouseX > recordThree.x && recordThree.activeF) {
    recordThree.activeF = false;
    recordThree.track.stop();
  }
  //TRACK/RECORD Four
  let d4 = dist(mouseX, mouseY, recordFour.x, recordFour.y);
  //play track Four back regular speed
  if (
    d4 < 145 &&
    mouseX < recordFour.x &&
    mouseY < recordFour.y &&
    !recordFour.activeB
  ) {
    recordFour.speed = 0.08;
    recordFour.activeB = true;
    recordFour.track.rate(-1);
    recordFour.track.play();
    recordFour.track.loop();
    delay.process(recordFour.track, 0, 0, 8000);
    recordFour.track.connect();
    recordFour.activeF = false;
    //play track Four forward regular speed
  } else if (
    d4 < 145 &&
    mouseX > recordFour.x &&
    mouseY < recordFour.y &&
    !recordFour.activeF
  ) {
    recordFour.speed = 0.08;
    recordFour.activeF = true;
    recordFour.track.rate(1);
    recordFour.track.play();
    recordFour.track.loop();
    delay.process(recordFour.track, 0, 0, 8000);
    recordFour.track.connect();
    recordFour.activeB = false;
    //play track Four backward and with delay (to 'fake' back and slow, you just hear the delay signal)
  } else if (
    d4 < 145 &&
    mouseX < recordFour.x &&
    mouseY > recordFour.y &&
    !recordFour.activeB
  ) {
    recordFour.speed = 0.008;
    recordFour.activeB = true;
    recordFour.track.rate(-1);
    recordFour.track.play();
    recordFour.track.loop();
    delay.process(recordFour.track, 0.5, 0.7, 200);
    recordFour.track.disconnect();
    recordFour.track.connect(delay);
    recordFour.activeF = false;
    //play track Four forwards and slower
  } else if (
    d4 < 145 &&
    mouseX > recordFour.x &&
    mouseY > recordFour.y &&
    !recordFour.activeF
  ) {
    recordFour.speed = 0.008;
    recordFour.activeF = true;
    recordFour.track.rate(0.25);
    recordFour.track.play();
    recordFour.track.loop();
    delay.process(recordFour.track, 0, 0, 8000);
    recordFour.track.connect();
    recordFour.activeB = false;
    //stop playing track Four
  } else if (
    d4 < 145 &&
    mouseX > recordFour.x &&
    mouseY > recordFour.y &&
    recordFour.activeF
  ) {
    recordFour.activeF = false;
    recordFour.track.stop();
    recordFour.activeB = false;
  } else if (d4 < 145 && mouseX < recordFour.x && recordFour.activeB) {
    recordFour.activeB = false;
    recordFour.track.stop();
  } else if (d4 < 145 && mouseX > recordFour.x && recordFour.activeF) {
    recordFour.activeF = false;
    recordFour.track.stop();
  }
  //TRACK/recordFive
  let d5 = dist(mouseX, mouseY, recordFive.x, recordFive.y);
  //play track Four back regular speed
  if (
    d5 < 145 &&
    mouseX < recordFive.x &&
    mouseY < recordFive.y &&
    !recordFive.activeB
  ) {
    recordFive.speed = 0.08;
    recordFive.activeB = true;
    recordFive.track.rate(-1);
    recordFive.track.play();
    recordFive.track.loop();
    delay.process(recordFive.track, 0, 0, 8000);
    recordFive.track.connect();
    recordFive.activeF = false;
    //play recordFive forward regular speed
  } else if (
    d5 < 145 &&
    mouseX > recordFive.x &&
    mouseY < recordFive.y &&
    !recordFive.activeF
  ) {
    recordFive.speed = 0.08;
    recordFive.activeF = true;
    recordFive.track.rate(1);
    recordFive.track.play();
    recordFive.track.loop();
    delay.process(recordFive.track, 0, 0, 8000);
    recordFive.track.connect();
    recordFive.activeB = false;
    //play recordFive backward and with delay (to 'fake' back and slow, you just hear the delay signal)
  } else if (
    d5 < 145 &&
    mouseX < recordFive.x &&
    mouseY > recordFive.y &&
    !recordFive.activeB
  ) {
    recordFive.speed = 0.008;
    recordFive.activeB = true;
    recordFive.track.rate(-1);
    recordFive.track.play();
    recordFive.track.loop();
    delay.process(recordFive.track, 0.5, 0.7, 200);
    recordFive.track.disconnect();
    recordFive.track.connect(delay);
    recordFive.activeF = false;
    //play recordFive forwards and slower
  } else if (
    d5 < 145 &&
    mouseX > recordFive.x &&
    mouseY > recordFive.y &&
    !recordFive.activeF
  ) {
    recordFive.speed = 0.008;
    recordFive.activeF = true;
    recordFive.track.rate(0.25);
    recordFive.track.play();
    recordFive.track.loop();
    delay.process(recordFive.track, 0, 0, 8000);
    recordFive.track.connect();
    recordFive.activeB = false;
    //stop playing recordFive
  } else if (
    d5 < 145 &&
    mouseX > recordFive.x &&
    mouseY > recordFive.y &&
    recordFive.activeF
  ) {
    recordFive.activeF = false;
    recordFive.track.stop();
    recordFive.activeB = false;
  } else if (d5 < 145 && mouseX < recordFive.x && recordFive.activeB) {
    recordFive.activeB = false;
    recordFive.track.stop();
  } else if (d5 < 145 && mouseX > recordFive.x && recordFive.activeF) {
    recordFive.activeF = false;
    recordFive.track.stop();
  }
}

function spinRecords() {
  //record one - press mouse play record forward or backwards or stop playing.
  //check if mouse is pressed while hovering over RECORD - change to play record when pressed. play forward if pressed to the right of center and play back wards if pressed to the left.
  if (recordOne.activeF) {
    recordOneSpinForward(); //play track one forward and spin record forward
  } else if (recordOne.activeB) {
    recordOneSpinBackward(); //play track one forward and spin record forward
  }

  //record two - press mouse play record forward or backwards or stop playing.
  if (recordTwo.activeF) {
    recordTwoSpinForward(); //play track one forward and spin record forward
  } else if (recordTwo.activeB) {
    recordTwoSpinBackward();
  }

  //record three - press mouse play record forward or backwards or stop playing.
  if (recordThree.activeF) {
    recordThreeSpinForward(); //play track one forward and spin record forward
  } else if (recordThree.activeB) {
    recordThreeSpinBackward();
  }

  //record four - press mouse play record forward or backwards or stop playing.
  if (recordFour.activeF) {
    recordFourSpinForward(); //play track one forward and spin record forward
  } else if (recordFour.activeB) {
    recordFourSpinBackward();
  }

  //record five - press mouse play record forward or backwards or stop playing.
  if (recordFive.activeF) {
    recordFiveSpinForward(); //play track one forward and spin record forward
  } else if (recordFive.activeB) {
    recordFiveSpinBackward();
  }
}

function mousePressed() {
  checkMouseHover();
}

//code inspired by https://www.youtube.com/watch?v=QjCtbMNLRuc
