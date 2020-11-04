/**************************************************
The Sonic Shop Virtual Gallery

Alana DeVito

Prototype UI for my final project.
This is the introductory section of my final project.

In this prototype, the user is greeted at the enterance of a virtual gallery
called The Sonic Shop Virtual Gallery. After some dialogue between the user and
my virtual self, the user is allowed access into the 3D modeled space.
Once inside, clicking on a canvas allows you access 'into' the interactive installation
piece.
   There are 3 different canvas's for 3 different AV interactive experiences
(just doubled up for an 'immersive' experience.)

**************************************************/
"use strict";

//set up variable for the flashing sign gif
let sonicSign = {
  x: 0,
  y: 0,
  image: undefined,
};

//variable for boxOffice images
let boxOffice;

let boxOffice1 = {
  x: 0,
  y: 0,
  image: undefined,
};

let boxOffice2 = {
  x: 0,
  y: 0,
  image: undefined,
};

let boxOffice3 = {
  x: 0,
  y: 0,
  image: undefined,
};

let boxOffice4 = {
  x: 0,
  y: 0,
  image: undefined,
};

let boxOffice5 = {
  x: 0,
  y: 0,
  image: undefined,
};

let boxOffice6 = {
  x: 0,
  y: 0,
  image: undefined,
};

let gallery;

let state = "enter";

function preload() {
  //background
  boxOffice = loadImage("assets/images/box_office1_intro.png"); //boxoffice background
  // box office interaction screens
  boxOffice1.image = loadImage("assets/images/box_office1_1.png"); //intro1
  boxOffice2.image = loadImage("assets/images/box_office1_2.png"); //intro2
  boxOffice3.image = loadImage("assets/images/box_office1_3.png"); //intro3
  boxOffice4.image = loadImage("assets/images/box_office1_4.png"); //intro4
  boxOffice5.image = loadImage("assets/images/box_office1_5.png"); //intro5
  boxOffice6.image = loadImage("assets/images/box_office1_6.png"); //intro6

  //Gallery
  gallery = loadImage("assets/images/gallery_render.png"); //gallery

  //Gallery sign
  sonicSign.image = loadImage("assets/images/theSonicShop.gif");
}

// for now draw is just responsible for state changes to link functions
function draw() {
  //set up the different states
  if (state === `enter`) {
    welcomeDisplay();
  } else if (state === `display1`) {
    welcomeDisplay1();
  } else if (state === `display2`) {
    welcomeDisplay2();
  } else if (state === `display3`) {
    welcomeDisplay3();
  } else if (state === `display4`) {
    welcomeDisplay4();
  } else if (state === `display5`) {
    welcomeDisplay5();
  } else if (state === `display6`) {
    welcomeDisplay6();
  } else if (state === `gallery`) {
    galleryDisplay();
  } else if (state === `home`) {
  }
}

//
function keyPressed() {
  if (state === `enter`) {
  } else if (state === `display1`) {
    if (key == 1) {
      state = `display2`;
    } else if (key == 2) {
      state = `display3`;
    }
  } else if (state === `display2`) {
    if (key == 1 || key == 2 || key == 3 || key == 4) {
      state = `display4`;
    }
  } else if (state === `display3`) {
    if (key == 1 || key == 2 || key == 3 || key == 4) {
      state = `display4`;
    }
  } else if (state === `display4`) {
    if (key == 1) {
      state = `home`;
      backHome();
    } else if (key == 2) {
      state = `display5`;
    }
  } else if (state === `display5`) {
    if (key == 1) {
      state = `home`;
      backHome();
    } else if (key == 2) {
      state = `display6`;
    }
  } else if (state === `display6`) {
    if (key == 1) {
      state = `home`;
      backHome();
    }
  } else if (state === `gallery`) {
  } else if (state === `home`) {
    backHome();
  }
}
//
function setup() {
  createCanvas(700, 900);

  //set up sign on canvas
  sonicSign.x = width / 2;
  sonicSign.y = height / 2 - 380;
}

//first introduction
function welcomeDisplay() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

//functions to switch from different answers from the user.
function welcomeDisplay1() {
  push();
  background(boxOffice1.image);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

function welcomeDisplay2() {
  push();
  background(boxOffice2.image);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

function welcomeDisplay3() {
  push();
  background(boxOffice3.image);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

function welcomeDisplay4() {
  push();
  background(boxOffice4.image);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

function welcomeDisplay5() {
  push();
  background(boxOffice5.image);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

function welcomeDisplay6() {
  push();
  background(boxOffice6.image);
  imageMode(CENTER);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  pop();
}

//send user into the gallery
function galleryDisplay() {
  createCanvas(1150, 700);
  background(gallery);
}

//when the mouse is pressed, change states
function mousePressed() {
  if (state === `enter`) {
    state = `display1`;
  } else if (state === `display6`) {
    state = `gallery`;
  } else if (state === `gallery`) {
    interaction1();
  }
}

//take user back to the front page website for Project Trajectory
function backHome() {
  window.location.href = `https://amdevito.github.io/211/trajectory/index.html`;
}

//user selects canvas and then is taken 'into' the interactive installation
function interaction1() {
  window.location.href = `https://amdevito.github.io/211/interact/index.html`;
}
