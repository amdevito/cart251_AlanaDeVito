class VideoPlayback {
  //creating class for the videoPlayback control
  constructor(vidRate, direction) {
    this.playRate = 1;
    this.playDirection = 1;
    this.videoActive = false;
    this.video = createVideo(["assets/images/kelidoscape1.mov"]);
  }
  mousePressed() {
    if (this.videoActive === false) {
      this.videoActive = true;
      this.video.play();
      this.video.loop();
    }
  }
  //get mousePosition and constrain and map values to control the playback rate and direction
  mousePosition() {
    if (this.videoActive) {
      this.playRate = map(mouseY, 0.1, height, 0, 2);
      this.playRate = constrain(this.playRate, 0.01, 4);
      if (mouseX < width / 2) {
        //if the mouse is on the left side of the screen take the playback rate and make negative,
        //making the track play backwards
        this.playRate = -this.playRate;
      }
      this.video.rate(this.playRate);
    }
  }
}
