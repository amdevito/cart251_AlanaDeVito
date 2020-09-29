/**************************************************
DOdGing DOGS: Adventures of the White Squrriel

Dogs in park chase after the elusive white squirrel. Move the squirrel around the arrow keys to avoid the dogs and collect acorns. When you collect 6 acorns, you WIN! When a dog catches you, YOU LOSE.

**************************************************/

let bg;
let bgGameOver;
let angle = 0;
let keyboardControl = {
  left: 8,
  right: 8,
  up: 10,
  down: 10
}

//set squirrel object
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


//set acorns object
let acorn1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 2,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn2 = {
  x: -650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 5,
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
  speed: 6,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn5 = {
  x: -950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 1,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn6 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 7,
  image: 0,
  ax: 0,
  ay: 0
}

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

//Thank you to Madeline for helping me with some of this code!

//Contained dog spawn//
let randomDogSpawn = {
  min:575,
  max:770
}

//Score//
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

function preload() {
  squirrel.image = loadImage("assets/images/squirrel.png");
  squirrelWin.image = loadImage('assets/images/squirrel_youWin.jpg');
  bg = loadImage('assets/images/park.jpg');
  bgGameOver = loadImage('assets/images/squirrel_dead.jpg');
  acorn1.image = loadImage('assets/images/acorn1.png');
  acorn2.image = loadImage('assets/images/acorn2.png');
  acorn3.image = loadImage('assets/images/acorn1.png');
  acorn4.image = loadImage('assets/images/acorn2.png');
  acorn5.image = loadImage('assets/images/acorn1.png');
  acorn6.image = loadImage('assets/images/acorn2.png');
  dog1.image = loadImage('assets/images/dog1.png');
  dog2.image = loadImage('assets/images/dog2.png');
  dog3.image = loadImage('assets/images/dog3.png');
  dog4.image = loadImage('assets/images/dog4.png');
  dog5.image = loadImage('assets/images/dog3.png');


}

function setup() {

  createCanvas(1400, 800);

  dog1.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog1.vx = dog1.speed;

  dog2.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog2.vx = dog2.speed;

  dog3.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog3.vx = dog3.speed;

  dog4.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog4.vx = dog4.speed;

  dog5.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog5.vx = dog5.speed;

  //acorn movement set up//

  acorn1.vx = acorn1.speed;
  acorn2.vx = acorn2.speed;
  acorn3.vx = acorn3.speed;
  acorn4.vx = acorn4.speed;
  acorn5.vx = acorn5.speed;
  acorn6.vx = acorn6.speed;


  noCursor();
}

function draw() {
  background(bg);

  //dog movement
  // check for when dogs catch squirrel

  let d1 = dist(squirrel.x, squirrel.y, dog1.x, dog1.y);
  let d2 = dist(squirrel.x, squirrel.y, dog2.x, dog2.y);
  let d3 = dist(squirrel.x, squirrel.y, dog3.x, dog3.y);
  let d4 = dist(squirrel.x, squirrel.y, dog4.x, dog4.y);
  let d5 = dist(squirrel.x, squirrel.y, dog5.x, dog5.y);

  if (d1 < 75) {
    noLoop();
    background(bgGameOver);
  }
  if (d2 < 75) {
    noLoop();
    background(bgGameOver);
  }
  if (d3 < 75) {
    noLoop();
    background(bgGameOver);
  }
  if (d4 < 75) {
    noLoop();
    background(bgGameOver);
  }
  if (d5 < 75) {
    noLoop();
    background(bgGameOver);
  }

  // check for when squirrel gets acorn
  let d6 = dist(squirrel.x, squirrel.y, acorn1.x, acorn1.y);
  let d7 = dist(squirrel.x, squirrel.y, acorn2.x, acorn2.y);
  let d8 = dist(squirrel.x, squirrel.y, acorn3.x, acorn3.y);
  let d9 = dist(squirrel.x, squirrel.y, acorn4.x, acorn4.y);
  let d10 = dist(squirrel.x, squirrel.y, acorn5.x, acorn5.y);
  let d11 = dist(squirrel.x, squirrel.y, acorn6.x, acorn6.y);

//when acorn is 'caught' it resets way outside of the screen, so that it is no longer in play.
  if (d6 < 50) {
    score = score + 1;
    acorn1.x = -60000;
  }

  if (d7 < 50) {
    score = score + 1;
    acorn2.x = -60000;
  }

  if (d8 < 50) {
    score = score + 1;
    acorn3.x = -60000;
  }

  if (d9 < 50) {
    score = score + 1;
    acorn4.x = -60000;
  }

  if (d10 < 50) {
    score = score + 1;
    acorn5.x = -60000;
  }

  if (d11 < 50) {
    score = score + 1;
    acorn6.x = -60000;
  }

  //CIRCLES FOR SCORE TALLY//

if (score >= 1){
  fill(94, 69, 35);
  circle(scoreDots.x,scoreDots.y,scoreDots.radius);
}
if (score >= 2){
  circle(scoreDots.x + scoreDots.offset1,scoreDots.y,scoreDots.radius);
}
if (score >= 3){
  circle(scoreDots.x + scoreDots.offset2,scoreDots.y,scoreDots.radius);
}
if (score >= 4){
  circle(scoreDots.x + scoreDots.offset3,scoreDots.y,scoreDots.radius);
}
if (score >= 5){
  circle(scoreDots.x + scoreDots.offset4,scoreDots.y,scoreDots.radius);
}
if (score >= 6){
  noLoop();
  imageMode(CENTER);
  image(squirrelWin.image, squirrelWin.x, squirrelWin.y, 300, 254);
}

  //keyboard arrows controlling squirrel movement
  if (keyIsDown(LEFT_ARROW)) {
    squirrel.x -= keyboardControl.left;
  } else if (keyIsDown(RIGHT_ARROW)) {
    squirrel.x += keyboardControl.right;
  } else if (keyIsDown(UP_ARROW)) {
    squirrel.y -= keyboardControl.up;
  } else if (keyIsDown(DOWN_ARROW)) {
    squirrel.y += keyboardControl.down;
  }

  //constrain squirrel movement inside canvas, and below trees
 squirrel.x = constrain(squirrel.x, 0, width);
 squirrel.y = constrain(squirrel.y, 550, 775);

  //dogs movement
  dog1.x = dog1.x + dog1.vx;
  dog1.y = dog1.y + dog1.vy;

  if (dog1.x < 0) {
    dog1.x = 1400;
    dog1.y = random(575, 770);
  }

  dog2.x += dog2.vx;
  dog2.y += dog2.vy;

  if (dog2.x < 0) {
    dog2.x = 1400;
    dog2.y = random(575, 770);
  }

  dog3.x += dog3.vx;
  dog3.y += dog3.vy;

  if (dog3.x < 0) {
    dog3.x = 1400;
    dog3.y = random(575, 770);
  }

  dog4.x += dog4.vx;
  dog4.y += dog4.vy;

  if (dog4.x < 0) {
    dog4.x = 1400;
    dog4.y = random(575, 770);
  }

  dog5.x += dog5.vx;
  dog5.y += dog5.vy;

  if (dog5.x < 0) {
    dog5.x = 1400;
    dog5.y = random(575, 770);
  }

  //acorn movement
  acorn1.x += acorn1.vx;
  if (acorn1.x > width) {
    acorn1.x = 0;
  }

  acorn2.x += acorn2.vx;
  if (acorn2.x > width) {
    acorn2.x = 0;
  }

  acorn3.x += acorn3.vx;
  if (acorn3.x > width) {
    acorn3.x = 0;
  }

  acorn4.x += acorn4.vx;
  if (acorn4.x > width) {
    acorn4.x = 0;
  }

  acorn5.x += acorn5.vx;
  if (acorn5.x > width) {
    acorn5.x = 0;
  }

  acorn6.x += acorn6.vx;
  if (acorn6.x > width) {
    acorn6.x = 0;
  }

  ///squirrel

  push(); //must do push and pop so that the squirrel doesn't leave trail on screen
  imageMode(CENTER);
  image(squirrel.image, squirrel.x, squirrel.y, 150, 50);
  pop();

  //acorns move across bottom of the screen.
  push();
  imageMode(CENTER);
  image(acorn1.image, acorn1.x, acorn1.y, 30, 50);
  pop();

  push();
  imageMode(CENTER);
  image(acorn2.image, acorn2.x, acorn2.y, 30, 50);
  pop();

  push();
  imageMode(CENTER);
  image(acorn3.image, acorn3.x, acorn3.y, 30, 50);
  pop();

  push();
  imageMode(CENTER);
  image(acorn4.image, acorn4.x, acorn4.y, 30, 50);
  pop();

  push();
  imageMode(CENTER);
  image(acorn5.image, acorn5.x, acorn5.y, 30, 50);
  pop();

  push();
  imageMode(CENTER);
  image(acorn6.image, acorn6.x, acorn6.y, 30, 50);
  pop();



  //DOGS ///

  push();
  imageMode(CENTER);
  image(dog1.image, dog1.x, dog1.y, 175, 143);
  pop();

  push();
  imageMode(CENTER);
  image(dog2.image, dog2.x, dog2.y, 200, 174); //randomize y location (for all dogs)
  pop();

  push();
  imageMode(CENTER);
  image(dog3.image, dog3.x, dog3.y, 100, 86);
  pop();


  push();
  imageMode(CENTER);
  image(dog5.image, dog5.x, dog5.y, 100, 86);
  pop();

  push();
  imageMode(CENTER);
  image(dog4.image, dog4.x, dog4.y, 135, 138);
  pop();


}
