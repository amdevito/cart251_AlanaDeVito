class Track {
  //assign a file and a number to a track to be played
  constructor(file, number) {
    this.audio = file;
    this.active = false;
    this.playRate = 1;
    this.playDirection = 1;
    this.number = number;
  }

  keyPressed() {
    if (key === `${this.number}` && this.active === false) {
      //play track with the number assigned
      this.audio.loop();
      this.active = true;
      this.audio.amp(1, 0.8);
    } else if (key === `${this.number}` && this.active === true) {
      //stop track and make inactive
      this.audio.stop();
      this.active = false;
    }
  }

  //get mousePosition and constrain and map values to control the playback rate and direction
  mousePosition() {
    if (this.active) {
      this.playRate = map(mouseY, height, 0.1, 0, 2);
      this.playRate = constrain(this.playRate, 0.01, 4);
      if (mouseX < width / 2) {
        //if the mouse is on the left side of the screen take the playback rate and make negative,
        //making the track play backwards
        this.playRate = -this.playRate;
      }
      this.audio.rate(this.playRate);
    }
  }
}
