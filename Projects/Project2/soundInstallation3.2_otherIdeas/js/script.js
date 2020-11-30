// Sound installation 3:
// 2 states spinVinyl and interact.
// in the spin vinyl state click on the record and the track assigned to that record plays.
// If you click to the left of centre it plays backwards and if you click to the right it plays forwards.
// Click it again to stop. Hit space bar to switch between states. Interact state:
// As you move your mouse the delay time for the entire track is modulated and the middle circles move to the pulse of the sounds.

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
let angle2;
let angle3;
let angle4;
let angle5;

let tracksPlayback;
let files = [];

let recordOne = {
  x: undefined,
  y: undefined,
  spin: 1,
  speed: 0.05,
  size: undefined,
  style: undefined,
  activeF: false,
  activeB: false,
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
  recordTwoDisplay();
  // //call function for the third record
  recordThreeDisplay();
  // //call function for the four record
  recordFourDisplay();
  // //call function for the five record
  recordFiveDisplay();

  checkMouseHover();

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

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
    //cirSize = 0 makes it wobble
  }

  //cirSize + gap * cirNum = 45?

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
  translate(recordTwo.x, recordTwo.y); //change to recordTwo.x, recordTWo.y
  rotate(angle2);

  angle2 = recordTwo.spin;

  noFill();
  stroke(255);
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
  let d1 = dist(mouseX, mouseY, recordOne.x, recordOne.y);
  console.log(d1);
  if (d1 < 145 && mouseX < recordOne.x && !recordOne.activeB) {
    recordOne.activeB = true;
  } else if (d1 < 145 && mouseX > recordOne.x && !recordOne.activeF) {
    recordOne.activeF = true;
  } else if (d1 < 145 && mouseX < recordOne.x && recordOne.activeB) {
    recordOne.activeB = false;
  } else if (d1 < 145 && mouseX > recordOne.x && recordOne.activeF) {
    recordOne.activeF = false;
  }
  let d2 = dist(mouseX, mouseY, recordTwo.x, recordTwo.y);
  if (d2 < 145 && mouseX < recordTwo.x && !recordTwo.activeB) {
    recordTwo.activeB = true;
  } else if (d2 < 145 && mouseX > recordTwo.x && !recordTwo.activeF) {
    recordTwo.activeF = true;
  } else if (d2 < 145 && mouseX < recordTwo.x && recordTwo.activeB) {
    recordTwo.activeB = false;
  } else if (d2 < 145 && mouseX > recordTwo.x && recordTwo.activeF) {
    recordTwo.activeF = false;
  }
  let d3 = dist(mouseX, mouseY, recordThree.x, recordThree.y);
  if (d3 < 145 && mouseX < recordThree.x) {
    recordThree.activeB = true;
  } else if (d3 < 145 && mouseX > recordThree.x) {
    recordThree.activeF = true;
  } else if (d3 < 145 && mouseX < recordThree.x && recordThree.activeB) {
    recordThree.activeB = false;
  } else if (d3 < 145 && mouseX > recordThree.x && recordThree.activeF) {
    recordThree.activeF = false;
  }
  let d4 = dist(mouseX, mouseY, recordFour.x, recordFour.y);
  if (d4 < 145 && mouseX < recordFour.x) {
    recordFour.activeB = true;
  } else if (d4 < 145 && mouseX > recordFour.x) {
    recordFour.activeF = true;
  } else if (d4 < 145 && mouseX < recordFour.x && recordFour.activeB) {
    recordFive.activeB = false;
  } else if (d4 < 145 && mouseX > recordFour.x && recordFour.activeF) {
    recordFour.activeF = false;
  }
  let d5 = dist(mouseX, mouseY, recordFive.x, recordFive.y);
  if (d5 < 145 && mouseX < recordFive.x && recordFive.activeB === false) {
    recordFive.activeB = true;
  } else if (
    d5 < 145 &&
    mouseX > recordFive.x &&
    recordFive.activeF === false
  ) {
    recordFive.activeF = true;
  } else if (d5 < 145 && mouseX < recordFive.x && recordFive.activeB) {
    recordFive.activeB = false;
  } else if (d5 < 145 && mouseX > recordFive.x && recordFive.activeF) {
    recordFive.activeF = false;
  }
}

function mousePressed() {
  console.log(recordOne.activeF);
  console.log(recordOne.activeB);
  //record one - press mouse play record forward or backwards or stop playing.
  //check if mouse is pressed while hovering over RECORD - change to play record when pressed. play forward if pressed to the right of center and play back wards if pressed to the left.
  if (recordOne.activeF && mousePressed) {
    recordOneSpinForward(); //play track one forward and spin record forward
  } else if (!recordOne.activeF && mousePressed) {
    return;
  }
  //
  // if (recordOne.activeB && mousePressed) {
  //   recordOneSpinBackward();
  // } else if (!recordOne.activeB && mousePressed) {
  //   // recordOneSpinBackward();
  //   return;
  // }
  //record two - press mouse play record forward or backwards or stop playing.
  if (recordTwo.activeF && mousePressed) {
    recordTwoSpinForward(); //play track one forward and spin record forward
  } else if (!recordTwo.activeF && mousePressed) {
    recordTwoSpinForward();
    return;
  }

  if (recordTwo.activeB && mousePressed) {
    recordTwoSpinBackward();
  } else if (!recordTwo.activeB && mousePressed) {
    recordTwoSpinBackward();
    return;
  }

  //record three - press mouse play record forward or backwards or stop playing.
  if (recordThree.activeF && mousePressed) {
    recordThreeSpinForward(); //play track one forward and spin record forward
  } else if (!recordThree.activeF && mousePressed) {
    return;
  }

  if (recordThree.activeB && mousePressed) {
    recordThreeSpinBackward();
  } else if (!recordThree.activeB && mousePressed) {
    return;
  }

  //record four - press mouse play record forward or backwards or stop playing.
  if (recordFour.activeF && mousePressed) {
    recordFourSpinForward(); //play track one forward and spin record forward
  } else if (!recordFour.activeF && mousePressed) {
    return;
  }

  if (recordFour.activeB && mousePressed) {
    recordFourSpinBackward();
  } else if (!recordFour.activeB && mousePressed) {
    return;
  }

  //record five - press mouse play record forward or backwards or stop playing.
  if (recordFive.activeF && mousePressed) {
    recordFiveSpinForward(); //play track one forward and spin record forward
  } else if (!recordFive.activeF && mousePressed) {
    return;
  }

  if (recordFive.activeB && mousePressed) {
    recordFiveSpinBackward();
  } else if (!recordFive.activeB && mousePressed) {
    return;
  }
}

//recall tracks playback classes
function keyPressed() {
  tracksPlayback.keyPressed();
}

//if active and mouse X is increaing to the right of centre and mousedragged then play forward
//if active and mouseX is descreasing to the left of centre and mousedragged then play backward
//if active and mouseY is descreasing (going up the screen) play faster +1 as you get closer to 0
//if active and mouseY is increasing (going down) play slower -1 as you get closer to height.

//call this code for mouse dragged
// function mouseDragged() {
//   value = value + 5;
//
//   if (value > 255) {
//     value = 0;
//   }
// }
//code inspired by https://www.youtube.com/watch?v=QjCtbMNLRuc
