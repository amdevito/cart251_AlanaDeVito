/**************************************************
Intermediate Drawing
Alana

Here is a description of this template p5 project.
**************************************************/
let angle = 0;
let rectScale = 0;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(170);

push();
fill(255,0,0);
rectMode(CENTER);
translate(width/2,height/2); //moves origin to center
//rotate(radians(45));
rotate(angle);
scale(rectScale);//scale to different size
rect(0,0,100,100);
//rect(width/2,height/2,250,100,100); this gave a cooool weird unexpected result with a rectangle with 2 circlular ends

pop();

angle += 1; //spins on the origin
rectScale = rectScale + 0.01
}
