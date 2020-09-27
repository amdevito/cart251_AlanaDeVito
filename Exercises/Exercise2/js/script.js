/**************************************************
DOdGing DOGS: Adventures of the White Squrriel
**************************************************/

// dogs come in from the right at different distances outside of the frame so they are staggerd. so x= 1200 + randomNumber(1200, 1300, y position is randomNumber(height/2, height) midway to bottom
let bg;
let squirrelImage;



function preload() {
  squirrelImage = loadImage("assets/images/squirrel.png");
  bg = loadImage('assets/images/park.jpg');

}

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  createCanvas(1400, 800);
}

function draw() {
  background(bg);
push();
  imageMode(CENTER);
  image(squirrelImage, mouseX, mouseY);
pop();
}


///once i need to get the key up and key down function to move the squirrel
// function keyPressed() {
//   if (keyCode === UP_ARROW) {
    //x++
