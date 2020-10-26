class SinButton {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = size;
    this.active = true;
    this.soundActive = false;
    this.sinButtonColor = {
      r: 255,
      g: 255,
      b: 255,
    };
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;
  }

  bounce(mallet) {
    if (
      this.x >= mallet.x - mallet.malletThickness * 1.25 &&
      this.x <= mallet.x + mallet.malletThickness / 2 &&
      this.y + this.size / 2 >= mallet.y - mallet.malletHeight / 2 &&
      this.y - this.size / 2 <= mallet.y - mallet.malletHeight / 2
    ) {
      //spin bounce off side. careful not to lose your sinButtons!
      let dx = this.x - mallet.x;
      this.vx += map(
        dx,
        -mallet.malletThickness / 2,
        mallet.malletThickness / 2,
        -0.05,
        0.05
      );

      this.vy = -this.vy - 70;
      this.ay = 0;

      this.soundActive = true;

      if (this.soundActive) {
        new p5.SinOsc(random(300, 2000)); // if sinbutton bounces off of mallet, set soundActive to TRUE
      }
    }
    if (this.y + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;

      // if (this.soundActive) {
      //   this.soundActive = false; // if sinButton is playing but hits the button of screen, turn off
      // }
    }
  }

  display() {
    push();
    fill(this.sinButtonColor.r, this.sinButtonColor.g, this.sinButtonColor.b);
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
