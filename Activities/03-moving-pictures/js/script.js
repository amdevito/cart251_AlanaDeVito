/**************************************************
Activity 3: Moving Pictures
Alana DeVito


**************************************************/
let circle1 = {
  x: 400,
  y: 400,
  size: 8,
  speed: 0.01,
  acceleration: 0.2 //plus moves it right, negative moves left
}
let circle2 = {
  x: 100,
  y: 400,
  size: 8,
  speed: 0.01,
  acceleration: 0.2
}
let circle3 = {
  x: 100,
  y: 200,
  size: 450,
  speed: .001,
  acceleration: 3.5,
  fill: (170, 170, 170, 170)
}
let circle4 = {
  x: 700,
  y: 200,
  size: 450,
  speed: .001,
  acceleration: -3.5,
  fill: (170, 170, 255, 170)
}
let bg = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 170
}

function setup() {
  createCanvas(800,800);
  background(bg.red, bg.green, bg.blue, bg.alpha);
  frameRate(20);
}

function draw(){

  stroke(bg.red, bg.green, bg.blue, bg.alpha);
  strokeWeight(2);

//circle1
//circles move diagonally downwards, stop in middle bottom
stroke(mouseY, 0, 255);
mouseY = constrain(mouseY, 0, 400, 0, 255);

  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x, 400, 680);

  circle1.y = circle1.y + circle1.speed;
  circle1.y = constrain(circle1.y, 400, 800);

  circle1.speed = circle1.speed + circle1.acceleration;

  fill(255, bg.green, bg.blue, 170);

  bg.red = bg.red + mouseY;
  bg.red = map(bg.red, width, height, 0, 155);
  bg.green = bg.green + mouseY;
  bg.green = constrain(bg.green, 0, 155);
  bg.alpha = bg.alpha + mouseX;

circle(circle1.x, circle1.y, circle1.size);

circle1.size = circle1.size + 5;
circle1.size = constrain(circle1.size, 8, 300);


//circle 2
//circles move diagonally downwards, stop in middle bottom

  stroke(0, mouseY, 155);
  mouseY = constrain(mouseY, 0, 800, 0, 255);


  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x, 100, 400);

  circle2.y = circle2.y + circle2.speed;
  circle2.y = constrain(circle2.y, 100, 800);

  circle2.speed = circle2.speed + circle2.acceleration;

  fill(255, bg.green, bg.blue, 100);

  bg.green = bg.green + mouseY;
  bg.green = constrain(bg.green, 0, 255);
  bg.alpha = bg.alpha + mouseY; /// makes the rings have a ripple effect

circle(circle2.x, circle2.y, circle2.size);

circle2.size = circle2.size + 5;
circle2.size = constrain(circle2.size, 8, 300);


//circle 3 /// circles moving across from left, get small, big and continue sideways

  stroke(0, 155, mouseY);
  mouseY = constrain(mouseY, 0, 800, 0, 255);
  circle3.x = circle3.x + circle3.speed;
  circle3.x = constrain(circle3.x, 0, 800);

  circle3.y = circle3.y + circle3.speed;
  circle3.y = constrain(circle3.y, 0, 300);

  circle3.speed = circle3.speed + .02;

  circle3.size = circle3.size - 3;
  circle3.size = constrain(circle3.size, -200, 1000); // mix of constrain and size being changed by a negative number causes the animation quality

  fill(circle3.fill);

  circle(circle3.x, circle3.y, circle3.size);

}
