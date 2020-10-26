//set mallet class
class Mallet {
  //set mallet constructor and vars.
  constructor(w, h, malletThickness, malletHeight) {
    this.x = 0;
    this.y = 0;
    this.handleLength = w;
    this.handleThickness = h;
    this.malletThickness = malletThickness;
    this.malletHeight = malletHeight;
    //color information
    this.handleColor = {
      r: 0,
      g: 0,
      b: 0,
    };
    this.malletColor = {
      r: 0,
      g: 280,
      b: 0,
    };
  }

  move() {
    this.x = mouseX;
    this.y = mouseY;
  }

  //build mallet image
  display() {
    push();
    fill(this.handleColor.r, this.handleColor.g, this.handleColor.b);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.handleLength, this.handleThickness);
    stroke(this.handleColor.r, this.handleColor.g, this.handleColor.b);
    strokeWeight(3);
    fill(this.malletColor.r, this.malletColor.g, this.malletColor.b);
    ellipse(
      this.x - this.handleLength / 2,
      this.y,
      this.malletThickness,
      this.malletHeight
    );
    pop();
  }
}
