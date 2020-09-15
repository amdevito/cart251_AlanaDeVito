/**************************************************
02-draw-an-alien project
Alana DeVito
First practice activity drawing an alien using Javascript

**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 480);
  background(230, 119, 235, 70);



}

// draw()
//
// Description of draw() goes here.
function draw() {
  //clouds(everything below)
  noStroke();
  fill(159, 138, 160);
  ellipse(25, 45, 200, 15);
    ellipse(95, 55, 200, 15);
      ellipse(105, 75, 200, 15);
        ellipse(160, 65, 200, 15);
          ellipse(200, 45, 200, 15);
          ellipse(425, 45, 200, 15);
            ellipse(395, 55, 200, 15);
              ellipse(405, 75, 200, 15);
                ellipse(460, 65, 200, 15);
                  ellipse(300, 45, 200, 15);
                  ellipse(560, 65, 200, 15);
                    ellipse(500, 45, 200, 15);
                    ellipse(25, 95, 200, 15);
                    ellipse(395, 85, 200, 15);
                      ellipse(405, 105, 200, 15);
                        ellipse(460, 105, 200, 15);
                          ellipse(300, 95, 200, 15);
                          ellipse(560, 95, 200, 15);
                            ellipse(500, 105, 200, 15);
                            ellipse(105, 108, 200, 15);
                      ellipse(95, 175, 200, 15);
                        ellipse(105, 195, 200, 15);
                          ellipse(160, 195, 200, 15);
                            ellipse(200, 165, 200, 15);
                            ellipse(425, 165, 200, 15);
                              ellipse(395, 175, 200, 15);
                                ellipse(405, 195, 200, 15);
                                  ellipse(460, 195, 200, 15);
                                    ellipse(300, 165, 200, 15);
                                    ellipse(560, 185, 200, 15);
                                      ellipse(500, 175, 200, 15);
//alien
  noStroke();
  fill(200);//lighter
  ellipse(320, 460, 300, 260) //body
  fill(170);//darker
  ellipse(320, 260, 185, 280);//head
  circle(321, 245, 210)//ocular space
  ellipse(320, 200, 230, 190);
  fill(0);
  circle (280, 260, 80);//main eye
  circle (375, 260, 80);//main eye
  fill(191, 255, 0);//neon green
  ellipse(280, 258, 10, 40);//iris
  ellipse(375, 258, 10, 40);//iris
  fill(0);
  ellipse(280, 280, 5, 15);//pupil
  ellipse(375, 280, 5, 15);//pupil
  ellipse(280, 238, 5, 15);//pupil
  ellipse(375, 238, 5, 15);//pupil
  ellipse(320, 320, 5, 20);//nose hole
  ellipse(340, 320, 5, 20);//nose hole
  stroke(255, 0, 0);
  strokeWeight(2);
  rect(320, 350, 20, 10, 4, 4, 1, 1)

//UFO
  fill(50);
  stroke(191, 255, 0);
  strokeWeight(2);
  ellipse(25, 185, 40, 25);
  ellipse(25, 195, 100, 25);
fill(244, 222, 19);
noStroke();
ellipse(25, 198, 20, 6); //beam hole at bottom of UFO

//clouds just covering UFO
  noStroke();
  fill(159, 138, 160);
  ellipse(25, 170, 200, 15);

//lights
fill(25, 198, 229);
circle(1, 189, 4);
fill(255, 0, 0);
circle(9, 187.9, 4);
fill(25, 198, 229);
circle(16.5, 187.5, 4);

fill(255, 0, 0);
circle(25, 187.5, 4);
fill(25, 198, 229);
circle(33, 188, 4);

fill(255, 0, 0);
circle(42, 188.5, 4);
fill(25, 198, 229);
circle(50.4, 189.5, 4);

fill(255, 0, 0);
circle(59, 190.9, 4);
fill(25, 198, 229);
circle(68, 193.5, 4);

//beam from UFO
fill(244, 222, 19, 170);
triangle(25, 198, 15, 600, 100, 600)






//see online: https://amdevito.github.io/cart253_AlanaDeVito/Activities/02-draw-an-alien/






}
