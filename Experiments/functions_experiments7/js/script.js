/**************************************************
Functions
Alana DeVito

Functions Experiments 7
keyboard input
**************************************************/
let bg = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);

//65 is A
if (keyIsDown(65))  {
  rectMode(CENTER);
  rect(width/2, height/2, 250, 250);
}
}
