/**************************************************
Functions
Alana DeVito

Functions Experiments5
Text text text text text
**************************************************/

let squirrelTitle = {
  string: `Adventures of the White Squirrel`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0
};

function setup() {
  createCanvas(windowWidth, windowHeight);

    squirrelTitle.x = width/2;
    squirrelTitle.y = height;
    squirrelTitle.vx = height/width*5;
    squirrelTitle.vy = height/width;
    squirrelTitle.size = width/height*50;
     // height/width gives one unit of the canvas size. Multiply by the value you want//
}

function draw() {
  background(0);


  // squirrelTitle.x += width/height;
  squirrelTitle.y += -width/height*0.8;

  squirrelTitle.size = squirrelTitle.size - (width/height*0.1);

  textAlign(CENTER, CENTER);
  textSize(squirrelTitle.size);
  textStyle(BOLD);
  textFont('Luminari');// font options: Arial, Verdana, Trebuchet MS, Times New Roman, Didot, American Typewriter, Andale Mono, Courier, Bradley Hand, Luminari ~ Sans-serif, serif, Monospace, Cursive, Fantasy, Impact, Trattatello

  fill(random(0, 255),random(0,255), random(0,255));
  stroke(50, 200, 50);
  strokeWeight(width/height*1);

  text(squirrelTitle.string, squirrelTitle.x, squirrelTitle.y); //(text in ``, x, y)
}
// //function unit(u) = {
//   let unit = height/width * u;
//  return unit;
// }
