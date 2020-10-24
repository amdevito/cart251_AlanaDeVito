///class for oop

class Flower {
  //we will define what a Flower is like in here!
  // the constructor() sets up a flower's properties
  constructor() {
    // position and size information
    // this refers to the object that will be created with the class.
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = 50;
    this.stemLength = 75;
    this.stemThickness = 10;
    this.petalThickness = 10;
    //color information
    this.stemColor = {
      r: 0,
      g: 0,
      b: 0,
    };
    this.petalColor = {
      r: 93,
      g: 0,
      b: 250,
    };
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
}
