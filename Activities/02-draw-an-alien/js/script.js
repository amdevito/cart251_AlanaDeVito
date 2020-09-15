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
  noStroke();//clouds(everything below)
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







}
