class TracksPlayback {
  //creating class for the TrackPlayback control using the mouse position
  //in each array position get the number of files in the array (.length) and assign one of the tracks in the assets folder
  //push into the tracks array
  constructor(files) {
    this.tracks = [];
    for (let i = 0; i < files.length; i++) {
      let track = new Track(files[i], i + 1);
      this.tracks.push(track);
    }
  }

  //press corresponding number to play track, press again to stop
  // it (deactivate)
  //find the number in the array
  keyPressed() {
    for (let i = 0; i < this.tracks.length; i++) {
      this.tracks[i].keyPressed();
    }
  }
  //find mouse position and put into array to later access as the playback modulator
  mousePosition() {
    for (let i = 0; i < this.tracks.length; i++) {
      this.tracks[i].mousePosition();
    }
  }
}
