/**************************************************
Exercise 3: Love Actually

Alana DeVito

Click through title and instructions.
() added colour to circles and made flicker (maybe take flicker away and save for attacker?)
()added a third circle that will flicker red
() get title from other project and place in title area


control two circles with 2 hands (or can play with another person)
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
  speed: 0,
  r: 0,
  g: 255,
  b: 0

};

let circle2 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0,
  r: 0,
  g: 0,
  b: 255
};

let circle3 = {
  x: undefined,
  y: 0,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 0,
  r: 255,
  g: 0,
  b: 0
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


  //circle one - green - controller left
  circle1.x = width/3;
  circle1.y = height/2;
  circle1.size = width/10;

  circle1.speed = width/height*3;
  circle1.vx = random(circle1.speed,-circle1.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);


  //circle two - blue - controller right
  circle2.x = width/3 * 2;
  circle2.y = height/2;
  circle2.size = width/10;

  circle2.speed = width/height*3;
  circle2.vx = random(circle2.speed, -circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);


  //circle three - red - computer - attacking?  - eventually flashing red
  circle3.x = width/3 * 2;
  circle3.y = height/2;
  circle3.size = width/10;


  circle3.speed = width/height*3;
  circle3.vx = random(circle3.speed, -circle3.speed);
  circle3.vy = random(-circle3.speed, circle3.speed);
}


function draw() {
  background(0);

  //make circles flicker (must be in draw to make the flickering animation)
  circle1.g = random(50, 255);
  circle2.b = random(50, 255);
  circle3.r = random(50, 255);



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
  push();
    fill(circle1.r, circle1.g, circle1.b);
    ellipse(circle1.x, circle1.y, circle1.size);
    fill(circle2.r, circle2.g, circle2.b);
    ellipse(circle2.x, circle2.y, circle2.size);
  pop();
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
