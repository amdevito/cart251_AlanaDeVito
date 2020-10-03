/**************************************************
Functions
Alana DeVito

Functions Experiments
**************************************************/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
  r: 0,
  g: 0,
  b: 0
}

// setup()
//
// Description of setup() goes here.
function setup() { //function definition - 'function and then the name of the function' // function names are in blue
  createCanvas(500, 500); //call Function, inside brackets are the arguements for the function.

  circle.r = random(0, 255);
  circle.g = random(0, 255);
  circle.b = random(0, 255);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  move(); /// moves the circle
  wrap(); /// wraps the cicle (makes it start at the beginning of the screen)
  display(); //displays the circle

}

function move() { /// modularity - the code is in blocks
  //reusability because the functions are working all over the place//
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function display(){
  fill(circle.r, circle.g, circle.b);
  ellipse(circle.x, circle.y, circle.size);
}

function reset() { //defining our own function
  circle.x = 0;
  circle.vx += 1;
  circle.vy += - 0.25;
  circle.size += 5;

  circle.r = random(0, 255);
  circle.g = random(0, 255);
  circle.b = random(0, 255);
}

function mousePressed() {
reset(); // calling the made function
}
