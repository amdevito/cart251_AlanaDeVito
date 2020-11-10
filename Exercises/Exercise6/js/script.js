/**************************************************
Exercise 6: Make Noies
Alana M DeVito

Click mouse to start video. Click 1-8 number to start a track. use the mouse to modulate the play back of track and video.

Brief Items Completed:
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

function setup() {
  createCanvas(windowWidth, windowHeight);

  //recall video class?
  videoPlayback = new VideoPlayback(); //rate and diretion controlled by amplitude? or frequency?
  videoPlayback.video.hide();

  tracksPlayback = new TracksPlayback(); //mapped mouse x and mapped y plositions//
}

// draw()
//
function draw() {
  background(177);

  //place video /recall video class
  imageMode(CENTER);
  image(videoPlayback.video, width / 2, height / 2);

  ////recall track classes

  tracksPlayback.keyPressed();
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
    "Click the mouse to start video. \n Press number 1-8 to start a track. \n The position of the mouse changes the playback speed and the video playback direction. \n Turn a track off by hitting the same number.",
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

//recall video classes
function mousePressed() {
  videoPlayback.mousePressed();
}
