/**************************************************
Template p5 project
Alana DeVito

Arrays2
**************************************************/
"use strict";

 let fortunes = [
   `It's not looking so good today.`,
   `You will be visited \n by the ghost of David Bowie \n tonight.`,
   `You are going to east \n some delicious food.`,
   `Happiness is yours for the taking.`,
   `You will meet David Lynch at Paradiso.`
 ];

 let chosenFortune = `Click to see your future!`;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  text(chosenFortune,width/2,height/2);
}
function mousePressed() {
  chosenFortune = random(fortunes); // in processing, if you put the array name in the random function then it will return a random choice from your array!//
}
