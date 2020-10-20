/**************************************************
Template p5 project
Alana DeVito
Exercise 4: Age of Aquariums aka. Enby MicroAgression Simulation

Click your mouse to clear away the microaggressions and recieve a validating message.

If you wait for the heart to shrink, another message will appear.

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
  sizeW: 400,
  sizeH: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  image: 0,
  active: true,
}; // maybe have another game to choose options of trans and other flags?

let supportToken = {
  x: 0,
  y: 0,
  size: 50,
  vx: 1,
  vy: 1,
  speed: 2,
  image: 0,
  active: false,
};

let supportToken2 = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
  image: 0,
  active: false,
};

//load all images for the characters
function preload() {
  //level one, acorns to collet
  nbHeart.image = loadImage("assets/images/NB_heart.png");
  supportToken.image = loadImage("assets/images/supportToken.png");
  supportToken2.image = loadImage("assets/images/supportToken2.png");

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

  noCursor();
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
    active: true,
  };
  return agros;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0);

  for (let i = 0; i < microAgros.length; i++) {
    /// microAgros.length is the specific array variable that returns how many items are currently in the array
    if (microAgros[i].active) {
      moveAgros(microAgros[i]);
      displayAgros(microAgros[i]);
    }

    nbHeart.sizeW = nbHeart.sizeW - 0.1;
    nbHeart.sizeH = nbHeart.sizeH - 0.1;

    if (nbHeart.sizeW <= 0) {
      supportToken2.active = true;
      noLoop();
    }
  }

  if (supportToken2.active === true) {
    displaySupportToken2();
  }

  displayNbHeart();
  // displaySupportToken();
  // moveSupportToken(supportToken);

  if (supportToken.active === true) {
    displaySupportToken();
    moveSupportToken();
  }
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

// function moveSupportToken() {
//   // Choose whether to change direction
//   let change = random(0, 1);
//   if (change < 0.05) {
//     supportToken.vx = random(-supportToken.speed, supportToken.speed);
//     supportToken.vy = random(-supportToken.speed, supportToken.speed);
//   }
//
//   // Move the supportToken
//   supportToken.x = supportToken.x + supportToken.vx;
//   supportToken.y = supportToken.y + supportToken.vy;
// }

//
// Displays the provided agross on the canvas
function displayAgros(agros) {
  push();
  imageMode(CENTER);
  image(agros.image, agros.x, agros.y, 200, 200);
  pop();
}

function displaySupportToken() {
  push();
  imageMode(CENTER);
  image(supportToken.image, mouseX - 15, mouseY, 300, 300);
  pop();
}

function displaySupportToken2() {
  push();
  imageMode(CENTER);
  image(supportToken2.image, mouseX - 15, mouseY, 300, 300);
  pop();
}

function displayNbHeart() {
  push();
  imageMode(CENTER);
  image(nbHeart.image, mouseX, mouseY, nbHeart.sizeW, nbHeart.sizeH);
  pop();
}

function removeNbHeart() {
  push();
  imageMode(CENTER);
  image(nbHeart.image, 10000, 10000, 0, 0);
  noLoop();
  pop();
}

///make below clear micro agressions, and support token floats away (like the og fish movement)
function mousePressed() {
  supportToken.active = true;

  for (let i = 0; i < microAgros.length; i++) {
    microAgros[i].active = false;
  }
}
