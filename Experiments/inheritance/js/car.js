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
    // this.drunkenness = 0.2;
  }

  // //Overridin the superclass' move() method>>
  // move() {
  //   // Make the car veer by calling our veer() method
  //   // This is specific to the Car's version of move()
  //   // We use "this" to access other methods in THIS class
  //   this.veer();
  //
  //   // NEW! Call the superclass (Vehicle) version of move()
  //   // This will handle adding velocity to position for us
  //   // We use "super" to access methods in the SUPERclass (Vehicle)
  //   // So this calls the Vehicle version of move()
  //
  //   super.move();
  // }
  //
  // // veer() causes the car to randomly veer on the y axis
  // veer() {
  //   let r = random();
  //   if (r < this.drunkenness) {
  //     this.vy = random(-5, 5);
  //   }
  // }
  //
  // //overriding the superclass' wrap() method!
  //
  // wrap() {
  //   // NEW! Call the superclass (Vehicle) version of wrap()
  //   // This will handle wrapping on the x axis for us.
  //   // We use "super" to access methods in the SUPERclass (Vehicle)
  //   // So this calls the Vehicle version of wrap()
  //   super.wrap();
  //
  //   //Our car-specific verticle wrapping code
  //   if (this.y > height) {
  //     this.y -= height;
  //   }
  // }
  //
  // // 3. We don't need to define move() or wrap() because they are already part
  // // of the Vehicle class so our Car inherits them
  //
  // // 4. We do want to define our display() method because the car
  // // has a specific visual appearance: a rectangle with four wheels
  //
  // // //Move the car according to its velocity
  // // move() {
  // //   this.x += this.vx;
  // //   this.y += this.vy;
  // // }
  // //
  // // //Wrap the car if it reaches the right edge
  // // wrap() {
  // //   if (this.x > width) {
  // //     this.x -= width;
  // //   }
  // // }

  //Display the car as a rectangle
  display() {
    // Even though the Vehicle's version of display() does nothing, we should STILL
    // call it. The variable "super" contains a reference to the Vehicle part of this car,
    // so we can call the Vehicle version of the display() method by writing:
    push();
    //NEW! first we set the red fill.
    fill(255, 0, 0);
    // NEW! Then we call the superclass's version of display(), which will display
    // a rectangle with the Car's dimensions at the Car's position. Because we set
    // the fill to red before this, the rectangle will be red.

    super.display();

    rectMode(CENTER);
    // noStroke();
    // fill(255, 0, 0);
    // rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
