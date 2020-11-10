/**************************************************
Exercise 6: Make Some Noise
Alana M DeVito

Click mouse to start video. Click 1-8 number to start a track, click same number to turn it off.
Use the mouse to modulate the play back speed and playback direction of the track.

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

  //draw up title and instructions
  push();
  textSize(30);
  fill(0);
  textFont("Arial");
  text("Kelidoscape Tunnel", 25, 45);
  textSize(20);
  fill(0);
  textFont("Arial");
  text(
    "Click the mouse to start video.\nPress number 1-8 to start a track.\nThe position of the mouse changes the playback speed and the playback direction.\nTurn a track off by hitting the same number.",
    28,
    70
  );
  pop();
  push();
  textSize(30);
  fill(0);
  textFont("Arial");
  textAlign(RIGHT);
  text("Works with Chrome or Firefox.", width - 25, 45);
  pop();
}

//recall video classes inside of mousePressed and keyPressed functions.
function mousePressed() {
  videoPlayback.mousePressed();
}

//recall tracks playback classes
function keyPressed() {
  tracksPlayback.keyPressed();
}
