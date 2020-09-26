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

push(); //save the styling (so the defaul settings)
  fill(255, 0, 0);
  stroke(0, 255, 255);
  strokeWeight(10);
  rect(100, 100, 100, 100);
pop(); //restores settings from push - note: dpo this around each shape 'style'

push();
  fill(0, 0, 255);
  rect(300,100,100,100);
pop();
}
