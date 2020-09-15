/**************************************************
02-draw-an-alien project
Alana DeVito
First practice activity drawing an alien using Javascript

**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 480);
  background(230, 119, 230, 80);
  noStroke();


}

// draw()
//
// Description of draw() goes here.
function draw() {
  fill(200);//lighter
  ellipse(320, 460, 300, 260) //body
  fill(170);//darker
  ellipse(320, 260, 190, 280);//head
  circle(320, 250, 210)//ocular space
  ellipse(320, 200, 230, 190);
  fill(0);
  circle (280, 258, 80);//main eye
  circle (375, 258, 80);//main eye
  fill(191, 255, 0);//neon green
  ellipse(280, 258, 10, 40);//iris
  ellipse(375, 258, 10, 40);//iris
  fill(0);
  ellipse(280, 280, 5, 15);//pupil
  ellipse(375, 280, 5, 15);//pupil
  ellipse(320, 320, 5, 20);//nose hole
  ellipse(340, 320, 5, 20);//nose hole


}
