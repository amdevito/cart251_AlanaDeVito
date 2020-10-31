class Motorcycle extends Vehicle {
  // Create a new motorcycle object that moves to the right
  constructor(x, y) {
    // Call the Vehicle's constructor()
    // Remember, it's called super() when we call it from a subclass
    super(x, y);
    //set our properties to the specific motorcycle values.
    this.width = 30;
    this.height = 10;
    this.vx = 10;
  }

  // Display the motorcycle as a skinny rectangle
  display() {
    //NEW!
    push();
    // NEW! First we set the fill to yellow
    fill(255, 255, 0);
    // NEW! Then we call the superclass's version of display(), which will display
    // a rectangle with the Motorcycle's dimensions at the Motorcycle's position
    super.display();
    pop();
    // // Remember to call the superclass' version of this method!
    // super.display();
    //
    // push();
    // rectMode(CENTER);
    // noStroke();
    // fill(255, 255, 0);
    // rect(this.x, this.y, this.width, this.height);
    // pop();
  }
}
