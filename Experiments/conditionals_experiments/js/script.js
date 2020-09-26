/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let circle ={
  x: 250,
  y: 250,
  size: 250,
  vx: 0, // velocity in x and y
  vy: 0, // moves up
  speed: 5
}

function setup() {
createCanvas(500, 500);
}


function draw() {
background(0);

if (mouseX < circle.x) {
  circle.vx = -circle.speed;
} else { ///must give the else
  circle.vx = circle.speed;
}

if (mouseY < circle.y) {
  circle.vy = -circle.speed;
} else {
  circle.vy = circle.speed;

}

circle.x += circle.vx;
circle.y += circle.vy;

ellipse(circle.x, circle.y, circle.size);

}
