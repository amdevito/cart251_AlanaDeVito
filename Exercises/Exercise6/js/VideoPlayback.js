class VideoPlayback {
  //creating class for the videoPlayback control useing the mouse position
  constructor(rate, direction) {
    this.rate = rate;
    this.direction = direction;
    this.videoActive = false;
    this.video = createVideo(["assets/images/kelidoscape1.mov"]);
  }
  mousePressed() {
    if (videoActive === false) {
      videoActive = true;
      video.play();
      video.loop();
    }
  }
  mousePosition() {
    this.rate = mouseX;
    this.direction = mouseY;
  }
}
