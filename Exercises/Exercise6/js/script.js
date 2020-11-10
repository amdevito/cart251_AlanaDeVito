/**************************************************
Exercise 6: Make Noies
Alana M DeVito

Click mouse to start video. Click 1-8 number to start a track. use the mouse to modulate the play back of track and video.

Brief Items Completed:
**************************************************/
"use strict";

//setting variable for video background
let kelidoscape;

//set up variable for storing tracks
let tracks = [];

//number of positions in array
let numtracks = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //setup video
  kelidoscape = createVideo(["assets/images/kelidoscape1.mov"]);
}

// draw()
//
function draw() {
  background(177);

  //place video
  imageMode(CENTER);
  image(kelidoscape, width / 2, height / 2);

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
