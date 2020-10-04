/**************************************************
Exercise 3: Love Actually

Alana DeVito

Click through title and instructions.
control two circles with 2 hands (can play with another person)
one person - arrows with ? as shooter
second person - awds with q as shooter

third circle moves around spastically and you have to shoot it
 __ maybe it shoots things too?


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

//set states
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if ( state === `love`) {
    love();

  }
  else if (state === `sadness`) {
    sadness();
  }
}

function checkOffScreen () {
  //check if the circles have gone off screen
  if (isOffScreen(circle1) || isOffScreen(circle2)) {
    state = `sadness`;
  }
}

function isOffScreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  }
  else {
    return false;
  }
}

function title() {
  push();
  textSize(unit(64));
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Love?`, width/2, height/2);
  pop();
}

function simulation() {
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function love() {
  push();
  textSize(unit(64));
  fill(255, 100, 150);
  textAlign(CENTER, CENTER);
  text(`Love!`, width/2, height/2);
  pop();
}

function sadness() {
  push();
  textSize(unit(64));
  fill(0, 50, 150);
  textAlign(CENTER, CENTER);
  text(`:'(`, width/2, height/2);
  pop();
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
      state = `sadness`;
    }
}

function checkOverlap() {
  //check if the circles overlap
  //when they over lap, change state to love

  let d = dist(circle1.x, circle2.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
  }
}

function display() {

  //display circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}

///this is the function to get all values in relation to the user's screen//
function unit(u) {
 if (height >= width){
  let unit = height/width * u;
 return unit;
}
else if (width >= height){
let unit = width/height * u
return unit;
}
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;

  }

}
