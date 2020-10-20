/**************************************************
Template p5 project
Alana DeVito
Exercise 4: Age of Aquariums
**************************************************/
"use strict";

let microAgros = []; ///empty array []
let microAgrosSize = 11;

let agroImages = [];
//let agros;

//your cursor
let nbHeart = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
  image: 0,
}; // maybe have another game to choose options of trans and other flags?

let supportToken = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
  image: 0,
};

//load all images for the characters
function preload() {
  //level one, acorns to collet
  nbHeart.image = loadImage("assets/images/NB_heart.png");
  supportToken.image = loadImage("assets/images/supportToken.png");

  for (let i = 0; i < 11; i++) {
    agroImages[i] = loadImage(`assets/images/agro-${i}.png`);
  }
}

function setup() {
  createCanvas(1000, 1000);

  // Create four agros, positioned randomly
  //name of the array, microAgros [number that array index takes the info]

  // this is done in preload?
  for (let i = 0; i < microAgrosSize; i++) {
    let agros = createAgros(
      random(0, width),
      random(0, height),
      random(agroImages)
    );
    microAgros[i] = agros;
  }
}

//
// Creates a new JavaScript Object describing a microAgro tag and returns it
function createAgros(x, y, agroImage) {
  let agros = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    image: agroImage,
  };
  return agros;
}

function createSupportToken(x, y) {
  let supportToken = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    image: 0,
  };
  return supportToken;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0);

  for (let i = 0; i < microAgros.length; i++) {
    /// microAgros.length is the specific array variable that returns how many items are currently in the array
    moveAgros(microAgros[i]);
    displayAgros(microAgros[i]);
  }
  displayNbHeart();
  displaySupportToken();
}

//
// Chooses whether the provided agros changes direction and moves it
function moveAgros(agros) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    agros.vx = random(-agros.speed, agros.speed);
    agros.vy = random(-agros.speed, agros.speed);
  }

  // Move the agros
  agros.x = agros.x + agros.vx;
  agros.y = agros.y + agros.vy;

  // Constrain the agros to the canvas
  agros.x = constrain(agros.x, 0, width);
  agros.y = constrain(agros.y, 0, height);
}

function moveSuppotToken(supportToken) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    supportToken.vx = random(-supportToken.speed, supportToken.speed);
    supportToken.vy = random(-supportToken.speed, supportToken.speed);
  }

  // Move the supportToken
  supportToken.x = supportToken.x + supportToken.vx;
  supportToken.y = supportToken.y + supportToken.vy;

  //no constrain, float away off screen
}

//
// Displays the provided agross on the canvas
function displayAgros(agros) {
  push();
  imageMode(CENTER);
  console.log(agros.image, agros.x, agros.y);
  image(agros.image, agros.x, agros.y, 200, 200);
  pop();
}

function displaySupportToken() {
  push();
  imageMode(CENTER);
  image(supportToken.image, supportToken.x, supportToken.y, 10, 50);
  pop();
}

function displayNbHeart() {
  push();
  imageMode(CENTER);
  image(nbHeart.image, mouseX, mouseY, 100, 50);
  pop();
}

///make below clear micro agressions, and support token floats away (like the og fish movement)
function mousePressed() {
  let supportToken = createSupportToken(mouseX, mouseY);
}
