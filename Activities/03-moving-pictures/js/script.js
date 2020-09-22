/**************************************************
Activity 3: Moving Pictures
Alana DeVito


**************************************************/
let circle1 = {
  x: undefined,
  y: undefined,
  size: undefined,
  speed: .01,
  acceleration: 3.5 //plus moves it right, negative moves left
}
let circle2 = {
  x: undefined,
  y: undefined,
  size: undefined,
  speed: .01,
  acceleration: 3.5
}
let circle3 = {
  x: undefined,
  y: undefined,
  size: undefined,
  speed: .01,
  acceleration: 3.5,
  fill: (170, 170, 170, 170)
}
let circle4 = {
  x: undefined,
  y: undefined,
  size: undefined,
  speed: .01,
  acceleration: 3.5
}
let bg = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 170
}

function setup() {
  createCanvas(windowWidth,windowHeight);
background(bg.red, bg.green, bg.blue, bg.alpha);

}

function draw(){

  stroke(0, bg.green , bg.blue, bg.alpha);
  strokeWeight(1);


  circle3.x = width / 3;
  circle3.y = height / 1.8;

  circle3.x = circle3.x + circle3.speed;
  circle3.y = circle3.y + circle3.speed;

  circle3.size = width / 1.5;
  circle3.size = circle3.size +3;

fill(circle3.fill);

  circle(circle3.x, circle3.y, circle3.size);

  circle1.x = width/2;
  circle1.y = height/2;


//circles move diagonally downwards
  circle1.x = circle1.x + circle1.speed;
  circle1.y = circle1.y + circle1.speed;

  circle1.speed = circle1.speed + circle1.acceleration;

  fill(bg.red, bg.green, bg.blue, bg.alpha);

  bg.red = bg.red + mouseX;
  bg.red = map(bg.red, width, height, 0, 255);
  bg.green = bg.green + mouseY;
  bg.green = constrain(bg.green, 0, 255);
  bg.alpha = bg.alpha + mouseX;

circle(circle1.x, circle1.y, circle1.size);

  circle1.size = width / 4;
  circle1.size = circle1.size + 20;
  circle1.size = circle1.size * 0.93;

//circle 2


  circle2.x = width/5;
  circle2.y = height/2;

//circles move diagonally downwards
  circle2.x = circle2.x + circle2.speed;
  circle2.y = circle2.y + circle2.speed;

  circle2.speed = circle2.speed + circle2.acceleration;

  fill(bg.red, bg.green, bg.blue, bg.alpha);

  bg.red = bg.red + mouseX;
  bg.red = map(bg.red, width, height, 0, 255);
  bg.green = bg.green + mouseY;
  bg.green = constrain(bg.green, 0, 255);
  bg.alpha = bg.alpha + mouseX;

ellipse(circle2.x, circle2.y, circle2.size);

  circle2.size = width / 4;
  circle2.size = circle2.size + 20;
  circle2.size = circle2.size * 0.93;


}
