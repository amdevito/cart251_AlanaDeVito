class SportsCar extends Car {
  // create a new SportsCar object, make it faster than a car
  constructor(x, y) {
    //call the super class (Car) constructor
    super(x, y);
    this.vx = 15; //super fast!
  }
  // Display the sports car by first displaying the regular car
  // then added our racing stripes
  display() {
    push();

    // Call the super class (Car) display() method to display the standard
    // car shape (note that this will also call the Vehicle version of display()!)
    super.display();

    // Add our racing stripes!
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 0);
    rect(this.x, this.y - this.height / 10, this.width, this.height / 20);
    rect(this.x, this.y + this.height / 10, this.width, this.height / 20);
    pop();
  }
}
