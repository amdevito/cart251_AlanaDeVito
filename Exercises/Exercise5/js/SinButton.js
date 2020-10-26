class SinButton {
  //circle that activates the sine wave oscillator
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
    this.sinOsc = new p5.SinOsc(random(360, 660));
    this.sinRev = new p5.Reverb();
    this.sinButtonColor = {
      r: 255,
      g: 255,
      b: 255,
    };
  }
  //physics of gravity applied
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

  //collision detection for mallet and sinButton, thus activating sinWave oscillator.
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
      //reverse direction after button hits mallet
      this.vy = -this.vy - 70;
      this.ay = 0;

      this.soundActive = true;

      if (this.soundActive) {
        this.sinOsc.start();
        this.sinOsc.amp(1, 0.8);
        // if sinbutton bounces off of mallet, set soundActive to TRUE
      }
    }
    if (this.y + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
      //if it happens, activate oscillator wave
      if (this.soundActive) {
        this.sinOsc.amp(0, 0.8); // if sinButton is playing but hits the bottom of screen, turn off
      }
    }
  }

  mousePressed() {
    //mouse press activates reverb effect on the sinOsc.
    this.sinRev.process(this.sinOsc, 4, 4);
  }

  //show the sinButton on screen
  display() {
    push();
    fill(this.sinButtonColor.r, this.sinButtonColor.g, this.sinButtonColor.b);
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
