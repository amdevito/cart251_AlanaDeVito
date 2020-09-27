/**************************************************
DOdGing DOGS: Adventures of the White Squrriel
**************************************************/

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
  image(squirrelImage, mouseX, mouseY);
pop();

//acrons rool across bottom of the screen. when squirrel touches ones it floats to the top of the screen (like keeping score.)
push();
imageMode(CENTER);
image(acorn1, 10, 700);
pop();


push();
imageMode(CENTER);
image(acorn2, 200, 700);
pop();

push();
imageMode(CENTER);
image(acorn1, 400, 700);
pop();


push();
imageMode(CENTER);
image(acorn2, 600, 700);
pop();

push();
imageMode(CENTER);
image(acorn1, 800, 700);
pop();


push();
imageMode(CENTER);
image(acorn2, 1000, 700);
pop();

push();
imageMode(CENTER);
image(acorn1, 1200, 700);
pop();


push();
imageMode(CENTER);
image(acorn2, 1400, 700);
pop();

//DOGS

push();
imageMode(CENTER);
image(dog1, 1400, 500);//randomize these (for all dogs)
pop();

push();
imageMode(CENTER);
image(dog2, 1200, 500);
pop();


push();
imageMode(CENTER);
image(dog3, 1000, 500);
pop();

push();
imageMode(CENTER);
image(dog4, 600, 500);
pop();

push();
imageMode(CENTER);
image(dog2, 400, 500);
pop();


push();
imageMode(CENTER);
image(dog1, 200, 500);
pop();


}
///next rolling acorns


///once i need to get the key up and key down function to move the squirrel
// function keyPressed() {
//   if (keyCode === UP_ARROW) {
    //x++
