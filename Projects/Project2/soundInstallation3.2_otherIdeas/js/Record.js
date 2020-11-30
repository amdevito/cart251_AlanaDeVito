class Record {
  //assign a file and a number to a track to be played
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spin = 1;
    this.speed = 0.05;
    this.size = undefined;
    this.style = undefined;
    this.direction = 0;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(angle);

    let angle = this.spin;

    noFill();
    stroke(255);
    strokeWeight(1);

    for (let i = 0; i < cirNum; i++) {
      arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360 - i - angle);
      //cirSize = 0 makes it wobble
    }
    pop();
  }
}
