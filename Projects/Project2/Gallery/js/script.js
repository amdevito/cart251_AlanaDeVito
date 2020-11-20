/**************************************************
Exercise 7 : Progress report

1. digiCanvases on gallery walls are animated gifs x
2. Gifs/digiCanvases when clicked take you to that sound installation. x
3. Gallery Patrons are moving around the gallery
4. When you hover over that Patron, you are taken into the hyperlink narrative

need to make canvases clickable? check overlap and mouse press?
**************************************************/
"use strict";

//let patrons = [];

//Patrons

let personLongHair = {
  x: 100,
  y: 340,
  vx: 0.08,
  vy: 0.08,
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  sizeX: 0,
  sizeY: 0,
  image: 0,
  ax: 0,
  ay: 0,
  speed: 0.08,
  active: false,
};

let personShortHair = {
  x: 100,
  y: 340,
  vx: 0.08,
  vy: 0.08,
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  sizeX: 0,
  sizeY: 0,
  image: 0,
  ax: 0,
  ay: 0,
  speed: 0.08,
  active: false,
};

let childParent = {
  x: 100,
  y: 340,
  vx: 0.08,
  vy: 0.08,
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  sizeX: 0,
  sizeY: 0,
  image: 0,
  ax: 0,
  ay: 0,
  speed: 0.08,
  active: false,
};

let sonicSign = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

let digiCanvas1 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
  active: false,
};

let digiCanvas2 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
  active: false,
};

let digiCanvas3 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
  active: false,
};

// let digiCanvases = [];

// let gifs = [];

let galleryImage;

function preload() {
  galleryImage = loadImage(`assets/images/gallery_render.png`);

  //Gallery sign
  sonicSign.image = loadImage("assets/images/theSonicShop.gif");

  //load animated, clickable  digiCanvases
  digiCanvas1.image = loadImage("assets/images/digiCanvas1.gif");
  digiCanvas2.image = loadImage("assets/images/digiCanvas2.gif");

  //load patron pictures
  personLongHair.image = loadImage("assets/images/patron0.png");
  personShortHair.image = loadImage("assets/images/patron1.png");
  childParent.image = loadImage("assets/images/patron2.png");
}

function setup() {
  createCanvas(1125, 725);
  setUpCanvases();
  setUpPatrons();
  setUpSign();
}

// draw()
//
function draw() {
  background(0);
  // image(
  //   personLongHair.image,
  //   personLongHair.x,
  //   personLongHair.y,
  //   personLongHair.sizeX,
  //   personLongHair.sizey
  // );

  //place gallery image on screen
  imageMode(CENTER);
  image(galleryImage, width / 2, height / 2, width / 2 + 400, height / 2 + 200);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  image(
    digiCanvas1.image,
    digiCanvas1.x,
    digiCanvas1.y,
    digiCanvas1.sizeX,
    digiCanvas1.sizeY
  );
  rotate(0.03, 0); // tilt the gif slightly to place in digiCanvas properly.
  image(
    //put into displayGallery function
    digiCanvas2.image,
    digiCanvas2.x,
    digiCanvas2.y,
    digiCanvas2.sizeX,
    digiCanvas2.sizeY
  );

  simulation(); // this may work once the values are iin
}
//

function setUpSign() {
  sonicSign.x = width / 2 - 230;
  sonicSign.y = height / 2 - 270;
}

//need to assign values here to make things appear
function setUpPatrons() {
  //because values are scaled in display numbers so in set up must be larger for location and movement
  //divided by 0.1 because scale multiplies every element in display by 0.1, making it smaller.
  personLongHair.minX = width / 2 - 300;
  personLongHair.maxX = width / 2 - 185;
  personLongHair.minY = height / 2 + 80;
  personLongHair.maxY = height / 2 + 30;

  personLongHair.sizeX = 0; //relation to original size
  personLongHair.sizeY = 0;

  personLongHair.x = random(personLongHair.minX, personLongHair.maxX);
  personLongHair.y = random(personLongHair.minY, personLongHair.maxY);
  personLongHair.vx = personLongHair.speed;
  personLongHair.vy = personLongHair.speed;

  //place patron personShortHair in gallery
  personShortHair.minX = width - 350;
  personShortHair.maxX = width - 165;
  personShortHair.minY = height / 2 + 80;
  personShortHair.maxY = height / 2 + 30;

  personShortHair.sizeX = 0; //relation to original size
  personShortHair.sizeY = 0;

  personShortHair.x = random(personShortHair.minX, personShortHair.maxX);
  personShortHair.y = random(personShortHair.minY, personShortHair.maxY);
  personShortHair.vx = personShortHair.speed;

  //place patron childParent in gallery
  childParent.minX = width / 2 - 50;
  childParent.maxX = width / 2 + 135;
  childParent.minY = height / 2 - 20;
  childParent.maxY = height / 2 + 30;

  childParent.sizeX = 0; //relation to original size
  childParent.sizeY = 0;

  childParent.x = random(childParent.minX, childParent.maxX);
  childParent.y = random(childParent.minY, childParent.maxY);
  childParent.vx = childParent.speed;
}

function setUpCanvases() {
  /// need to do a displayGallery object too
  digiCanvas1.x = width / 2 - 229; ///eventually change the size of the sides to make it on an angle so that it 'seems' in perspective
  digiCanvas1.y = height / 2 + 10;
  digiCanvas1.sizeX = 114;
  digiCanvas1.sizeY = 100;

  digiCanvas2.x = width / 2 + 313;
  digiCanvas2.y = height / 2 + 6;
  digiCanvas2.sizeX = 185;
  digiCanvas2.sizeY = 110;
}

function simulation() {
  displayGallery();
  move(); // get displayGallery properly and then tackle the move function
  checkMouseHover(); // put on pause so it doesnt change while coding
}

///

function move() {
  ///patrons moving around in thier assigned spaces - next make them switch spaces, more freedom? or just trace logic through the gallery missing gallery walls
  personLongHair.x += personLongHair.vx;
  personLongHair.y += personLongHair.vy;

  // console.log(personLongHair.x);
  if (personLongHair.x < width / 2 - 300) {
    personLongHair.vx = -personLongHair.vx;
  }
  if (personLongHair.x > width / 2 - 185) {
    personLongHair.vx = -personLongHair.vx;
  }
  if (personLongHair.y < height / 2 + 80) {
    personLongHair.vy = -personLongHair.vy;
  }
  if (personLongHair.y > height / 2 + 30) {
    personLongHair.vy = -personLongHair.vy;
  }

  personShortHair.x += personShortHair.vx;
  personShortHair.y += personShortHair.vy;

  // console.log(personShortHair.x);
  if (personShortHair.x < width - 350) {
    personShortHair.vx = -personShortHair.vx;
  }
  if (personShortHair.x > width - 165) {
    personShortHair.vx = -personShortHair.vx;
  }
  if (personShortHair.y < height / 2 + 80) {
    personShortHair.vy = -personShortHair.vy;
  }
  if (personShortHair.y > height / 2 + 30) {
    personShortHair.vy = -personShortHair.vy;
  }

  childParent.x += childParent.vx;
  childParent.y += childParent.vy;

  // console.log(childParent.x);
  if (childParent.x < width / 2 - 50) {
    childParent.vx = -childParent.vx;
  }
  if (childParent.x > width / 2 + 135) {
    childParent.vx = -childParent.vx;
  }
  if (childParent.y < height / 2 - 20) {
    childParent.vy = -childParent.vy;
  }
  if (childParent.y > height / 2 + 30) {
    childParent.vy = -childParent.vy;
  }
}
///hover over a character to engage in a dialogue
function checkMouseHover() {
  let d1 = dist(mouseX, mouseY, personLongHair.x, personLongHair.y);
  if (d1 < 20) {
    personLongHair.active = true;
  } else {
    personLongHair.active = false; //need to link to current beginning for now. will be the hyperlink narrative
  }
  let d2 = dist(mouseX, mouseY, personShortHair.x, personShortHair.y);
  if (d2 < 20) {
    personShortHair.active = true;
  } else {
    personShortHair.active = false;
  }
  let d3 = dist(mouseX, mouseY, childParent.x, childParent.y);
  if (d3 < 20) {
    childParent.active = true;
  } else {
    childParent.active = false;
  }
  let d4 = dist(mouseX, mouseY, digiCanvas1.x, digiCanvas1.y);
  if (d4 < 50) {
    digiCanvas1.active = true;
  } else {
    digiCanvas1.active = false;
  }
  let d5 = dist(mouseX, mouseY, digiCanvas2.x, digiCanvas2.y);
  if (d5 < 50) {
    digiCanvas2.active = true;
  } else {
    digiCanvas2.active = false;
  }
  // console.log(personLongHair.x);
  // console.log(personLongHair.y);
  // console.log(mouseX);
  // console.log(mouseY);
  // console.log(d1);
}

function mousePressed() {
  //check if mouse is pressed while hovering over character
  if (digiCanvas1.active && mousePressed) {
    soundInstallation1(); //links to sonic Space invader
  }
  if (digiCanvas2.active && mousePressed) {
    soundInstallation2(); //links to kelidoscape
  }
  if (personLongHair.active && mousePressed) {
    narrative1(); //links to sonic Space invader
  }
  if (personShortHair.active && mousePressed) {
    narrative2(); //links to kelidoscape
  }
  if (childParent.active && mousePressed) {
    narrative3(); //links to sonic Space invader
  }
}

function soundInstallation1() {
  window.location.href = `https://amdevito.github.io/211/interact/index.html`; // go to sonic space invader
}

function soundInstallation2() {
  window.location.href = `https://amdevito.github.io/cart253_AlanaDeVito/Exercises/Exercise6`; // go to kelidoscape tunnel
}

function narrative1() {
  //currently place holders.
  window.location.href = `https://amdevito.github.io/cart253_AlanaDeVito/Projects/Project2/Prototype/`; // go back to intro?
}

function narrative2() {
  //currently place holders.
  window.location.href = `https://amdevito.github.io/cart253_AlanaDeVito/Projects/Project2/Prototype/`; // go back to intro?
}

function narrative3() {
  //currently place holders.
  window.location.href = `https://amdevito.github.io/cart253_AlanaDeVito/Projects/Project2/Prototype//`; // go back to intro?
}

function backHome() {
  window.location.href = `https://amdevito.github.io/211/MidTermProposal/`; // go back to intro?
}

function displayGallery() {
  //displayGallery patron with long hair
  push();
  imageMode(CENTER);
  image(
    personLongHair.image,
    personLongHair.x,
    personLongHair.y,
    personLongHair.sizeX,
    personLongHair.sizey
  );
  // console.log(personLongHair.x);
  // console.log(personLongHair.y);
  // console.log(mouseX);
  // console.log(mouseY);
  pop();

  push();
  imageMode(CENTER);
  image(
    personShortHair.image,
    personShortHair.x,
    personShortHair.y,
    personShortHair.sizeX,
    personShortHair.sizey
  );
  pop();

  push();
  imageMode(CENTER);
  image(
    childParent.image,
    childParent.x,
    childParent.y,
    childParent.sizeX,
    childParent.sizey
  );
  pop();
}

//how to i make the patrons a link/clickable
