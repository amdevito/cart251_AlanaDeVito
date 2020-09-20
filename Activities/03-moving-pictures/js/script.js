/**************************************************
Activity 3: Moving Pictures
Alana DeVito

** ask***
**************************************************/

function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
}
let bg = {
  red: 0,
  green: 0,
  blue: 0
};
let circle1 = {
  x: 0,
  y: windowHeight / 2,
  size: windowWidth / 4,
  speed: 1, // 255 / 30 =7650 , so the colour spectrum divided by half the frame speed
  //color: (1, 119, 181, 170) //try this colour for the circles at some point
};
let circle2 = {
  x: windowWidth,
  y: windowHeight / 2,
  size: windowWidth / 6,
  speed: -1, // 255 / 30 =7650 , so the colour spectrum divided by half the frame speed
  //colour: (1, 119, 181)
};

/// ask why cant i use the p5.js variables in the Javascrip objects?
function draw() {
background(bg.red, bg.green, bg.blue);
bg.red = bg.red + windowWidth / 1020;
bg.red = constrain(bg.red, 0, 255);

fill(1, 119, 181, 170);
ellipse(circle1.x, circle1.y, circle1.size);
circle1.x = circle1.x + circle1.speed;
circle1.x = constrain(circle1.x, 0, windowWidth / 2);
circle1.size = circle1.size + 1;
circle1.size = constrain(circle1.size, windowWidth / 4, windowWidth * 2);

fill(1, 119, 181);
ellipse(circle2.x,circle2.y,circle2.size);
circle2.x = circle2.x + circle2.speed;
circle2.x = constrain(circle2.x, windowWidth / 2, windowWidth);
circle2.size = circle2.size + 0.5;
circle2.size = constrain(circle2.size, windowWidth / 6, windowWidth / 2);
  //circle1.x = circle1.x + windowWidth / 7650;
  //circle1.size = circle1.size + windowWidth /7650;
//fill(1, 119, 181);

//map(circle1.speed, 0, windowWidth / 60, 0, 255);


};
//(map(0, windowWidth / 60, 0, 255)
