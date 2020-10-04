/**************************************************
Functions
Alana DeVito

Functions Experiments 7
keyboard input
**************************************************/
let bg = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(bg);

  textAlign(CENTER, CENTER);
  textSize(width/height*64);
  fill(255);
  text(key, width/2,height/2);///key pressed is displayed

}

function keyPressed(){
}
