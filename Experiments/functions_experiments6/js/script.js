/**************************************************
Functions
Alana DeVito

Functions Experiments 6
States - how to click through the title, game instructions and then go add this to White Squirrel title page
**************************************************/

let circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
  speed: 0
};

let state = `title`; //possible states are title, animation , ending

function setup() {
  createCanvas(windowWidth, windowHeight);

    circle.x = 0;
    circle.y = height/2;
    circle.vx = width/height*5;
    circle.vy = height/width;
    circle.size = width/height*50;
    circle.speed = width/height*2;

    textSize(circle.size);
    textAlign(CENTER, CENTER);
     // height/width gives one unit of the canvas size. Multiply by the value you want//
}

function draw() {
  background(0);

if (state === `title`) {
  title();
}
else if (state === `animation`) {
animation();
  }


else if (state === `ending`){
//Ending
ending();

}
}

function title() {
  //Title
  fill(255);
  text(`Life.`, width/2, height/2);
}

function animation() {
  //Animation
  circle.x += circle.vx;
  //circle.y += circle.vy;

  if (circle.x > width) {
    state = `ending`;
}
ellipse(circle.x, circle.y, circle.size);
}


function ending() {
  //ending
  fill(127);
  text(`It's all over.`, width/2, height/2);
}

function keyPressed() {
  if (state === `title`) {
state = `animation`;
  }
}





// //function unit(u) = {
//   let unit = height/width * u;
//  return unit;
// }
