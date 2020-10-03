/**************************************************
Functions
Alana DeVito

Functions Experiments2
**************************************************/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  parallels(width/10, height/10, 10, width/250, height/25, width/50);
  parallels(width/8, height/8, 20, width/250, height/25, width/50);
  parallels(width/6, height/6, 30, width/250, height/25, width/50);
  parallels(width/4, height/4, 40, width/250, height/25, width/50);

}

function parallels(x,y, numLines, lineWidth, lineHeight, lineSpacing) { ///state parameters that will take the variable amounts - in this case the x, y location

  for (let i = 0; i < numLines; i++) {///starting position, i=0,  long as i is less than 20, add 1
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x,y,lineWidth,lineHeight);
    x += lineSpacing;
  }
}
