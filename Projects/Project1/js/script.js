/**************************************************
Alana DeVito
Project 1:
Tumbling through Madness: The Great White Squirrel Caper of 2020

**************************************************/
//Set up objects for game play

//OPENING:
//enter Screen//After clicking to continue music should start with the title screen.//make this screen early internet style? photo?// or just in american typewriter?
let enterScreen = {
  string: `Error 404: Gender Not Found. \n Please click to Continue.`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//title//
let title = {
  string: `Tumbling Through Madness: \n The Great White Squirrel Caper of 2020`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//instructions//
let instruction1 = {
  string: `Level ONE: \n It all Started like any Other Day... \n HOW TO PLAY: Use the arrow keys to control the white squirrel. \n Collect 6 acorns and save them in your home tree. \n Be careful! The dogs are out to play today!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction2 = {
  string: `Level TWO: \n Let the Madness Begin... \n HOW TO PLAY: Use the arrow keys to control the white squirrel. \n Collect 6 loaves of homemade sourdough bread and save them in your home tree. \n Be careful! \n The Anti-Mask Protestors have taken over the park and are spreading the Virus! \n Studies haven't shown that white squirrels are immune yet...`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction3 = {
  string: `Level THREE: \n Take Back the Park! \n HOW TO PLAY: \n Team Up with black squirrel and fight off the growing swarms of WASPS! \n Use the arrow keys to control the white squirrel and hit SHIFT to shoot acorns. \n Use AWSD keys to control the black squirrel and 'Q' to shoot. \n Careful, you only have 3 acorns to shoot each! \n Fight off the WASPS for 90 seconds and they just might retreat!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//GENERAL OBJECTS

//keyboard control
let keyboardControl = {
  left: 8,
  right: 8,
  up: 10,
  down: 10
}

//backdrops
//level one background
let bg1;
//level two background
let bg2;
//level three background
let bg3;
//all level game over
let bgGameOver;

//WHITE SQUIRREL
//set squirrel objects
let squirrel = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

let squirrelWin = {
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

//BLACK SQUIRREL
let squirrel2 = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

//black and white squirrel win, final screen
let squirrelBothWin = {
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}


//SCORE DOTS//
let score = 0;
let scoreDots = {
  x: 450,
  y: 340,
  radius: 50,
  offset1: 55,
  offset2: 110,
  offset3: 165,
  offset4: 220,
  r: 94,
  g: 69,
  b: 35
}

//LEVEL specific OBJECTS

//LEVEL1:
//Acorns to Collect
let acorn1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn2 = {
  x: -650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 10,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn3 = {
  x: -750,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn4 = {
  x: -850,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn5 = {
  x: -950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn6 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}

//DOGS
///setting dog objects
let dog1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let dog2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let dog3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let dog4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let dog5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained dog spawn//
let randomDogSpawn = {
  min:575,
  max:770
}


//SCORE//
let score = 0;
let scoreDots = {
  x: 450,
  y: 340,
  radius: 50,
  offset1: 55,
  offset2: 110,
  offset3: 165,
  offset4: 220,
  color:{
    r: 94,
    g: 69,
    b: 35
  }
}

//LEVEL 2:
//Bread to Collect
let bread1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread2 = {
  x: -650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 10,
  image: 0,
  ax: 0,
  ay: 0
}
let bread3 = {
  x: -750,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread4 = {
  x: -850,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}
let bread5 = {
  x: -950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread6 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}

//Anti-maskers
///setting anti-masker character objects
let antiMasker1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker6 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained AntiMasker spawn//
let randomAntiMaskSpawn = {
  min:575,
  max:770
}

//Covid Virus' that shoot from anti-maskers
let covid1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid2 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid3 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid4 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid5 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid6 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}

//LEVEL 3:
//Anti-maskers
///setting anti-masker character objects
let wasp1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp6 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained wasp spawn//
let randomWaspSpawn = {
  min:575,
  max:770
}


//acorn Bullets (3 each for BS and WS) -- start with brown dots, change to the images later?
let acornBullet1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet2 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet3 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet4 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet5 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet6 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}

let state = 'enter'; //different states: enter>title>level1>gameover>win>level2>level3

//Set up Functions
function setUpEnterScreen() {//static in center of screen
  enterScreen.x = width / 2;
  enterScreen.y = height;
  enterScreen.vx = unit(5);
  enterScreen.vy = unit(1);
  enterScreen.size = unit(30);
}


function setUpTitle() {
  title.x = width / 2;
  title.y = height;
  title.vx = unit(5);
  title.vy = unit(1);
  title.size = unit(60);
}
function setUpInstruction1() {
  instruction1.x = width / 2;
  instruction1.y = height;
  instruction1.vx = unit(5);
  instruction1.vy = unit(1);
  instruction1.size = unit(30);
}
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

function enterStart() { //****need to update this to current game play
  push();
  mousePressed();
  background(0);
  textSize(enterScreen.size);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont("American Typewriter");
  stroke(50, 200, 50);
  strokeWeight(unit(0.9));

  text(enterScreen.string, enterScreen.x, enterScreen.y);
  pop();

}

function titleStart() { //****need to update this to current game play
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

function instructionStart1() { /// need to update this to current game play**
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("American Typewriter");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction1.size);
  instruction1.size = instruction1.size - unit(0.02);

  text(instruction1.string, instruction1.x, instruction1.y);

  instruction1.y += -unit(0.9);



  pop();
  // font options: Arial, Verdana, Trebuchet MS, Times New Roman, Didot, American Typewriter, Andale Mono, Courier, Bradley Hand, Luminari ~ Sans-serif, serif, Monospace, Cursive, Fantasy, Impact, Trattatello
}

function instructionStart2() { /// need to update this to current game play**
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("American Typewriter");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction2.size);
  instruction2.size = instruction2.size - unit(0.02);

  text(instruction2.string, instruction2.x, instruction2.y);

  instruction2.y += -unit(0.9);


  pop();

}

function instructionStart3() { /// need to update this to current game play**
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("American Typewriter");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction3.size);
  instruction3.size = instruction3.size - unit(0.02);

  text(instruction3.string, instruction3.x, instruction3.y);

  instruction3.y += -unit(0.9);


  pop();
}
///function to convert units to adjust to the size of the user's window
function unit(u) {
  if (height >= width) {
    let unit = (height / width) * u;
    return unit;
  } else if (width >= height) {
    let unit = (width / height) * u;
    return unit;
  }
}

function simulation1() {
  move1();
  checkOverlap();
  display();
}
function simulation2() {
  move2();
  checkOverlap();
  display();
}
function simulation3() {
  move3();
  checkOverlap();
  display();
}

function move1() { ///*** NEED TO MAKE this dogs moving and acorns moving
  circle3.vx = map(noise(circle3.x), 0, 1, 0, 25);
  circle3.vy = map(noise(circle3.y), 0, 1, 0, 15);

  circle4.vx = map(noise(circle4.x), 0, 1, 0, 25);
  circle4.vy = map(noise(circle4.y), 0, 1, 0, 15);

  circle3.x += circle3.vx;
  circle3.y += circle3.vy;

  circle4.x += circle4.vx;
  circle4.y += circle4.vy;
}

function move2() { ///*** NEED TO MAKE THIS antimasker's movement and shooting covid and rolling bread (like acorns before)
  circle3.vx = map(noise(circle3.x), 0, 1, 0, 25);
  circle3.vy = map(noise(circle3.y), 0, 1, 0, 15);

  circle4.vx = map(noise(circle4.x), 0, 1, 0, 25);
  circle4.vy = map(noise(circle4.y), 0, 1, 0, 15);

  circle3.x += circle3.vx;
  circle3.y += circle3.vy;

  circle4.x += circle4.vx;
  circle4.y += circle4.vy;
}

function move3() { /// need to make this wasps that start at 4 moving wild and increses to 6 and then 8, fast and with perlin noise movement
  circle3.vx = map(noise(circle3.x), 0, 1, 0, 25);
  circle3.vy = map(noise(circle3.y), 0, 1, 0, 15);

  circle4.vx = map(noise(circle4.x), 0, 1, 0, 25);
  circle4.vy = map(noise(circle4.y), 0, 1, 0, 15);

  circle3.x += circle3.vx;
  circle3.y += circle3.vy;

  circle4.x += circle4.vx;
  circle4.y += circle4.vy;
}

function checkOverlap1() { //check if dogs hit squirrel or squirrel collects acorns

  let d5 = dist(circle1.x, circle1.y, circle3.x, circle3.y);
  if (d5 < circle1.size / 2 + circle3.size / 2) {
    state = `sadness`;
  }
  let d6 = dist(circle2.x, circle2.y, circle3.x, circle3.y);
  if (d6 < circle2.size / 2 + circle3.size / 2) {
    state = `sadness`;
  }
  let d7 = dist(circle1.x, circle1.y, circle4.x, circle4.y);
  if (d7 < circle1.size / 2 + circle4.size / 2) {
    state = `sadness`;
  }
  let d8 = dist(circle2.x, circle2.y, circle4.x, circle4.y);
  if (d8 < circle2.size / 2 + circle4.size / 2) {
    state = `sadness`;
  }
}

function checkOverlap2() { //check if squirrel collects bread, check if covid hits squirrel, check if anti-masker hits squirrel

  let d5 = dist(circle1.x, circle1.y, circle3.x, circle3.y);
  if (d5 < circle1.size / 2 + circle3.size / 2) {
    state = `sadness`;
  }
  let d6 = dist(circle2.x, circle2.y, circle3.x, circle3.y);
  if (d6 < circle2.size / 2 + circle3.size / 2) {
    state = `sadness`;
  }
  let d7 = dist(circle1.x, circle1.y, circle4.x, circle4.y);
  if (d7 < circle1.size / 2 + circle4.size / 2) {
    state = `sadness`;
  }
  let d8 = dist(circle2.x, circle2.y, circle4.x, circle4.y);
  if (d8 < circle2.size / 2 + circle4.size / 2) {
    state = `sadness`;
  }
}

function checkOverlap3() { //check if wasp hits white squirrel or black squirrel, check if acornBullets hit wasp.

  let d5 = dist(circle1.x, circle1.y, circle3.x, circle3.y);
  if (d5 < circle1.size / 2 + circle3.size / 2) {
    state = `sadness`;
  }
  let d6 = dist(circle2.x, circle2.y, circle3.x, circle3.y);
  if (d6 < circle2.size / 2 + circle3.size / 2) {
    state = `sadness`;
  }
  let d7 = dist(circle1.x, circle1.y, circle4.x, circle4.y);
  if (d7 < circle1.size / 2 + circle4.size / 2) {
    state = `sadness`;
  }
  let d8 = dist(circle2.x, circle2.y, circle4.x, circle4.y);
  if (d8 < circle2.size / 2 + circle4.size / 2) {
    state = `sadness`;
  }
}


function love() { ///**change to win1 - white squirrel with acorns (also one with bread if time)
  push();
  textSize(unit(64));
  fill(255, 100, 150);
  textAlign(CENTER, CENTER);
  text(`Love WINS!`, width / 2, height / 2);
  pop();
}
function love2() { ///**change to win2 - white and black squirrel win
  push();
  textSize(unit(64));
  fill(255, 100, 150);
  textAlign(CENTER, CENTER);
  text(`Love WINS!`, width / 2, height / 2);
  pop();
}

function sadness() { /// ** change to lose with squirrel_dead image
  push();
  textSize(unit(30));
  fill(0, 50, 150);
  textAlign(CENTER, CENTER);
  text(`Sometimes love is not enough. YOU LOSE.`, width / 2, height / 2);
  pop();
}

//clicking through instrucitons and levels, changing state
function mousePressed() {
  if (state === `enter`) {
    state = `title`;
  } else if (state === `title`) {
    state = `instruction1Start`;
  } else if (state === `instruction1Start`) {
    state = `simulation1`;
  } else if (state === `instruction2Start`) {
    state = `simulation2`;
  } else if (state === `instruction3Start`) {
    state = `simulation3`;
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

//preload images for background and characters
function preload() {
  //backgrounds
  bg1 = loadImage('assets/images/park.jpg');//morning_gorlitzer
  bg2 = loadImage('assets/images/park1.jpg');//afternoon_mont royal
  bg3 = loadImage('assets/images/park2.jpg');//evening_trinity bellewoods
  bgGameOver = loadImage('assets/images/squirrel_dead.jpg');

  //win images
  squirrelWin.image = loadImage('assets/images/squirrel_youWin.jpg');
  squirrelBothWin.image = loadImage('assets/images/squirrelBothWin.jpg');//

  //squirrel characters
  squirrel.image = loadImage("assets/images/squirrel.png");
  squirrel2.image = loadImage("assets/images/squirrel2.png");//

  //level one, acorns to collet
  acorn1.image = loadImage('assets/images/acorn1.png');
  acorn2.image = loadImage('assets/images/acorn2.png');
  acorn3.image = loadImage('assets/images/acorn1.png');
  acorn4.image = loadImage('assets/images/acorn2.png');
  acorn5.image = loadImage('assets/images/acorn1.png');
  acorn6.image = loadImage('assets/images/acorn2.png');

  //level one, dogs attacking
  dog1.image = loadImage('assets/images/dog1.png');
  dog2.image = loadImage('assets/images/dog2.png');
  dog3.image = loadImage('assets/images/dog3.png');
  dog4.image = loadImage('assets/images/dog4.png');
  dog5.image = loadImage('assets/images/dog3.png');

  //level two, bread to collect
  bread1.image = loadImage('assets/images/bread.png');//
  bread2.image = loadImage('assets/images/bread.png');//
  bread3.image = loadImage('assets/images/bread.png');//
  bread4.image = loadImage('assets/images/bread.png');//
  bread5.image = loadImage('assets/images/bread.png');//
  bread6.image = loadImage('assets/images/bread.png');//


  //level two, anti-maskers
  antiMasker1.image = loadImage('assets/images/antiMasker1.png');//
  antiMasker2.image = loadImage('assets/images/antiMasker2.png');//
  antiMasker3.image = loadImage('assets/images/antiMasker3.png');//
  antiMasker4.image = loadImage('assets/images/antiMasker4.png');//
  antiMasker5.image = loadImage('assets/images/antiMasker2.png');//
  antiMasker6.image = loadImage('assets/images/antiMasker4.png');//

  //level three, WASPS
  wasp1.image = loadImage('assets/images/wasp.png');//
  wasp2.image = loadImage('assets/images/wasp.png');//
  wasp3.image = loadImage('assets/images/wasp.png');//
  wasp4.image = loadImage('assets/images/wasp.png');//
  wasp5.image = loadImage('assets/images/wasp.png');//
  wasp6.image = loadImage('assets/images/wasp.png');//

  //level three, acorns to throw
  acornBullet1.image = loadImage('assets/images/acorn1.png');
  acornBullet2.image = loadImage('assets/images/acorn1.png');
  acornBullet3.image = loadImage('assets/images/acorn1.png');
  acornBullet4.image = loadImage('assets/images/acorn2.png');
  acornBullet5.image = loadImage('assets/images/acorn2.png');
  acornBullet6.image = loadImage('assets/images/acorn2.png');

}

// group setup()


function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpEnterScreen1();
  setUpEnterScreen2();
  setUpTitle();
  setUpInstruction();
  setUpInstruction1();
  setUpInstruction2();
  setUpInstruction3();

}

// draw()

function draw() {

  //STATES

  //different states: enter>title>level1>gameover>win>level2>level3
  if (state === `enter`) {
    enterStart();
  } else if (state === `title`) {
    titleStart();
  } else if (state === `instruction1Start`) {
    instruction1Start();
  } else if (state === `instruction2Start`) {
    instruction2Start();
  } else if (state === `instruction3Start`) {
    instruction3Start();
  } else if (state === `simulation1`) { //start level one
    simulation1();
  } else if (state === `win1`) {
    love();
  } else if (state === `simulation2`) { //start level two
    simulation2();
  } else if (state === `win2`) {
    love();
  } else if (state === `simulation3`) { //start level three
    simulation3();
  } else if (state === `win3`) {
    love();
  } else if (state === `lose`) {
    sadness();
  }

  //KEYBOARD CONTROLS

  //keyboard arrows controlling WHITE SQUIRREL and acorn bullet movement **NEED //TO CHANGE THIS to appropriate variables ie to squirrel
  if (keyIsDown(LEFT_ARROW)) {
      circle2.x -= keyboardControl.left;
    } else if (keyIsDown(RIGHT_ARROW)) {
      circle2.x += keyboardControl.right;
    } else if (keyIsDown(UP_ARROW)) {
      circle2.y -= keyboardControl.up;
    } else if (keyIsDown(DOWN_ARROW)) {
      circle2.y += keyboardControl.down;
    } else if (keyIsDown(SHIFT)) {
      bullet2.fired = true;
      bullet2.x = circle2.x;
      bullet2.y = circle2.y;
      bullet2.vx = bullet2.speed;
    }

  //keyboard letters AWSD controlling BLACK SQUIRREL movement **NEED TO CHANGE TO appropriate variables circle TO squirrel2
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

  ////

}
