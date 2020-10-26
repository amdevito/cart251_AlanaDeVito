class TriButton {
  constructor(x1, y1, x2, y2, x3, y3) {
    // this.x = x;
    // this.y = y;
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
    this.size = 42; /// equation to find size of triangle (this.x2 + this.x3)/2)- this.x1), however, you cant change this value to change the size, yet, you must change manually if you change the tri point draw values, do this equation and then enter it.
    this.active = true;
    this.soundActive = false;
    this.triButtonColor = {
      r: 0,
      g: 0,
      b: 0,
    };
  }

  gravity(force) {
    this.ay += force;
  }

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
  bounce(mallet) {
    if (
      this.triX1 > mallet.x - mallet.malletThickness * 2 &&
      this.triX1 < mallet.x + mallet.malletThickness * 2 &&
      this.triY1 + this.size * 2 >= mallet.y - mallet.malletHeight / 2 &&
      this.triY1 - this.size * 2 <= mallet.y - mallet.malletHeight / 2 &&
      this.triX2 > mallet.x - mallet.malletThickness * 2 &&
      this.triX2 < mallet.x + mallet.malletThickness * 2 &&
      this.triY2 + this.size * 2 >= mallet.y - mallet.malletHeight / 2 &&
      this.triY2 - this.size * 2 <= mallet.y - mallet.malletHeight / 2 &&
      this.triX3 > mallet.x - mallet.malletThickness * 2 &&
      this.triX3 < mallet.x + mallet.malletThickness * 2 &&
      this.triY3 + this.size * 2 >= mallet.y - mallet.malletHeight / 2 &&
      this.triY3 - this.size * 2 <= mallet.y - mallet.malletHeight / 2
    ) {
      //bounce when hitting mallet
      this.vy = -this.vy - 70;
      this.ay = 0;
    }
    //bounce when hitting 'ground'
    if (this.triY1 + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
    }
    if (this.triY2 + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
    }
    if (this.triY3 + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  // bounce() {
  //   if (this.triY1 + this.size / 2 >= height) {
  //     this.vy = -this.vy;
  //     this.ay = 0;
  //   }
  //   if (this.triY2 + this.size / 2 >= height) {
  //     this.vy = -this.vy;
  //     this.ay = 0;
  //   }
  //   if (this.triY3 + this.size / 2 >= height) {
  //     this.vy = -this.vy;
  //     this.ay = 0;
  //   }
  // }

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
