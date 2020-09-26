/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bg = {
  r: 0,
  b: 0,
  g: 0
}
let circle ={
  x: 250,
  y: 250,
  size: 250
}

function setup() {
createCanvas(500, 500);
}


function draw() {
background(bg.r, bg.g, bg.b);

ellipse(circle.x, circle.y, circle.size);
}

function mousePressed() { // event handler = mousePressed
  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}
