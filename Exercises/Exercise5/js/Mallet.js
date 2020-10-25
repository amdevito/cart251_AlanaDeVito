class Mallet {
  constructor(w, h) {
    this.x = 0;
    this.y = handleThickness - this.handleThickness / 2;
    this.handleLength = w;
    this.handleThickness = h;
    this.malletThickness = 20;
    //color information
    this.handleColor = {
      r: 0,
      g: 0,
      b: 0,
    };
    this.malletColor = {
      r: 0,
      g: 0,
      b: 155,
    };
  }

  move() {
    this.x = mouseX;
  }

  display() {
    push();
    fill(this.handleColor.r, this.handleColor.g, this.handleColor.b);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.handleLength, this.handleThickness);
    stroke();
    strokeWeight(3);
    fill(this.malletColor.r, this.malletColor.g, this.malletColor.b);
    ellipse(this.x, this.y, this.malletThickness);

    pop();
  }
}
