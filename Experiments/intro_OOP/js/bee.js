class Bee {
  // constructor () sets up our starting properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10; // if we get smaller than this min we're dead
    this.maxSize = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.shrinkRate = 0.05; // how much smaller we get each frame
    this.growRate = 0.05;
    this.jitteriness = 0.1; //how likely the bee is to change direction
    this.alive = true; // the bee starts out alive
  }

  // shrink() causes the bee to get smaller over time

  shrink() {
    //shrink by reducing the side by a set amount
    this.size -= this.shrinkRate;
    //Check if wer;re smaller than the minimum size
    if (this.size < this.minSize) {
      // if so we're dead
      this.alive = false;
    }
  }

  //tryToPollinate() attempts to pollinate the flower provided as a parameter
  // if pollination succeeds (the two overlap) then both grow
  tryToPollinate(flower) {
    //calculate the distance between the bee and the Flower
    let d = dist(this.x, this.y, flower.x, flower.y);
    //if they overlap...
    if (d < this.size / 2 + flower.size / 2 + flower.petalThickness) {
      //the bee should grow
      // notice how we can call OTHER METHODS of the Bee by using 'this'
      //so this.grow() calls the grow() method for THIS bee
      this.grow();
      flower.pollinate();
    }
  }

  grow() {
    this.size += this.growRate;
    this.size = constrain(this.size, this.minSize, this.maxSize);
  }

  //grow() causes the bee to get bigger up to a max (called by tryToPollinate())

  // move() moves the bee by potentially changing direction
  //and then changing position based on velocity

  move() {
    //first check if we should change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    //update position with velocity to actually move
    this.x += this.vx;
    this.y += this.vy;

    //constrain to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  //display() draws our bee onto the canvas
  display() {
    push();
    //wings on either side
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    //body
    push();
    fill(255, 255, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    //eyes
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x - this.size / 10, this.y, this.size / 10);
    ellipse(this.x + this.size / 10, this.y, this.size / 10);
  }
}
