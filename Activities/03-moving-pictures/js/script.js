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
  acceleration: 3.5
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

  stroke(0, 255, 0);
  strokeWeight(.7);

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

ellipse(circle1.x, circle1.y, circle1.size);

  circle1.size = width / 4;
  circle1.size = circle1.size + 20;
  circle1.size = circle1.size * 0.93;


}

/***

backgroundShade = backgroundShade + 2;
strokeWeight(3);
stroke(0, 255, 0);
circleSize = circleSize * 0.93; // keeps moving because program keeps looping around to it
circleY = circleY * 1.01;
circleX += circleSpeed; // short hand for circleX = circleX + circleSpeed
circleSpeed = circleSpeed + circleAcceleration;
ellipse(circleX, circleY, circleSize);



/*********
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
*****/


/***
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

// draw()
//
// Description of draw() goes here.
function draw() { /// writing 1/60th a second 'draw loop' or 'update loop'
//background(mouseX, mouseY, 0);
  rectMode(CENTER);
  fill(mouseY / 3, mouseX / 2, mouseY / 10);
  rect(width / 2, height / 2, mouseX / 2, mouseY / 2);//(location determined by mouse, and size determined by mouse)

}

let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 400; //state variable before set up
let circleSpeed = -4; // have the negative in the variable not in the arguement
let circleAcceleration = 0.25;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  background(0);
}

// draw()
//
// Description of draw() goes here.
function draw() { /// writing 1/60th a second 'draw loop' or 'update loop'
//background(backgroundShade + 2); //activate these and you lose the ripple effect but get the backgroun changing from black to white and the green circle shoots off into the distance
//backgroundShade = backgroundShade + 2;
strokeWeight(3);
stroke(0, 255, 0);
circleSize = circleSize * 0.93; // keeps moving because program keeps looping around to it
circleY = circleY * 1.01;
circleX += circleSpeed; // short hand for circleX = circleX + circleSpeed
circleSpeed = circleSpeed + circleAcceleration;
ellipse(circleX, circleY, circleSize);
}

***/

/**************************************************
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255,
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade);

  circle.x = circle.x + circle.speed;
  circle.x = constrain(circle.x, 0, width);


  circle.size = map(mouseY, height, 0, 20, 500);

  circle.fill = map(circle.x, 0, width, 0, 255); //acts like 'scale' in MAXMSP
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);
  ****/
