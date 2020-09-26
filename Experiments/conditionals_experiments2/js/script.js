/**************************************************
Intermediate Drawing
Alana

Here is a description of this template p5 project.
**************************************************/

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255);

push();
  fill(255, 0, 0);
  rect(0,0, 100, 100);
pop();

push();
  translate(200, 100); ///moved the ORIGIN over 200 px. and down 100 px. // translate is good for 3D animation!
  fill(0, 255, 0);
  rect(0,0,100,100);
pop();

push();
  translate(0, 200); //because of push pop, translate is reset
  fill(0,0,255);
  rect(0,0,100,100);
pop();
}
