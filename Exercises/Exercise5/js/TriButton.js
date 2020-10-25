class TriButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //tri created with 3 points
    this.triX1 = 30;
    this.triY1 = 75;
    this.triX2 = 58;
    this.triY2 = 20;
    this.triX3 = 86;
    this.triY3 = 75;
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
      g: 210,
      b: 250,
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

    this.x += this.vx;
    this.y += this.vy;
  }

  bounce() {
    if (this.y + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  display() {
    push();
    fill(this.triButtonColor.r, this.triButtonColor.g, this.triButtonColor.b);
    stroke(0);
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
