class Patrons {
  //creating 4 different patrons who move around the gallery space. When you click on them you go
  //to their specific hyperlink narrative
  constructor(vidRate, direction) {
    this.playRate = 1;
    this.playDirection = 1;
    this.videoActive = false;
    this.video = createVideo(["assets/images/kelidoscape1.mov"]);
  }
}
