/**************************************************
Functions
Alana DeVito

Functions Experiments 7
Automated Movement - jittery, animated, random behavior
**************************************************/

let circle = {
  x: 0,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  circle.x = width/2;
  circle.y = height/2;
  circle.size = width/height*100;
  circle.speed = width/height*2;
}

function draw () {
  background(0);

  let change = random();
  if (change < 0.05) {
      circle.vx = random(-circle.speed, circle.speed);
      circle.vy = random(-circle.speed, circle.speed);
  }


  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);

}
