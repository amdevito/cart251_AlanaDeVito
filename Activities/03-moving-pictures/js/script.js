/**************************************************
Activity 3: Moving Pictures
Alana DeVito

**************************************************/
let bg = {
  red: 0,
  green: 0,
  blue: 0
};
let circle1 = {
  x: 0,
  y: windowHeight / 2,
  size: windowWidth / 4,
  speed: windowWidth / 7650, // 255 / 30 =7650 , so the colour spectrum divided by half the frame speed
  colour: (1, 119, 181, 170) //try this colour for the circles at some point
};
let circle2 = {
  x: windowWidth,
  y: windowWidth / 2,
  size: windowHeight / 6,
  speed: windowWidth / 7650, // 255 / 30 =7650 , so the colour spectrum divided by half the frame speed
  //colour: (1, 119, 181)
};

function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
}

function draw() {
background(bg.red, bg.green, bg.blue);
bg.red = bg.red + windowWidth / 7650;
circle(circle1.x + windowWidth / 7650, circle1.y, circle.size + windowWidth /7650);
fill(1, 119, 181, 170);

//map(circle1.speed, 0, windowWidth / 60, 0, 255);


}
//(map(0, windowWidth / 60, 0, 255)
