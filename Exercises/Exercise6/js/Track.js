class Track {
  constructor(file, number) {
    this.audio = file;
    this.active = false;
    this.playRate = 1;
    this.playDirection = 1;
    this.number = number;
  }

  keyPressed() {
    if (key === `${this.number}` && this.active === false) {
      //play track0.mp3
      this.audio.loop();
      this.active = true;
      this.audio.amp(1, 0.8);
    }
    else if (key === `${this.number}` && this.active === true) {
      //stop track and make inactive
      this.audio.stop();
      this.active = false;
    }
  }

  mousePosition() {
    if (this.active) {
      this.playRate = map(mouseY, 0.1, height, 0, 2);
      this.playRate = constrain(this.playRate, 0.01, 4);
      if (mouseX < width / 2) {
        this.playRate = -this.playRate;
      }
      this.audio.rate(this.playRate);
    }
  }
}