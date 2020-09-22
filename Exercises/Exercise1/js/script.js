/**************************************************
Activity 3: Moving Pictures
Alana DeVito

Circles with ripples moving across the canvas.
Ripples change colour as you swirl your mouse around the screen.
Floating boxes (composed of 2 shapes- square and rectagles) trace lines and change colour with swirling mouse as well.
Circles grow and shrink as they move across the screen.

Objectives completed:
1. 3 different shapes (circle, square, rectangle) composing 8 animated forms.
2. Movement of shapes across canvas.
3. Size changes - circles change from small to large and back. Rectangles
trace different sizes of smaller rectangles.
4. All shapes change colour as the mouse swirls.
5. Map and constrain used to modulate colour changes and rectangle sizes scaled to design requirements.
6. Colour flashes and changes and shape sizes responds to mouseX and mouseY.

**************************************************/

//creating all the JavaScript objects used in the scene
let rect1 = {
  x: 400,
  y: 50,
  sizeX: 50,
  sizeY: 50,
};
let rect2 = {
  x: 127,
  y: 700,
  sizeX: 90,
  sizeY: 90,
};
let rect3 = {
  x: 680,
  y: 175,
  sizeX: 50,
  sizeY: 50,
};
let rect4 = {
  x: 720,
  y: 500,
  sizeX: 30,
  sizeY: 30,
};
let circle1 = {
  x: 400,
  y: 400,
  size: 1,
  speed: 0.1,
  acceleration: 1, //plus moves it right, negative moves left
};
let circle2 = {
  x: 100,
  y: 400,
  size: 1,
  speed: 0.01,
  acceleration: 1,
};
let circle3 = {
  x: 170,
  y: 300,
  size: 350,
  speed: 0.001,
  acceleration: 3.5,
  fill: (170, 170, 170, 170),
};
let circle4 = {
  x: 480,
  y: 700,
  size: 350,
  speed: 0.0001,
  acceleration: 3.5,
  fill: (170, 170, 255, 170),
};
let bg = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 170,
};

//set canvas size, background and frame rate
function setup() {
  createCanvas(800, 800);
  background(bg.red, bg.green, bg.blue, bg.alpha);
  frameRate(15);
}

//draw the shapes
function draw() {
  stroke(bg.red, bg.green, bg.blue, bg.alpha);
  strokeWeight(2);

  //draw rect1
  rectMode(CENTER);
  stroke(0, mouseY, 155);
  mouseY = constrain(mouseY, 0, 255);

  //interactive floating rectangles. A type of 'kelidoscope' effect
  rect(rect1.x, rect1.y, rect1.sizeX, rect1.sizeY);
  rect1.sizeX = rect1.sizeX + mouseX;
  rect1.sizeX = map(rect1.sizeX, 0, 800, 0, 200);
  rect1.sizeY = rect1.sizeY + mouseY;
  rect1.sizeY = map(rect1.sizeY, 0, 800, 0, 100);

  //draw rect2
  rectMode(CENTER);
  stroke(mouseY, 0, 155);
  mouseY = constrain(mouseY, 0, 255);
  rect(rect2.x, rect2.y, rect2.sizeX, rect2.sizeY);

  //interactive floating rectangles. A type of 'kelidoscope' effect
  rect2.sizeX = rect2.sizeX + mouseX;
  rect2.sizeX = map(rect2.sizeX, 0, 800, 0, 120);
  rect2.sizeY = rect2.sizeY + mouseY;
  rect2.sizeY = map(rect2.sizeY, 0, 800, 0, 180);

  //draw rect3
  rectMode(CENTER);
  stroke(mouseY, 0, 155);
  mouseY = constrain(mouseY, 0, 255);
  rect(rect3.x, rect3.y, rect3.sizeX, rect3.sizeY);

  //interactive floating rectangles. A type of 'kelidoscope' effect
  rect3.sizeX = rect3.sizeX + mouseX;
  rect3.sizeX = map(rect3.sizeX, 0, 800, 0, 70);
  rect3.sizeY = rect3.sizeY + mouseY;
  rect3.sizeY = map(rect3.sizeY, 0, 800, 0, 70);

  //draw rect4
  rectMode(CENTER);
  stroke(0, mouseY, 155);
  mouseY = constrain(mouseY, 0, 255);
  rect(rect4.x, rect4.y, rect4.sizeX, rect4.sizeY);

  //interactive floating rectangles. A type of 'kelidoscope' effect
  rect4.sizeX = rect4.sizeX + mouseX;
  rect4.sizeX = map(rect4.sizeX, 0, 800, 0, 70);
  rect4.sizeY = rect4.sizeY + mouseY;
  rect4.sizeY = map(rect4.sizeY, 0, 800, 0, 50);

  //draw circle1 - lower right circle
  //circles move diagonally downwards, stop at right side, bottom
  stroke(mouseY, 0, 155);
  mouseY = map(mouseY, 0, 800, 0, 255);

  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x, 400, 680);

  circle1.y = circle1.y + circle1.speed;
  circle1.y = constrain(circle1.y, 400, 800);

  circle1.speed = circle1.speed + circle1.acceleration;

  fill(255, mouseX, 0, 100);

  //Controlling the stroke colours changing along with the mouse swirls.
  bg.red = bg.red + mouseY;
  bg.red = map(bg.red, width, height, 0, 155);
  bg.green = bg.green + mouseY;
  bg.green = constrain(bg.green, 0, 155);
  bg.alpha = bg.alpha + mouseX;

  circle(circle1.x, circle1.y, circle1.size);

  circle1.size = circle1.size + 5;
  circle1.size = constrain(circle1.size, 1, 270);

  //draw circle 2 - lower left circle
  //circles move diagonally downwards, stop at middle bottom
  stroke(0, mouseY, 155);
  mouseY = constrain(mouseY, 0, 255);

  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x, 100, 410);

  circle2.y = circle2.y + circle2.speed;
  circle2.y = constrain(circle2.y, 100, 800);

  circle2.speed = circle2.speed + circle2.acceleration;

  fill(255, mouseX, 0, 100);

  bg.green = bg.green + mouseY;
  bg.green = constrain(bg.green, 0, 255);

  circle(circle2.x, circle2.y, circle2.size);

  circle2.size = circle2.size + 5;
  circle2.size = constrain(circle2.size, 1, 270);

  //circle 3 - upper left
  // circles moving across from left, get small, big and continue sideways

  stroke(0, 0, mouseY);
  mouseY = map(mouseY, 0, 800, 0, 255);
  circle3.x = circle3.x + circle3.speed;
  circle3.x = constrain(circle3.x, 0, 380);

  circle3.y = circle3.y + circle3.speed;
  circle3.y = constrain(circle3.y, 0, 300);

  circle3.speed = circle3.speed + 0.02;

  circle3.size = circle3.size - 3;
  circle3.size = constrain(circle3.size, -100, 1000); // mix of constrain and size being changed by a negative number causes the animation quality of getting bigger then smaller and big again

  fill(255, bg.green, bg.blue, 100);

  circle(circle3.x, circle3.y, circle3.size);

  //circle 4 - upper right /// circles moving across from right, get small, big and continue sideways

  stroke(0, mouseY, 0);
  mouseY = map(mouseY, 0, 800, 0, 255);
  circle4.x = circle4.x + circle4.speed;
  circle4.x = constrain(circle4.x, 0, 680);

  circle4.y = circle4.y + circle4.speed;
  circle4.y = constrain(circle4.y, 0, 300);

  circle4.speed = circle4.speed + 0.02;

  circle4.size = circle4.size - 3;
  circle4.size = constrain(circle4.size, -100, 1000); // mix of constrain and size being changed by a negative number causes the animation quality of getting smaller than bigger

  fill(255, bg.green, bg.blue, 100);

  circle(circle4.x, circle4.y, circle4.size);
}
