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
  //get mousePosition and constrain and map values to control the playback rate and direction. up = faster, down = slower.
  mousePosition() {
    if (this.videoActive) {
      this.playRate = map(mouseY, height, 0.1, 0, 2);
      this.playRate = constrain(this.playRate, 0.01, 4);

      this.video.speed(this.playRate);
    }
  }
}
