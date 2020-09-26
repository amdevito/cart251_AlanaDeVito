/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let circle ={
  x: 250,
  y: 250,
  size: 100,
  vx: 0,// velocity
  vy: 0,
  ax: 0, // acceleration in x and y
  ay: 0, // moves up
  axe: 0.25, //acceleration
  maxSpeed: 5
}

function setup() {
createCanvas(500, 500);
}


function draw() {
background(0);

if (mouseX < circle.x) {
  circle.ax = -circle.axe;
} else { ///must give the else
  circle.ax = circle.axe;
}

if (mouseY < circle.y) {
  circle.ay = -circle.axe;
} else {
  circle.ay = circle.axe;
}

circle.vx += circle.ax; // velocity adding acceleration
circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
circle.vy += circle.ay;
circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

circle.x += circle.vx; // position adding velocity
circle.y += circle.vy;

ellipse(circle.x, circle.y, circle.size);

} /// circle 'floats around' following the mouse, accelerating and deccelerating and then spins around the mouse when it 'catches' it. // some nice physics simulation
