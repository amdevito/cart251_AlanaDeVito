class TracksPlayback {
  //creating class for the TrackPlayback control using the mouse position
  constructor(track, rate, direction) {
    this.rate = rate;
    this.direction = direction;
    this.trackActive = false;
    this.track = track; //create array to get track
  }

  keyPressed() {}
  //when 1-8 is pressed, play that track, if active and pressed again, turn off

  getTrack() {
    //array to save tracks in and then recall
  }
}
