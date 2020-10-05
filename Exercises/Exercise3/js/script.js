/**************************************************
Exercise 3: Love Actually

Alana DeVito

Click through title and instructions.
(x) added colour to circles and made flicker (maybe take flicker away and save for attacker?)
(x)added a third circle that will flicker red
(x) get title from other project and place in title area
() add instructions - make seperate function and variable and call this when the title moves past half of the screen


control two circles with 2 hands (or can play with another person)
one person - arrows with ? as shooter
second person - awds with q as shooter

third circle moves around spastically and you have to shoot it
 __ maybe it shoots things too?


**************************************************/
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

let circle3 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0,
  r: 255,
  g: 0,
  b: 0,
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
  string: `Don't let the flashing red circle touch YOU!`,
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
  string: `START THE GAME`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let state = `title`; //Can be title, love, or sadness.

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  setupCircles();
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
  instruction1.size = unit(30);
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
  circle1.y = height / 2;
  circle1.size = width / 10;

  circle1.speed = (width / height) * 3;
  circle1.vx = random(circle1.speed, -circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);

  //circle two - blue - controller right
  circle2.x = (width / 3) * 2;
  circle2.y = height / 2;
  circle2.size = width / 10;

  circle2.speed = (width / height) * 3;
  circle2.vx = random(circle2.speed, -circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);

  //circle three - red - computer - attacking?  - eventually flashing red
  circle3.x = (width / 3) * 2;
  circle3.y = height / 2;
  circle3.size = width / 10;

  circle3.speed = (width / height) * 3;
  circle3.vx = random(circle3.speed, -circle3.speed);
  circle3.vy = random(-circle3.speed, circle3.speed);
}

function draw() {
  background(0);

  //make circles flicker (must be in draw to make the flickering animation)
  circle1.g = random(50, 255);
  circle2.b = random(50, 255);
  circle3.r = random(50, 255);

  //set states
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
  text(`Love!`, width / 2, height / 2);
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
  //move the circles
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;

  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
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

function display() {
  //display circles
  push();
  fill(circle1.r, circle1.g, circle1.b);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(circle2.r, circle2.g, circle2.b);
  ellipse(circle2.x, circle2.y, circle2.size);
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
