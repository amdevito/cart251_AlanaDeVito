/**************************************************
Installation 2 of 3: KelidoSCAPE Tunnel
Alana M DeVito

*Please see README file for Artist Statement, full description and all code credits.

Animated 'digiCanvases', when clicked take you to that sound installation.
There are three different Gallery Patrons are moving around the gallery and when you click on a Patron, you are taken into the hyperlink narrative.
Patron interactions and sound installations open in new windows as to keep track of how many patron interactions occur to activate the 'You want to leave'
interruption screen.
Arrow cursor has changing pixel heart in trans, non-binary and genderfluid pride flags attached.

- note: I choose to keep the arrow cusor visable with the hearts so that precise clicking can be done on canvases and patrons.

**************************************************/
"use strict";
//cursor // cursor is cursorHeart1 always,and  when you hover over clickable items it changes to heart 2, when you click it changes to heart3
let cursorHeart1 = {
  image: 0,
  active: true,
};
let cursorHeart2 = {
  image: 0,
  active: false,
};
let cursorHeart3 = {
  image: 0,
  active: false,
};

let instructions = {
  active: true,
};

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
  clicked: false,
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
  clicked: false,
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
  clicked: false,
};

//The Sonic Shop sign at top of gallery
let sonicSign = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

//animated canvases in gallery that click to the virtual AV sound installation piece.
let digiCanvas1 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
  active: false,
  clicked: false,
};

let digiCanvas2 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
  active: false,
  clicked: false,
};

let digiCanvas3 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
  active: false,
  clicked: false,
};

let galleryImage;

function preload() {
  galleryImage = loadImage(`assets/images/gallery_render.png`);

  //Gallery sign
  sonicSign.image = loadImage("assets/images/theSonicShop.gif");

  //load cursorHearts images
  cursorHeart1.image = loadImage("assets/images/heart1.png");
  cursorHeart2.image = loadImage("assets/images/heart2.png");
  cursorHeart3.image = loadImage("assets/images/heart3.png");

  //load animated, clickable  digiCanvases
  digiCanvas1.image = loadImage("assets/images/digiCanvas1.gif");
  digiCanvas2.image = loadImage("assets/images/digiCanvas2.gif");
  digiCanvas3.image = loadImage("assets/images/digiCanvas3.gif");

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

  //place gallery image on screen
  imageMode(CENTER);
  image(galleryImage, width / 2, height / 2, width / 2 + 400, height / 2 + 200);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);

  //gallery instructions - show and hide with pressing 'i'
  if (instructions.active) {
    push();
    textSize(18);
    fill(254, 0, 120);
    textAlign(RIGHT);
    textFont("Monospace");
    text("Welcome to the gallery!", 1090, 580);
    push();
    textSize(18);
    fill(255);
    textAlign(RIGHT);
    textFont("Monospace");
    text(
      "Please click each of the 3 animated canvases to enter\nan AV installation piece.\nClick on one of the 3 other patrons to engage in a conversation.\nPressing 'e' will exit you out of the gallery and back to the homepage.\nPressing 'i' will show and hide these instructions. ENJOY!",
      1090,
      610
    );

    pop();
    push();
    textSize(18);
    fill(67, 125, 220);
    textAlign(RIGHT);
    textFont("Monospace");
    text(
      "First off please allow\npop-ups from this page for the\ninteractions to work properly.",
      1090,
      80
    );

    pop();
  }

  //place canvases on gallery walls
  image(
    digiCanvas1.image,
    digiCanvas1.x,
    digiCanvas1.y,
    digiCanvas1.sizeX,
    digiCanvas1.sizeY
  );
  rotate(0.03, 0); // tilt the gif slightly to place in digiCanvas properly.
  image(
    digiCanvas2.image,
    digiCanvas2.x,
    digiCanvas2.y,
    digiCanvas2.sizeX,
    digiCanvas2.sizeY
  );

  push();
  rotate(-0.01, 0);
  image(
    digiCanvas3.image,
    digiCanvas3.x,
    digiCanvas3.y,
    digiCanvas3.sizeX,
    digiCanvas3.sizeY
  );

  push();

  pop();

  //check if all patron dialogue has been done plus only 2 sound installations. Then tell user they want to leave. Stop loop and go back to home page.
  //if all patrons have been interacted with and any 2 soundinstallations, you are 'asked'/ decide to leave the gallery.
  if (
    (personLongHair.clicked &&
      personShortHair.clicked &&
      childParent.clicked &&
      digiCanvas1.clicked &&
      digiCanvas3.clicked) ||
    (personLongHair.clicked &&
      personShortHair.clicked &&
      childParent.clicked &&
      digiCanvas2.clicked &&
      digiCanvas3.clicked) ||
    (personLongHair.clicked &&
      personShortHair.clicked &&
      childParent.clicked &&
      digiCanvas1.clicked &&
      digiCanvas2.clicked)
  ) {
    push();
    textSize(30);
    fill(0);
    rect(0, 0, 1125, 725);
    fill(255, 0, 0);
    rotate(-0.02, 0);
    textAlign(CENTER);
    textFont("Monospace");
    text(
      "You are exhausted by all the unwelcoming \ndialogue at the gallery and want to leave.\nA community full of microagressions \nis not a welcoming one.\nPlease press 'e' to exit the gallery and \nreturn to the homepage.",
      562,
      200
    );

    pop();
    noLoop();
    simulation.stop();
  }

  pop();
  simulation(); //recall function containing all gallery active components to make this scene animated and active.
}
//

function setUpSign() {
  sonicSign.x = width / 2 - 230;
  sonicSign.y = height / 2 - 270;
}

function setUpPatrons() {
  //place patron personLongHair in gallery and constrain to sections. Cannot go through the 'walls'.

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

  //place patron personShortHair in gallery and constrain to sections. Cannot go through the 'walls'.
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
  /// place gifs of each sound installation canvas in the gallery
  digiCanvas1.x = width / 2 - 229;
  digiCanvas1.y = height / 2 + 10;
  digiCanvas1.sizeX = 114;
  digiCanvas1.sizeY = 100;

  digiCanvas2.x = width / 2 + 313;
  digiCanvas2.y = height / 2 + 6;
  digiCanvas2.sizeX = 185;
  digiCanvas2.sizeY = 110;

  digiCanvas3.x = width / 2 + 12;
  digiCanvas3.y = height / 2 - 47;
  digiCanvas3.sizeX = 121;
  digiCanvas3.sizeY = 110;
}

//call all functions involved with the gallery simulation
function simulation() {
  displayGallery();
  move(); // recall move function
  checkMouseHover(); // recall checkMouseHover
  cursorHeart(); //display the different types of heart cursors  - regular = 1(non-binary pride flag), hover = 2 (trans pride flag), click = 3 (genderfluid pride flag)
}

///

function move() {
  ///patrons moving around in thier assigned spaces
  personLongHair.x += personLongHair.vx;
  personLongHair.y += personLongHair.vy;

  /// movement within one section of gallery
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

  /// movement within one section of gallery
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

  /// movement within one section of gallery
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
///click on a character to engage in a dialogue and change heart flag when hovering on clickable link
function checkMouseHover() {
  let d1 = dist(mouseX, mouseY, personLongHair.x, personLongHair.y);
  if (d1 < 20) {
    personLongHair.active = true;
    cursorHeart2.active = true;
    cursorHeart1.active = false;
    return;
  } else {
    personLongHair.active = false;
    cursorHeart2.active = false;
    cursorHeart1.active = true;
  }
  let d2 = dist(mouseX, mouseY, personShortHair.x, personShortHair.y);
  if (d2 < 20) {
    personShortHair.active = true;
    cursorHeart2.active = true;
    cursorHeart1.active = false;
    return;
  } else {
    personShortHair.active = false;
    cursorHeart2.active = false;
    cursorHeart1.active = true;
  }
  let d3 = dist(mouseX, mouseY, childParent.x, childParent.y);
  if (d3 < 20) {
    childParent.active = true;
    cursorHeart2.active = true;
    cursorHeart1.active = false;
    return;
  } else {
    childParent.active = false;
    cursorHeart2.active = false;
    cursorHeart1.active = true;
  }
  let d4 = dist(mouseX, mouseY, digiCanvas1.x, digiCanvas1.y);
  if (d4 < 50) {
    digiCanvas1.active = true;
    cursorHeart2.active = true;
    cursorHeart1.active = false;
    return;
  } else {
    digiCanvas1.active = false;
    cursorHeart2.active = false;
    cursorHeart1.active = true;
  }
  let d5 = dist(mouseX, mouseY, digiCanvas2.x, digiCanvas2.y);
  if (d5 < 50) {
    digiCanvas2.active = true;
    cursorHeart2.active = true;
    cursorHeart1.active = false;
    return;
  } else {
    digiCanvas2.active = false;
    cursorHeart2.active = false;
    cursorHeart1.active = true;
  }
  let d6 = dist(mouseX, mouseY, digiCanvas3.x, digiCanvas3.y);
  if (d6 < 50) {
    digiCanvas3.active = true;
    cursorHeart2.active = true;
    cursorHeart1.active = false;
    return;
  } else {
    digiCanvas3.active = false;
    cursorHeart2.active = false;
    cursorHeart1.active = true;
  }
}

function mousePressed() {
  //check if mouse is pressed while hovering over character
  if (digiCanvas1.active && mousePressed) {
    digiCanvas1.clicked = true;
    cursorHeart2.active = false;
    cursorHeart1.active = false;
    cursorHeart3.active = true;
    soundInstallation1(); //links to Sonic Space invader installation
  }
  if (digiCanvas2.active && mousePressed) {
    digiCanvas2.clicked = true;
    cursorHeart2.active = false;
    cursorHeart1.active = false;
    cursorHeart3.active = true;
    soundInstallation2(); //links to Kelidoscape installation
  }
  if (digiCanvas3.active && mousePressed) {
    digiCanvas3.clicked = true;
    cursorHeart2.active = false;
    cursorHeart1.active = false;
    cursorHeart3.active = true;
    soundInstallation3(); //links to Spinning into Oblivion installation
  }
  if (personLongHair.active && mousePressed) {
    personLongHair.clicked = true;
    cursorHeart2.active = false;
    cursorHeart1.active = false;
    cursorHeart3.active = true;
    narrative1(); //links to hyperlink narrative with personLongHair
  }
  if (personShortHair.active && mousePressed) {
    personShortHair.clicked = true;
    cursorHeart2.active = false;
    cursorHeart1.active = false;
    cursorHeart3.active = true;
    narrative2(); //links to hyperlink narrative with personShortHair
  }
  if (childParent.active && mousePressed) {
    childParent.clicked = true;
    cursorHeart2.active = false;
    cursorHeart1.active = false;
    cursorHeart3.active = true;
    narrative3(); //links to hyperlink narrative with childParent
  }
}

//open virtual installation piece in new window
function soundInstallation1() {
  window.open(
    `https://amdevito.github.io/cart253_AlanaDeVito/Projects/Project2/soundInstallation1`,
    "_blank"
  );
}

//open virtual installation piece in new window

function soundInstallation2() {
  window.open(
    `https://amdevito.github.io/cart253_AlanaDeVito/Projects/Project2/soundInstallation2`,
    "_blank"
  );
}

//open virtual installation piece in new window

function soundInstallation3() {
  window.open(
    `https://amdevito.github.io/cart253_AlanaDeVito/Projects/Project2/soundInstallation3`,
    "_blank"
  );
}

//open patron interaction (hyperlink narrative) in new window - longHair

function narrative1() {
  window.open(
    `https://amdevito.github.io/211/Final_Project/narrative_longHair/index.html`,
    "_blank"
  );
}

//open patron interaction (hyperlink narrative) in new window - shortHair

function narrative2() {
  window.open(
    `https://amdevito.github.io/211/Final_Project/narrative_shortHair/index.html`,
    "_blank"
  );
}

//open patron interaction (hyperlink narrative) in new window

function narrative3() {
  window.open(
    `https://amdevito.github.io/211/Final_Project/narrative_childParent/index.html`,
    "_blank"
  );
}

function backHome() {
  window.location.href = `https://amdevito.github.io/211/Final_Project/home/index.html`;
}

//pressing 'e' exits the gallery and takes you back to the main homepage
//pressing 'i' shows and hides gallery directions/instructions
function keyPressed() {
  if (keyIsPressed) {
    if (key == "e") {
      backHome();
    }
    if (keyIsPressed) {
      if (key == "i" && instructions.active) {
        instructions.active = false;
      } else if (key == "i" && !instructions.active) {
        instructions.active = true;
      }
    }
  }
}

//function that changes the type of pride flag on the pixel heart cursor.
function cursorHeart() {
  cursorHeart3.active = mouseIsPressed;
  if (cursorHeart3.active) {
    push();
    imageMode(CENTER);
    image(cursorHeart3.image, mouseX, mouseY, 0, 0);
    pop();
  } else if (cursorHeart1.active) {
    push();
    imageMode(CENTER);
    image(cursorHeart1.image, mouseX, mouseY, 0, 0);
    pop();
  } else if (cursorHeart2.active) {
    push();
    imageMode(CENTER);
    image(cursorHeart2.image, mouseX, mouseY, 0, 0);
    pop();
  }
}

function displayGallery() {
  //display and position patron with long hair
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

  //display and position gallery patron with short hair
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

  //display and position child and parent gallery patrons
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
