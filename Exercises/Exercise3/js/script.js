/**************************************************
Exercise 3: Love Actually

Alana DeVito

Click through title and instructions.
(x) added colour to circles and made flicker (maybe take flicker away and save for attacker?)
(x)added a third circle that will flicker red
(x) get title from other project and place in title area
(x) add instructions - make seperate function and variable and call this when the title moves past the top of the screen
(x)added arow controls for blue circle (arrow control) circle 2
(x)added letters (awsd) controls for green circle circle 1
    control two circles with 2 hands (or can play with another person)
    one person - arrows with ? as shooter
    second person - awds with q as shooter
() get red circle to move more spastically in the canvas (constrain to canvas size) - move towards which ever circle is closest?
() get the green circle to shoot yellow 'bullets' using ?
()get blue circle to shoot orange 'bullets' using q
() get red circle to shoot one random bullet forward every 4 seconds
() change logic to win screen when you shoot red circle
() change logic to lose when circle 1 or 2 touches red circle or gets shot by red circle


third circle moves around spastically and you have to shoot it
 __ maybe it shoots things too?


**************************************************/
//set keyboard control variables.
let keyboardControl = {
  left: 8,
  right: 8,
  up: 10,
  down: 10
}

//set bullet variables for circle 1 (yellow squares)
let bullet1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 241,
  g: 247,
  b: 71,
  fired: false
}
//set bullet variables for circle 2(orange squares)
let bullet2 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 247,
  g: 165,
  b: 71,
  fired: false
}

// //set bullet variables for circle 3(green squares) green shoots one bullet forward every 4 seconds
// let bullet3 = {
//   x: 0,
//   y: 0,
//   size: 0,
//   speed: 0,
//   vx: 0,
//   vy: 0,
//   r: 153,
//   g: 247,
//   b: 71
// }

//green circle (left letters controller)
let circle1 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0,
  r: 0,
  g: 255,
  b: 0,
};

//blue circles (arrow keys)
let circle2 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0,
  r: 0,
  g: 0,
  b: 255,
};

//flashing red 'evil circle'
let circle3 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 5, //moves slightly slower than other circles but more spastically
  vy: 5,
  speed: 0,
  r: 255,
  g: 0,
  b: 0,
  active: true
};

let title = {
  string: `The Darker Side of Love`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//add additional lines for instructions to break up the lines that are too long
let instruction = {
  string: `HOW TO PLAY:`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction1 = {
  string: `You are the green circle AND the blue circle.`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction2 = {
  string: `Use the following letter keys to control the GREEN circle:`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction3 = {
  string: `A = Back, W = UP, S = DOWN, D = FORWARD, Q = SHOOT`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction4 = {
  string: `Use the arrow keys to control the BLUE circle`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction5 = {
  string: `and press '?' (question mark) to SHOOT.`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction6 = {
  string: `Don't let the flashing red circle touch or shoot YOU!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction7 = {
  string: `When you are ready, click the mouse to . . .`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction8 = {
  string: `START THE GAME!!!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let state = `title`; //Can be title, love, or sadness.

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupCircles();
  setUpCircle3 ();
  setUpBullets();
  setupTitle();
  setUpInstruction();
  setUpInstruction1();
  setUpInstruction2();
  setUpInstruction3();
  setUpInstruction4();
  setUpInstruction5();
  setUpInstruction6();
  setUpInstruction7();
  setUpInstruction8();

}

function setUpBullets() {
    bullet1.x = 0;
    bullet1.y = 0;
    bullet1.size = unit(5);
    bullet1.speed = unit(2);
    bullet1.vx = unit(1);
    bullet1.vy = unit(1);

    bullet2.x = 0,
    bullet2.y = 0,
    bullet2.size = unit(5);
    bullet2.speed = unit(2);
    bullet2.vx = unit(1);
    bullet2.vy = unit(1);
}

function setupTitle() {
  title.x = width / 2;
  title.y = height;
  title.vx = unit(5);
  title.vy = unit(1);
  title.size = unit(60);
}

///setUpInstruction starts after title passes bottom?
function setUpInstruction() {
  instruction.x = width / 2;
  instruction.y = height;
  instruction.vx = unit(5);
  instruction.vy = unit(1);
  instruction.size = unit(30);
}
function setUpInstruction1() {
  instruction1.x = width / 2;
  instruction1.y = height*1.1;
  instruction1.vx = unit(5);
  instruction1.vy = unit(1);
  instruction1.size = unit(20);
}
function setUpInstruction2() {
  instruction2.x = width / 2;
  instruction2.y = height*1.2;
  instruction2.vx = unit(5);
  instruction2.vy = unit(1);
  instruction2.size = unit(40);
}
function setUpInstruction3() {
  instruction3.x = width / 2;
  instruction3.y = height*1.3;
  instruction3.vx = unit(5);
  instruction3.vy = unit(1);
  instruction3.size = unit(40);
}
function setUpInstruction4() {
  instruction4.x = width / 2;
  instruction4.y = height*1.4;
  instruction4.vx = unit(5);
  instruction4.vy = unit(1);
  instruction4.size = unit(40);
}
function setUpInstruction5() {
  instruction5.x = width / 2;
  instruction5.y = height*1.5;
  instruction5.vx = unit(5);
  instruction5.vy = unit(1);
  instruction5.size = unit(40);
}
function setUpInstruction6() {
  instruction6.x = width / 2;
  instruction6.y = height*1.6;
  instruction6.vx = unit(5);
  instruction6.vy = unit(1);
  instruction6.size = unit(40);
}
function setUpInstruction7() {
  instruction7.x = width / 2;
  instruction7.y = height*1.7;
  instruction7.vx = unit(5);
  instruction7.vy = unit(1);
  instruction7.size = unit(40);
}
function setUpInstruction8() {
  instruction8.x = width / 2;
  instruction8.y = height*1.8;
  instruction8.vx = unit(5);
  instruction8.vy = unit(1);
  instruction8.size = unit(40);
}

function setupCircles() {
  //set circle values in range of the user's screen size
  //position circles seperated from one another
  //set circles in random positions away from each other

  //circle one - green - controller left
  circle1.x = width / 3;
  circle1.y = height / 4;
  circle1.size = width / 12;

  circle1.speed = unit(3);
  circle1.vx = random(circle1.speed, -circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);

  //circle two - blue - controller right
  circle2.x = (width / 3) * 2;
  circle2.y = height / 4;
  circle2.size = width / 12;

  circle2.speed = unit(3);
  circle2.vx = random(circle2.speed, -circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

function setUpCircle3 () {
    //circle three - red - computer - attacking
    circle3.x = width / 2;
    circle3.y = height / 2;
    circle3.size = width / 16;

    circle3.speed = unit(4);
    circle3.vy = random(0, circle3.speed);
}

function draw() {
  background(0);
  wrap();


  //make attacking circle flash RED
  circle3.r = random(0, 176);

  // bullets move
  bullet1.x += bullet1.vx;
  bullet1.y += bullet1.vy;

  bullet2.x += bullet2.vx;
  bullet2.y += bullet2.vy;

  //check if bullets 1 and 2 are offscreen
  if (bullet1.x > width) {
    bullet1.fired = false;
  }
  if (bullet2.x > width) {
      bullet2.fired = false;
  }

  //check if bullet1 hits red circle3
  let d1 = dist(bullet1.x, bullet1.y, circle3.x, circle3.y);
  if (bullet1.fired && circle3.active && d1 < bullet1.size / 2 + circle3.size / 2) {
  // Stop the bullet
  bullet1.fired = false;
  // Kill the enemy
  circle3.active = false;
  }

  //check if bullet2 hits red circle3
  let d2 = dist(bullet2.x, bullet2.y, circle3.x, circle3.y);
  if (bullet2.fired && circle3.active && d2 < bullet2.size / 2 + circle3.size / 2) {
  // Stop the bullet
  bullet2.fired = false;
  // Kill the enemy
  circle3.active = false;
  }

  //bullet1 fired
  if (bullet1.fired) {
    ellipse(bullet1.x, bullet1.y, bullet1.size);
  }

  //set states *** CHANGE THESE TO WIN OR LOSE
  if (state === `title`) {
    titleStart();
  } else if (state === `instructionStart`) {
    instructionStart();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `love`) {
    love();
  } else if (state === `sadness`) {
    sadness();
  }

  //keyboard arrows controlling blue circle (circle2 and bullet2) movement
  if (keyIsDown(LEFT_ARROW)) {
      circle2.x -= keyboardControl.left;
    } else if (keyIsDown(RIGHT_ARROW)) {
      circle2.x += keyboardControl.right;
    } else if (keyIsDown(UP_ARROW)) {
      circle2.y -= keyboardControl.up;
    } else if (keyIsDown(DOWN_ARROW)) {
      circle2.y += keyboardControl.down;
    } else if (keyIsDown(SHIFT)) { //try SHIFT or command if this doesn't work
      bullet2.fired = true;
      bullet2.x = circle2.x;
      bullet2.y = circle2.y;
      bullet2.vx = bullet2.speed;
    }

//keyboard letters AWSD controlling green circle movement
if (keyIsPressed) {
    if (key == 'a') {
    circle1.x -= keyboardControl.left;;
    }
    else if (key == 'd') {
    circle1.x += keyboardControl.right;;
    }
    else if (key == 'w') {
    circle1.y -= keyboardControl.up;
    }
    else if (key == 's') {
    circle1.y += keyboardControl.down;
    }
    else if (key == 'q') {
    bullet1.fired = true;
    bullet1.x = circle1.x;
    bullet1.y = circle1.y;
    bullet1.vx = bullet1.speed;
    }
  }

}

function checkTitleOffScreen() {
  //check if the title has gone offscreen
  if (isTitleOffScreen(title)) {
    state = `instructionStart`;
  }
}

function isTitleOffScreen(title) {
  if (title.y < 0) {
    return true;
  } else {
    return false;
  }
}

//change this to lose
function checkOffScreen() {
  //check if the circles have gone off screen
  if (isOffScreen(circle1) || isOffScreen(circle2)) {
    state = `sadness`;
  }
}

function isOffScreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function titleStart() {
  push();
  checkTitleOffScreen();
  textSize(title.size);
  fill(random(0, 255), random(0, 255), random(0, 255));
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont("Luminari");
  stroke(50, 200, 50);
  strokeWeight(unit(0.9));

  title.y += -unit(2);
  title.size = title.size - unit(0.17);

  text(title.string, title.x, title.y);
  pop();

}

function instructionStart() {
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("Bradley Hand");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction1.size);
  instruction1.size = instruction1.size - unit(0.02);

  text(instruction.string, instruction.x, instruction.y);
  text(instruction1.string, instruction1.x, instruction1.y);
  text(instruction2.string, instruction2.x, instruction2.y);
  text(instruction3.string, instruction3.x, instruction3.y);
  text(instruction4.string, instruction4.x, instruction4.y);
  text(instruction5.string, instruction5.x, instruction5.y);
  text(instruction6.string, instruction6.x, instruction6.y);
  text(instruction7.string, instruction7.x, instruction7.y);
  text(instruction8.string, instruction8.x, instruction8.y);

  instruction.y += -unit(0.9);
  instruction1.y += -unit(0.9);
  instruction2.y += -unit(0.9);
  instruction3.y += -unit(0.9);
  instruction4.y += -unit(0.9);
  instruction5.y += -unit(0.9);
  instruction6.y += -unit(0.9);
  instruction7.y += -unit(0.9);
  instruction8.y += -unit(0.9);

  pop();
  // font options: Arial, Verdana, Trebuchet MS, Times New Roman, Didot, American Typewriter, Andale Mono, Courier, Bradley Hand, Luminari ~ Sans-serif, serif, Monospace, Cursive, Fantasy, Impact, Trattatello
}


function simulation() {
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(unit(64));
  fill(255, 100, 150);
  textAlign(CENTER, CENTER);
  text(`Love WINS!`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(unit(64));
  fill(0, 50, 150);
  textAlign(CENTER, CENTER);
  text(`:'(`, width / 2, height / 2);
  pop();
}

function move() {
  circle3.x += circle3.vx;
  circle3.y += circle3.vy;
}

function checkOffScreen() {
  //check if the circles have gone offscreen
  if (
    circle1.x < 0 ||
    circle1.x > width ||
    circle1.y < 0 ||
    circle1.y > height ||
    circle2.x < 0 ||
    circle2.x > width ||
    circle2.y < 0 ||
    circle2.y > height
  ) {
    state = `sadness`;
  }
}

function checkOverlap() {
  //check if the circles overlap
  //when they over lap, change state to love

  let d = dist(circle1.x, circle2.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    state = `love`;
  }
}

function wrap() {
  if (circle3.x > width || circle3.x < 0 || circle3.y > height || circle3.y < 0 ) {
    reset();
  }
}


function reset() {
  circle3.x = random(0, width);
  circle3.y = random(height/3, height);
}

function display() {
  //display circles
  push();
  fill(circle1.r, circle1.g, circle1.b);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(circle2.r, circle2.g, circle2.b);
  ellipse(circle2.x, circle2.y, circle2.size);

  // circle3 (red enemy)
  if (circle3.active) {
  fill(circle3.r, circle3.g, circle3.b);
  ellipse(circle3.x, circle3.y, circle3.size);
  }

  //draw bullets when fired
  if (bullet1.fired) {
    fill(bullet1.r, bullet1.g, bullet1.b);
    ellipse(bullet1.x, bullet1.y, bullet1.size);
  }
  if (bullet2.fired) {
    fill(bullet2.r, bullet2.g, bullet2.b);
    ellipse(bullet2.x, bullet2.y, bullet2.size);
  }
  pop();
}
///this is the function to get all values in relation to the user's screen//
function unit(u) {
  if (height >= width) {
    let unit = (height / width) * u;
    return unit;
  } else if (width >= height) {
    let unit = (width / height) * u;
    return unit;
  }
}

function mousePressed() {
  if (state === `title`) {
    state = `instructionStart`;
  }
  else if (state === `instructionStart`) {
    state = `simulation`;
  }
}
