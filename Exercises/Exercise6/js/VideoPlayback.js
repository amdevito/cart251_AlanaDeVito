class VideoPlayback {
  //creating class for the videoPlayback control
  constructor(vidRate, direction) {
    this.vidRate = vidRate;
    this.vidDirection = direction;
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
}
