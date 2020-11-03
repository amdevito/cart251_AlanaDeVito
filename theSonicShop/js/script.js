/**************************************************
The Sonic Shop Virtual Gallery
Alana DeVito

**************************************************/
"use strict";
let sonicSign = {
  x: 0,
  y: 0,
};

let boxOffice;

let boxOffice1 = {
  x: 1000,
  y: 1000,
};

let boxOffice2 = {
  x: 1000,
  y: 1000,
};

let boxOffice3 = {
  x: 1000,
  y: 1000,
};

let boxOffice4 = {
  x: 1000,
  y: 1000,
};

let boxOffice5 = {
  x: 1000,
  y: 1000,
};

let boxOffice6 = {
  x: 1000,
  y: 1000,
};

let gallery;

let state = "enter";

function preload() {
  //background
  boxOffice = loadImage("assets/images/box_office1_intro.png"); //boxoffice background
  // box office interaction screens
  boxOffice1 = loadImage("assets/images/box_office1_1.png"); //intro1
  boxOffice2 = loadImage("assets/images/box_office1_2.png"); //intro2
  boxOffice3 = loadImage("assets/images/box_office1_3.png"); //intro3
  boxOffice4 = loadImage("assets/images/box_office1_4.png"); //intro4
  boxOffice5 = loadImage("assets/images/box_office1_5.png"); //intro5
  boxOffice6 = loadImage("assets/images/box_office1_6.png"); //intro6

  //Gallery
  gallery = loadImage("assets/images/gallery_render.png"); //gallery
}
// Description of setup() goes here.
function setup() {
  createCanvas(900, 1000);
  sonicSign = createVideo(["assets/video/gallery_sign.mov"], sonicSignLoad);
  sonicSign.size(609, 188);
}

function sonicSignLoad() {
  sonicSign.loop();
  sonicSign.volume(0);
}

function welcomeDisplay() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  pop();
}

function welcomeDisplay1() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  image(boxOffice1, boxOffice1.x, boxOffice1.y);
  pop();
  //controls for this screen
  if (keyIsPressed) {
    if (key == "1" && state === `display`) {
      state === `display2`;
    } else if (key == "2" && state === `start`) {
      state === `display3`;
    }
  }
}

function welcomeDisplay2() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  image(boxOffice2, boxOffice2.x, boxOffice2.y);
  pop();
  //controls for this screen
  if (keyIsPressed) {
    if (
      (key == "1" && state === `display2`) ||
      (key == "2" && state === `display2`) ||
      (key == "3" && state === `display2`) ||
      (key == "4" && state === `display2`)
    ) {
      state === `display4`;
    }
  }
}

function welcomeDisplay3() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  image(boxOffice3, boxOffice3.x, boxOffice3.y);
  pop();
  //controls for this screen
  if (keyIsPressed) {
    if (
      (key == "1" && state === `display3`) ||
      (key == "2" && state === `display3`) ||
      (key == "3" && state === `display3`) ||
      (key == "4" && state === `display3`)
    ) {
      state === `display4`;
    }
  }
}

function welcomeDisplay4() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  image(boxOffice4, boxOffice4.x, boxOffice4.y);
  pop();
  //controls for this screen
  if (keyIsPressed) {
    if (key == "1" && state === `display4`) {
      state === `home`;
    } else if (key == "2" && state === `display4`) {
      state === `display5`;
    }
  }
}

function welcomeDisplay5() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  image(boxOffice5, boxOffice5.x, boxOffice5.y);
  pop();
  //controls for this screen
  if (keyIsPressed) {
    if (key == "1" && state === `display5`) {
      state === `home`;
    } else if (key == "2" && state === `display5`) {
      state === `display6`;
    }
  }
}

function welcomeDisplay6() {
  push();
  background(boxOffice);
  imageMode(CENTER);
  image(sonicSign, sonicSign.x, sonicSign.y);
  image(boxOffice6, boxOffice6.x, boxOffice6.y);
  pop();
  //controls for this screen
  if (keyIsPressed) {
    if (key == "1" && state === `display6`) {
      state === `home`;
    } else if (key == "2" && state === `display6`) {
      state === `gallery`;
    }
  }
}

function galleryDisplay() {
  background(gallery);
}

function mousePressed() {
  if (state === `enter`) {
    state = `start`;
    sonicSignLoad();
  } else if (state === `display6`) {
    state = `gallery`;
  }
}

function backHome() {
  window.location.href = `https://amdevito.github.io/211/trajectory/index.html`;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  welcomeDisplay();

  //set up the different states
  if (state === `enter`) {
    welcomeDisplay();
  } else if (state === `start`) {
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
    backHome();
  }
}
