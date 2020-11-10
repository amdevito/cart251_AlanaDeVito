class VideoPlayback {
  //creating class for the videoPlayback control useing the mouse position
  constructor(rate, direction) {
    this.rate = rate;
    this.direction = direction;
    this.video = createVideo(["assets/images/kelidoscape1.mov"]);
  }
  mousePressed() {
    kelidoscape.loop();
  }
  mousePosition() {
    this.rate = mouseX;
    this.direction = mouseY;
  }
}
