/**************************************************
Functions
Alana DeVito

Functions Experiments5
Text text text text text
**************************************************/

let hello = {
  string: `Adventures of the White Squirrel`,
  x: width/2,
  y: height/2,
  vx: height/width*5,
  vy: height/width
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  textAlign(CENTER, CENTER);
  textSize(width/20);
  textStyle(BOLD);

  fill(random(0, 255),random(0,255), random(0,255));
  stroke(50, 200, 50);
  strokeWeight(width/height*4);

  text(`Adventures of the White Squirrel`, width/2, height/2); //(text in ``, x, y)
}
// //function unit(u) = {
//   let unit = height/width * u;
//  return unit;
// }
