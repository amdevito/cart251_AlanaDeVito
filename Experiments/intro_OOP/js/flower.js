///class for oop

class Flower {
  //we will define what a Flower is like in here!
  // the constructor() sets up a flower's properties
  constructor(x, y, size, stemLength, petalColor) {
    //position and size info as parameters
    // position and size information
    // this refers to the object that will be created with the class.
    this.x = x;
    this.y = y;
    this.size = size;
    this.stemLength = stemLength;
    this.stemThickness = 10;
    this.petalThickness = 10;
    //color information
    this.stemColor = {
      r: 50,
      g: 150,
      b: 50,
    };
    this.petalColor = petalColor;
    this.centreColor = {
      r: 246,
      g: 255,
      b: 0,
    };
  }
  //display()
  //Displays the flower on the canvas
  display() {
    push();
    //set the stroke weight for the petals and the stem
    strokeWeight(this.stemThickness);
    // draw a line for the stem
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    //draw a circle witha heavy outline for the flower
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
  mousePressed() {
    // calculate the distance between this flower and the mouse
    let d = dist(this.x, this.y, mouseX, mouseY);
    // check if the distance is less than the head of the flower
    if (d < this.size / 2 + this.petalThickness) {
      //If it is, this flower was clicked, so increase its stem length
      this.stemLength += 5;
      //and so change its y position so it grows upward! (if we didnt do this then the stem would grow downward, which would look weird)
      this.y -= 5;
    }
  }
}
