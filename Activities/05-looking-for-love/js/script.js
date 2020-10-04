/**************************************************
Activity 05: Looiking for Love
Alana DeVito
Playing with Functions
**************************************************/
let circle1 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0
};

let circle2 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0
};

let state = `title`; //Can be title, love, or sadness.

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
setupCircles();
}

function setupCircles() {
  //set circle values in range of the user's screen size
  //position circles seperated from one another
  //set circles in random positions away from each other
  circle1.x = width/3;
  circle1.y = height/2;
  circle1.size = width/10;

  //why can't I get map to work here?
  circle1.speed = width/height*3;
  // circle1.speed = constrain(circle1.speed, 0, width);


  circle1.vx = random(circle1.speed,-circle1.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);

  circle2.x = width/3 * 2;
  circle2.y = height/2;
  circle2.size = width/10;

//why can't I get map to work here?
  circle2.speed = width/height*3;
  // circle2.speed = constrain(circle2.speed, 0, width);

  circle2.vx = random(circle2.speed, -circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if ( state === `love`) {

  }
  else if (state === `sadness`) {

  }
}

function title() {
  textSize(height/width*64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Love?`, width/2, height/2);
}

function simulation () {
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function move() {
  //move the circles
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;

    circle2.x += circle2.vx;
    circle2.y += circle2.vy;
}

function checkOffScreen() {

  //check if the circles have gone offscreen
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    //SAD ENDING
  }
}

function checkOverlap() {
  //check if the circles overlap

  let d = dist(circle1.x, circle2.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    // Love ENDING!
  }
}

function display() {

  //display circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}
