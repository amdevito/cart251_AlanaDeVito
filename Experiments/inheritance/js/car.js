//New! 1. we show that the car is a subclass of Vehicle by using the keyword "extends" and then the name of the class it extends
// our car extends the vehicle class...
class Car extends Vehicle {
  // Create a new Car object that moves to the right
  constructor(x, y) {
    // NEW! 2. We call the Vehicle's constructor() first! Because the Vehicle
    // is the superclass for our Car, we call its constructor super()!
    // So super(x,y) means: call the superclass' constructor with arguments
    // x and y (values passed in as arguments when the Car is created)
    // SUB: this.x = x;
    // this.y = y; WITH...
    super(x, y);
    // After using the Vehicle's constructor() we need to set
    // the Vehicle properties to the specific values for a Motorcycle

    this.width = 50;
    this.height = 20;
    this.vx = 5;
  }
  // 3. We don't need to define move() or wrap() because they are already part
  // of the Vehicle class so our Car inherits them

  // 4. We do want to define our display() method because the car
  // has a specific visual appearance: a rectangle with four wheels

  // //Move the car according to its velocity
  // move() {
  //   this.x += this.vx;
  //   this.y += this.vy;
  // }
  //
  // //Wrap the car if it reaches the right edge
  // wrap() {
  //   if (this.x > width) {
  //     this.x -= width;
  //   }
  // }

  //Display the car as a rectangle
  display() {
    // Even though the Vehicle's version of display() does nothing, we should STILL
    // call it. The variable "super" contains a reference to the Vehicle part of this car,
    // so we can call the Vehicle version of the display() method by writing:
    super.display();
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
