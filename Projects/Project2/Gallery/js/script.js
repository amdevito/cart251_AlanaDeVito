/**************************************************
Exercise 7 : Progress report

1. Canvases on gallery walls are animated gifs
2. Gifs/Canvases when clicked take you to that sound installation.
3. Gallery Patrons are moving around the gallery
4. When you click on that Patron, you are taken into the hyperlink narrative
**************************************************/
"use strict";

let patrons = [];

let sonicSign = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

let canvas1 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

let canvas2 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

let canvas3 = {
  x: 0,
  y: 0,
  sizeX: 0,
  sizeY: 0,
  image: undefined,
};

// let canvases = [];

// let gifs = [];

let galleryImage;

function preload() {
  galleryImage = loadImage(`assets/images/gallery_render.png`);

  // Load all the gifs (animated canvases) into the array
  // for (let i = 0; i < 3; i++) {
  //   let gif = loadImage(`assets/images/gif${i}.gif`); // loadvideo instead get gif from file and push into array position
  //   gifs.push(gif); //gif replaced with video
  // }

  //Gallery sign
  sonicSign.image = loadImage("assets/images/theSonicShop.gif");

  //load animated, clickable  canvases
  canvas1.image = loadImage("assets/images/canvas1.gif"); //intro2
  canvas2.image = loadImage("assets/images/canvas2.gif");
  // Load all the gifs (animated canvases) into the array
  for (let i = 0; i < 3; i++) {
    let patron = loadImage(`assets/images/patron${i}.png`); // get gif from file and push into array position
    patrons.push(patron);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sonicSign.x = width / 2 - 230;
  sonicSign.y = height / 2 - 270;

  canvas1.x = width / 2 - 229; ///eventually change the size of the sides to make it on an angle so that it 'seems' in perspective
  canvas1.y = height / 2 + 10;
  canvas1.sizeX = 114;
  canvas1.sizeY = 95;

  canvas2.x = width / 2 + 305;
  canvas2.y = height / 2 + 25;
  canvas2.sizeX = 188;
  canvas2.sizeY = 115;

  // for (let i = 0; i < 3; i++) {
  //   let x = 0;
  //   let y = 0;
  //   let sizeX = 0;
  //   let sizeY = 0;
  //   let canvas = new Canvas(gifs[i], x, y, sizeX, sizeY);
  //   canvases.push(canvas);
  // }
  //
  // canvases.push(new Canvas(gifs[0], width / 3, height / 2, 100, 200));
  //
  // canvases.push(new Canvas(gifs[0], width / 3, height / 2, 100, 200));

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

  //place gallery image on screen
  imageMode(CENTER);
  image(galleryImage, width / 2, height / 2, width / 2 + 400, height / 2 + 200);
  image(sonicSign.image, sonicSign.x, sonicSign.y, 600, 180);
  image(canvas1.image, canvas1.x, canvas1.y, canvas1.sizeX, canvas1.sizeY);
  rotate(0.01, 0); // tilt the gif slightly to place in canvas properly. How do you do this?
  image(canvas2.image, canvas2.x, canvas2.y, canvas2.sizeX, canvas2.sizeY);
  //
  // for (let i = 0; i < 3; i++) {
  //   canvases[i].display();
}
//
// canvases.push(new Canvas(gifs[0], width / 3, height / 2, 100, 200));
