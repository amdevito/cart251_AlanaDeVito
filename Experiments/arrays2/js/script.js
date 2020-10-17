/**************************************************
Template p5 project
Alana DeVito

Arrays2
**************************************************/
//ARRAY 2 Part1
// "use strict";
//
//  let fortunes = [
//    `It's not looking so good today.`,
//    `You will be visited \n by the ghost of David Bowie \n tonight.`,
//    `You are going to east \n some delicious food.`,
//    `Happiness is yours for the taking.`,
//    `You will meet David Lynch at Paradiso.`
//  ];
//
//  let chosenFortune = `Click to see your future!`;
//
//
// // setup()
// //
// // Description of setup() goes here.
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER,CENTER);
//   textSize(32);
//   fill(255);
// }
//
// // draw()
// //
// // Description of draw() goes here.
// function draw() {
//   background(0);
//   text(chosenFortune,width/2,height/2);
// }
// function mousePressed() {
//   chosenFortune = random(fortunes); // in processing, if you put the array name in the random function then it will return a random choice from your array!//
// }
//

//ARRAYS 2 PART 2
// "use strict";
//
// // Our array of lines from one of Hamlet's soliloquys (a sequence
// // where he essentially talks to himself). We will want to display
// // each line one after the other as the user clicks.
// let soliloquy = [
//   `To be, or not to be`,
//   `That is the question.`,
//   `Whether 'tis nobler in the mind`,
//   `To suffer the slings and arrows`,
//   `Of outrageous fortune`,
//   `Or to take arms`,
//   `Against a sea of sorrows`,
//   `And by opposing end them.`
// ];
//
// // We need a variable to store the current line we want to display
// // It should start at ZERO because that's the first index in the array
// let currentIndex = 0;
//
// // setup() gets basic styling ready
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   fill(255);
// }
//
// // draw() displays the current line
// function draw() {
//   background(0);
//   // Get the element in the array at the CURRENT index (starts at 0 and goes up)
//   //let dialog = soliloquy[currentLine];
//   // Display the string in that element on the canvas
//   text(soliloquy[currentIndex], width / 2, height / 2);
// }
//
// // mousePressed() moves to the next line in the soliloquy unless we've reached the end
// function mousePressed() {
//   // Go to the next line in the soliloquy
// currentIndex ++;
//   // Check if we've reached the LENGTH of the array
//   // If we have, we've gone past the end because we started counting at 0
//   // The LENGTH of our array is 8, but the final element is at index 7
//   if (currentIndex === soliloquy.length) {
//     // If we've gone past the end, go back one to the last real element
//     currentIndex = 0;
//   }
//

//
// "use strict";
//
// let circle = {
//   x: 0,
//   y: 0,
//   size: 100,
//   trail: [],
//   trailSize: 20 // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
// }
//
// // setup() the canvas ready
// function setup() {
//   createCanvas(600, 600);
// }
//
// // draw() draws a circle with a trails
// function draw() {
//   background(0);
//   fill(random(0, 255), random(0, 100), random(0, 255));
//
//   // Use a for loop to go through each element in the circle's trail array in order
//   for (let i = 0; i < circle.trail.length; i++) {
//     // Get the element at the index indicated by i (0, then 1, then 2, etc.)
//     let element = circle.trail[i];
//     // Draw an ellipse the same size as the circle at that position
//     ellipse(element.x, element.y, circle.size);
//   }
//
//   // Move the circle to the mouse position
//   circle.x = mouseX;
//   circle.y = mouseY;
//
//   // Draw the circle
//   ellipse(circle.x, circle.y, circle.size);
//
//   // Create a new position object that stores where the circle is now
//   // which we can add to the trail to trace the path of the circle
//   let newTrailPosition = {
//     x: circle.x,
//     y: circle.y
//   };
//   // Add the position to the circle's trail array
//   circle.trail.push(newTrailPosition);
//
//   if (circle.trail.length > circle.trailSize) {
//     circle.trail.shift(); //remove the element at 0 and re-shuffle elements
//   }
// }
///
//arays 2 part 3

"use strict";

// An array of different playback rates to use with our dog bark
// 1 means normal rate, greater than one increases the speed and pitch
// So 3 is three times faster with a correspondingly higher pitch.
let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

// Our sound effect
let barkSFX;

// preload() loads the barking sound effect
function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup() the canvas ready
function setup() {
  createCanvas(600, 600);
}

// draw() does nothing much
function draw() {
  background(0);
}

// mousePressed() plays a dog bark at a randomly chosen rate
function mousePressed() {
  // Choose a random rate from the array
  let barkRate = random(rates);
  // Set the barking sound effect to that rate
  barkSFX.rate(barkRate);
  // Play the barking sound effect
  barkSFX.play();
}
