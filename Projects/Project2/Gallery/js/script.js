/**************************************************
Exercise 7 : Progress report

1. digiCanvases on gallery walls are animated gifs
2. Gifs/digiCanvases when clicked take you to that sound installation.
3. Gallery Patrons are moving around the gallery
4. When you click on that Patron, you are taken into the hyperlink narrative

need to make canvases clickable? check overlap and mouse press?
**************************************************/
"use strict";

let patrons = [];

//Patrons

let personLongHair = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  sizeX: 0,
  sizeY: 0,
  image: 0,
  ax: 0,
  ay: 0,
};

let personShortHair = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  sizeX: 0,
  sizeY: 0,
  image: 0,
  ax: 0,
  ay: 0,
};

let childParent = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  sizeX: 0,
  sizeY: 0,
  image: 0,
  ax: 0,
  ay: 0,
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
};

let digiCanvas2 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

let digiCanvas3 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

// let digiCanvases = [];

// let gifs = [];

let galleryImage;

function preload() {
  galleryImage = loadImage(`assets/images/gallery_render.png`);

  // Load all the gifs (animated digiCanvases) into the array
  // for (let i = 0; i < 3; i++) {
  //   let gif = loadImage(`assets/images/gif${i}.gif`); // loadvideo instead get gif from file and push into array position
  //   gifs.push(gif); //gif replaced with video
  // }

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
  sonicSign.x = width / 2 - 230;
  sonicSign.y = height / 2 - 270;

  setUpCanvases();
  setUpPatrons();

  // for (let i = 0; i < 3; i++) {
  //   let x = 0;
  //   let y = 0;
  //   let sizeX = 0;
  //   let sizeY = 0;
  //   let digiCanvas = new digiCanvas(gifs[i], x, y, sizeX, sizeY);
  //   digiCanvases.push(digiCanvas);
  // }
  //
  // digiCanvases.push(new digiCanvas(gifs[0], width / 3, height / 2, 100, 200));
  //
  // digiCanvases.push(new digiCanvas(gifs[0], width / 3, height / 2, 100, 200));

  // //assign video play back with class
  // videoPlayback = new VideoPlayback(); //rate and diretion controlled by amplitude? or frequency?
  // videoPlayback.video.hide();
  //
  // tracksPlayback = new TracksPlayback(files); //mapped mouse x and mapped y plositions//
}

// draw()
//
function draw() {
  background(0);
  image(
    personLongHair.image,
    personLongHair.x,
    personLongHair.y,
    personLongHair.sizeX,
    personLongHair.sizey
  );

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
  rotate(0.03, 0); // tilt the gif slightly to place in digiCanvas properly. How do you do this?
  image(
    //put into display function
    digiCanvas2.image,
    digiCanvas2.x,
    digiCanvas2.y,
    digiCanvas2.sizeX,
    digiCanvas2.sizeY
  );

  simulation(); // this may work once the values are iin
  //
  // for (let i = 0; i < 3; i++) {
  //   digiCanvases[i].display();
}
//

//need to assign values here to make things appear
function setUpPatrons() {
  personLongHair.x = random(personLongHair.minY, personLongHair.maxY);
  personLongHair.y = random(personLongHair.minY, personLongHair.maxY);
  personLongHair.vx = personLongHair.speed;

  personShortHair.x = random(personShortHair.minY, personShortHair.maxY);
  personShortHair.y = random(personShortHair.minY, personShortHair.maxY);
  personShortHair.vx = personShortHair.speed;

  childParent.x = random(childParent.minY, childParent.maxY);
  childParent.y = random(childParent.minY, childParent.maxY);
  childParent.vx = childParent.speed;
}

function setUpCanvases() {
  /// need to do a display object too
  digiCanvas1.x = width / 2 - 229; ///eventually change the size of the sides to make it on an angle so that it 'seems' in perspective
  digiCanvas1.y = height / 2 + 10;
  digiCanvas1.sizeX = 114;
  digiCanvas1.sizeY = 100;

  digiCanvas2.x = width / 2 + 315;
  digiCanvas2.y = height / 2 + 8;
  digiCanvas2.sizeX = 185;
  digiCanvas2.sizeY = 115;
}

function simulation() {
  move();
  checkMouseHoover();
  display();
}

///

function move() {
  ///patrons moving around in thier assigned spaces - next make them switch spaces, more freedom? or just trace logic through the gallery missing gallery walls
  personLongHair.x += personLongHair.vx;
  personLongHair.y += personLongHair.vy;

  if (personLongHair.x < 0) {
    personLongHair.x = personLongHair.minX;
    personLongHair.y = random(personLongHair.minY, personLongHair.maxY);
  }

  personShortHair.x += personShortHair.vx;
  personShortHair.y += personShortHair.vy;

  if (personShortHair.x < 0) {
    personShortHair.x = personShortHair.minX;
    personShortHair.y = random(personShortHair.minY, personShortHair.maxY);
  }

  childParent.x += childParent.vx;
  childParent.y += childParent.vy;

  if (childParent.x < 0) {
    childParent.x = childParent.minX;
    childParent.y = random(childParent.minY, randomDogSpawn.maxY);
  }
}
///hoover over a character to engage in a dialogue
function checkMouseHoover() {
  let d1 = dist(mouseX, mouseY, personLongHair.x, personLongHair.y);
  if (d1 < 75) {
    state = `narrative1`; //need to link to current beginning for now. will be the hyperlink narrative
  }
  let d2 = dist(mouseX, mouseY, personShortHair.x, personShortHair.y);
  if (d2 < 75) {
    state = `narrative2`;
  }
  let d3 = dist(mouseX, mouseY, childParent.x, childParent.y);
  if (d3 < 75) {
    state = `narrative3`;
  }
}

function display() {
  //display patron with long hair
  push();
  imageMode(CENTER);
  image(
    personLongHair.image,
    personLongHair.x,
    personLongHair.y,
    personLongHair.sizeX,
    personLongHair.sizey
  );
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
}

//how to i make the patrons a link/clickable
