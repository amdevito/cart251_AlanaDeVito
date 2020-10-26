class TriButton {
  constructor(x1, y1, x2, y2, x3, y3) {
    //tri created with 3 points
    this.triX1 = x1;
    this.triY1 = y1;
    this.triX2 = x2;
    this.triY2 = y2;
    this.triX3 = x3;
    this.triY3 = y3;
    //^ creating the triangle
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 42; /// equation to find size of triangle (this.x2 + this.x3)/2)- this.x1), however, you cant change this value to change the size, yet, you must change manually if you change the tri point draw values, do this equation and then enter it. Not currently working, ry for later.
    this.active = true;
    this.soundActive = false;
    this.triOsc = new p5.TriOsc(random(60, 560));
    this.triDel = new p5.Delay();
    this.filterActive = false;
    this.triButtonColor = {
      r: 0,
      g: 0,
      b: 0,
    };
  }
  //gravity physics applied
  gravity(force) {
    this.ay += force;
  }

  //movement of triangles down the screen
  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.triX1 += this.vx;
    this.triY1 += this.vy;

    this.triX2 += this.vx;
    this.triY2 += this.vy;

    this.triX3 += this.vx;
    this.triY3 += this.vy;
  }

  // collision detection of mallet and triangles
  bounce(mallet) {
    if (
      this.triX1 > mallet.x - mallet.malletThickness * 1.25 &&
      this.triX1 < mallet.x + mallet.malletThickness * 1.25 &&
      this.triY1 + this.size * 1.25 >= mallet.y - mallet.malletHeight / 2 &&
      this.triY1 - this.size * 1.25 <= mallet.y - mallet.malletHeight / 2 &&
      this.triX2 > mallet.x - mallet.malletThickness * 1.25 &&
      this.triX2 < mallet.x + mallet.malletThickness * 1.25 &&
      this.triY2 + this.size * 1.25 >= mallet.y - mallet.malletHeight / 2 &&
      this.triY2 - this.size * 1.25 <= mallet.y - mallet.malletHeight / 2 &&
      this.triX3 > mallet.x - mallet.malletThickness * 1.25 &&
      this.triX3 < mallet.x + mallet.malletThickness * 1.25 &&
      this.triY3 + this.size * 1.25 >= mallet.y - mallet.malletHeight / 2 &&
      this.triY3 - this.size * 1.25 <= mallet.y - mallet.malletHeight / 2
    ) {
      //bounce when hitting mallet
      this.vy = -this.vy - 70;
      this.ay = 0;
      //activate triangle oscillator when triangle hits mallet, set soundActive to true
      this.soundActive = true;

      if (this.soundActive) {
        this.triOsc.start();
        this.triOsc.amp(1, 0.8);
      }
    }
    //bounce when hitting 'ground'
    if (this.triY1 + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;

      if (this.soundActive) {
        this.triOsc.amp(0, 0.8); // if triButton is playing but hits the button of screen, turn off
      }
    }
    if (this.triY2 + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;

      if (this.soundActive) {
        this.triOsc.amp(0, 0.8); // if triButton is playing but hits the button of screen, turn off
      }
    }
    if (this.triY3 + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;

      if (this.soundActive) {
        this.triOsc.amp(0, 0.8); // if triButton is playing but hits the button of screen, turn off
      }
    }
  }
  //mousePressed activates filter control of mouse
  mousePressed() {
    this.filterActive = true;
  }
  //as mouse moves across screen, freq filter cutoff changes from 60hz t0 600 hz with mouseX position
  updateFilter() {
    if (this.filterActive) {
      let cutoff = map(mouseX, 0, width, 40, 1000);
      this.triDel.process(this.triOsc, 0.8, 0.9, cutoff);
    }
  }

  //draw tributton image
  display() {
    push();
    fill(this.triButtonColor.r, this.triButtonColor.g, this.triButtonColor.b);

    stroke(255);
    strokeWeight(4);
    triangle(
      this.triX1,
      this.triY1,
      this.triX2,
      this.triY2,
      this.triX3,
      this.triY3
    );
    pop();
  }
}
