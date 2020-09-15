/**************************************************
Variables Experiment 1
Alana DeVito

As the cursor moves around the black canvas (which is the adaptable size of the browser window),
the rectangle changes size and shape along with changing between different shades of purple, green and grey. Everything
has a tail that remains because the background draw function is removed. I would like to reuse this for something. Really love the reactivity and look.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

// draw()
//
// Description of draw() goes here.
function draw() { /// writing 1/60th a second 'draw loop' or 'update loop'
//background(mouseX, mouseY, 0);
  rectMode(CENTER);
  fill(mouseY / 3, mouseX / 2, mouseY / 3);
  rect(width / 2, height / 2, mouseX / 2, mouseY / 2);//(location determined by mouse, and size determined by mouse)

}
