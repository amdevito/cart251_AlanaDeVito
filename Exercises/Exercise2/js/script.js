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
  ax: 0,
  ay: 0
}
let acorn2 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0
}
let dog1 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0
}
let dog2 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0
}
let dog3 = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
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
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  createCanvas(1400, 800);
}

function draw() {
background(bg);

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

//DOGS /// have all of their stateing positions be different so that they are staggared asthe mmove accross the screen.

push();
imageMode(CENTER);
image(dog2, 1400, 600, 200, 174);//randomize these (for all dogs)
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
image(dog4, 690, 660, 175, 178);
pop();


push();
imageMode(CENTER);
image(dog1, 500, 600, 200, 174);
pop();


}


///once i need to get the key up and key down function to move the squirrel
// function keyPressed() {
//   if (keyCode === UP_ARROW) {
    //x++
