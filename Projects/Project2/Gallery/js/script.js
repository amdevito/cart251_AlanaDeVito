/**************************************************
Exercise 7 : Progress report

1. Canvases on gallery walls are animated gifs
2. Gifs/Canvases when clicked take you to that sound installation.
3. Gallery Patrons are moving around the gallery
4. When you click on that Patron, you are taken into the hyperlink narrative
**************************************************/
"use strict";

let patrons = [];

let canvases = [];

let gifs = [];

let galleryImage;

function preload() {
  galleryImage = loadImage(`assets/images/gallery_render.png`);

  // Load all the gifs (animated canvases) into the array
  for (let i = 0; i < 3; i++) {
    let gif = loadImage(`assets/images/gif${i}.gif`); // loadvideo instead get gif from file and push into array position
    gifs.push(gif); //gif replaced with video
  }

  // Load all the gifs (animated canvases) into the array
  for (let i = 0; i < 3; i++) {
    let patron = loadImage(`assets/images/patron${i}.png`); // get gif from file and push into array position
    patrons.push(patron);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // for (let i = 0; i < 3; i++) {
  //   let x = 0;
  //   let y = 0;
  //   let sizeX = 0;
  //   let sizeY = 0;
  //   let canvas = new Canvas(gifs[i], x, y, sizeX, sizeY);
  //   canvases.push(canvas);
  // }

  canvases.push(new Canvas(gifs[0], width / 3, height / 2, 100, 200));

  canvases.push(new Canvas(gifs[0], width / 3, height / 2, 100, 200));

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
  image(galleryImage, width / 2, height / 2, width / 3, height / 3);

  for (let i = 0; i < 3; i++) {
    canvases[i].display();
  }

  canvases.push(new Canvas(gifs[0], width / 3, height / 2, 100, 200));
}
