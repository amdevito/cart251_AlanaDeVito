/**************************************************
DOdGing DOGS: Adventures of the White Squrriel
**************************************************/
/// NEXT STEPS: make acrons move across bottom of screen (left to right), then rotate as they move
//make dogs move across screen (right to left) and rock back and forth as they do.
//then ake logic that stops game when dog hits squirrel - or eventually 'releases acorns' back to bottom of the screen.(maybe acrons dont need to move, they can just spin in place? and then float to top of screen when squirrel touches them, and they drop back down if dog touches squirrel


// dogs come in from the right at different distances outside of the frame so they are staggerd. so x= 1200 + randomNumber(1200, 1300, y position is randomNumber(height/2, height) midway to bottom
let bg;
let squirrelImage = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0
}
let acorn1 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 2,
  ax: 0,
  ay: 0
}
let acorn2 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 3,
  ax: 0,
  ay: 0
}
let dog1 = {
  x: 1200,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  ax: 0,
  ay: 0
}
let dog2 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  ax: 0,
  ay: 0
}
let dog3 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  ax: 0,
  ay: 0
}
let dog4 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  ax: 0,
  ay: 0
}


function preload() {
  squirrelImage = loadImage("assets/images/squirrel.png");
  bg = loadImage('assets/images/park.jpg');
  acorn1 = loadImage('assets/images/acorn1.png');
  acorn2 = loadImage('assets/images/acorn2.png');
  dog1 = loadImage('assets/images/dog1.png');
  dog2 = loadImage('assets/images/dog2.png');
  dog3 = loadImage('assets/images/dog3.png');
  dog4 = loadImage('assets/images/dog4.png');

}

function setup() {

  createCanvas(1400, 800);

  dog1.y = random(50, 500);
  dog1.vx = dog1.speed;

  dog2.y = random(50, 500);
  dog2.vx = dog2.speed;

  dog3.y = random(50, 500);
  dog3.vx = dog3.speed;

  dog4.y = random(50, 500);
  dog4.vx = dog4.speed;

//acorn set up//

  acorn1.vx = acorn1.speed;

  acorn2.vx = acorn2.speed;


  noCursor();
}

function draw() {
background(bg);

//dog movement -- next need to replace dog's x and y numbers with dog1.x, dog1.y
 //etc..

dog1.x = dog1.x + dog1.vx;
dog1.y = dog1.y + dog1.vy;

if (dog1.x < width) {
  dog1.x = 1200;
  dog1.y = random(50, 500);
}

dog2.x += dog2.vx;
dog2.y += dog2.vy;

if (dog2.x > width) {
  dog2.x = 0;
  dog2.y = random(50, 500);
}

dog3.x += dog3.vx;
dog3.y += dog3.vy;

if (dog3.x > width) {
  dog3.x = 0;
  dog3.y = random(50, 500);
}

dog4.x += dog4.vx;
dog4.y += dog4.vy;

if (dog4.x > width) {
  dog4.x = 0;
  dog4.y = random(50, 500);
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


///squirrel

push(); //must do push and pop so that the squirrel doesnt leave trail on screen
  imageMode(CENTER);
  image(squirrelImage, mouseX, mouseY, 150, 50);
pop();

//acrons rool across bottom of the screen. when squirrel touches ones it floats to the top of the screen (like keeping score.)
push();
imageMode(CENTER);
image(acorn1, 10, 775, 30, 50);
pop();


push();
imageMode(CENTER);
image(acorn2, 200, 775, 30, 50);
pop();

push();
imageMode(CENTER);
image(acorn1, 400, 775, 30, 50);
pop();


push();
imageMode(CENTER);
image(acorn2, 600, 775, 30, 50);
pop();

push();
imageMode(CENTER);
image(acorn1, 800, 775, 30, 50);

pop();

push();
imageMode(CENTER);
image(acorn2, 1000, 775, 30, 50);
pop();

push();
imageMode(CENTER);
image(acorn1, 1200, 775, 30, 50);
pop();


push();
imageMode(CENTER);
image(acorn2, 1400, 775, 30, 50);

pop();

//DOGS /// have all of their stateing positions be different so that they are staggared as they mmove accross the screen.

push();
imageMode(CENTER);
image(dog1, dog1.x, dog1.y, 175, 143);
pop();

push();
imageMode(CENTER);
image(dog2, 1400, 600, 200, 174);//randomize location (for all dogs)
pop();

push();
imageMode(CENTER);
image(dog3, 1200, 650, 100, 86);
pop();


push();
imageMode(CENTER);
image(dog3, 1000, 600, 100, 86);
pop();

push();
imageMode(CENTER);
image(dog4, 690, 660, 135, 138);
pop();


}


///once i need to get the key up and key down function to move the squirrel
// function keyPressed() {
//   if (keyCode === UP_ARROW) {
    //x++
