/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let caterpillar ={
  x: 100,
  y: 250,
  segmentSize: 50
}

function setup() {
createCanvas(500, 500);
}


function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100);

  let x = caterpillar.x;
  let numSegments = 10; //how many segments you want to draw
  let segmentsDrawn = 0; // how many have been drawn

  while (segmentsDrawn < numSegments) { //while this is true do the next instructions
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 40;
    segmentsDrawn ++;
  }
}
