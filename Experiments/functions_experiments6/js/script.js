/**************************************************
Functions
Alana DeVito

Functions Experiments6
States
**************************************************/

let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
  speed: 0
};

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight);

    circle.x = 0;
    circle.y = height/2;
    circle.vx = height/width*5;
    circle.vy = height/width;
    circle.size = width/height*50;
    circle.speed = width/height*2;

    textSize(circle.size);
    textAlign(CENTER, CENTER);
     // height/width gives one unit of the canvas size. Multiply by the value you want//
}

function draw() {
  background(0);

  //Title
  fill(255);
  text(`Life.`, width/2, height/2);

  //Animation
  circle.x += circle.vx;
  // circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);

  //Ending
  fill(127);
  text(`It's all over.`, width/2, height/2);
}
// //function unit(u) = {
//   let unit = height/width * u;
//  return unit;
// }
