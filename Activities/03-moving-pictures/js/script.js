/**************************************************
Activity 3: Moving Pictures
Alana DeVito

**************************************************/
function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
}

let bg = {
  red: 0,
  green: 0,
  blue: 0
};
let circle1 = {
  x: 0,
  y: windowHeight / 2,
  size: windowHeight / 4,
  speed: windowWidth / 60,
  trans: 170,
  //colour: (1, 119, 181) //try this colour for the circles at some point
};
let circle2 = {
  x: windowWidth,
  y: widowHeight / 2,
  size: windowHeight / 6,
  speed: windowWidth / 60,
  //colour: (1, 119, 181)
};



function draw() {
background(bg.red + 1 , bg.green, bg.blue);


}
//(map(0, windowWidth / 60, 0, 255)
