/**************************************************
Exercise 6: Make Some Noise
Alana M DeVito

Click mouse to start video. Click 1-8 number to start a track, click same number to turn it off.
Use the mouse to modulate the play back speed and playback direction of the track. down = slow, up = fast, left of half of screen = backwards, right of half of screen = forwards.
Mouse movement up and down controls play back rate of video along with the sound.

Brief Items Completed:
1. This is prototype of one of the interactive canvases in the gallery that visitors may interact with.
2. Uses 2 new ways to interact with the sound.js library: activating specific tracks with a number keyPress and the mousePosition modulates the speed and direction playback of the tracks.
**************************************************/
"use strict";

// //setting variable for video background
// let kelidoscape;
//
// //set up variable for storing tracks
// let tracks = [];
//
// //number of positions in array
// let numtracks = 8;

let tracksPlayback;

let videoPlayback;

let instructions = {
  active: true,
};

let files = [];

function preload() {
  // Load all the tracks into the array
  for (let i = 0; i < 4; i++) {
    let file = loadSound(`assets/sounds/track${i}.mp3`); // get track from file and push into array position
    files.push(file);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //assign video play back with class
  videoPlayback = new VideoPlayback(); //rate and diretion controlled by amplitude? or frequency?
  videoPlayback.video.hide();

  tracksPlayback = new TracksPlayback(files); //mapped mouse x and mapped y plositions//
}

// draw()
//
function draw() {
  background(177);

  //place video /recall video class
  imageMode(CENTER);
  image(videoPlayback.video, width / 2, height / 2);

  ////recall track classes

  tracksPlayback.mousePosition();

  //recall video classes

  videoPlayback.mousePosition();

  //draw up title and instructions - hide and view with a mouse click
  if (instructions.active) {
    push();
    textSize(30);
    fill(255);
    textFont("Monospace");
    text("Kelidoscape Tunnel", 70, 45);
    textSize(20);
    fill(0);
    textFont("Monospace");
    text(
      "Click the mouse to start video.\nPress number 1-8 to start a track.\nThe position of the mouse changes the playback speed and the playback direction of sound.\nUp = faster, Down = slower, left = backwards, right = forwards.\nVideo playback rate is controlled by vertical movement of mouse too.\nTurn a track off by hitting the same number\nClick the mouse to view and hide the instructions.",
      70,
      70
    );
    pop();
  }
}

//recall video classes inside of mousePressed and keyPressed functions.
function mousePressed() {
  videoPlayback.mousePressed();
  if (instructions.active) {
    instructions.active = false;
  } else if (!instructions.active) {
    instructions.active = true;
  }
}

//recall tracks playback classes
function keyPressed() {
  tracksPlayback.keyPressed();
}
