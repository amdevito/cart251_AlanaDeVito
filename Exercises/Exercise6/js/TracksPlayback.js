class TracksPlayback {
  //creating class for the TrackPlayback control using the mouse position
  constructor(files) {
    this.tracks = [];
    for (let i = 0; i < files.length; i++) {
      let track = new Track(files[i], i + 1);
      this.tracks.push(track);
    }
    //create arrays to store and retrieve tracks instead?
  }

  //press corresponding number to play track, press again to stop
  // it (deactivate)
  keyPressed() {
    for (let i = 0; i < this.tracks.length; i++) {
      this.tracks[i].keyPressed();
    }
  }

  //when 1-8 is pressed, play that track, if active and pressed again, turn off

  // getTrack() {
  //   //array to save tracks in and then recall?
  // }
  mousePosition() {
    for (let i = 0; i < this.tracks.length; i++) {
      this.tracks[i].mousePosition();
    }
  }
}
