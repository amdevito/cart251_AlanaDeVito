class TracksPlayback {
  //creating class for the TrackPlayback control using the mouse position
  constructor(playRate, playDirection) {
    this.track1 = {
      audio: createAudio("assets/sounds/track0.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track2 = {
      audio: createAudio("assets/sounds/track1.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track3 = {
      audio: createAudio("assets/sounds/track2.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track4 = {
      audio: createAudio("assets/sounds/track3.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track5 = {
      audio: createAudio("assets/sounds/track4.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track6 = {
      audio: createAudio("assets/sounds/track5.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track7 = {
      audio: createAudio("assets/sounds/track6.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    this.track8 = {
      audio: createAudio("assets/sounds/track7.mp3"),
      active: false,
      playRate: playRate,
      playDirection: playDirection,
    };
    //create arrays to store and retrieve tracks instead?
  }

  //press corresponding number to play track, press again to stop
  // it (deactivate)
  keyPressed() {
    if (key === "1" && this.track1.active === false) {
      //play track0.mp3
      this.track1.audio.play();
      this.track1.audio.loop();
      this.track1.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "1" && this.track1.active === true) {
      //stop track and make inactive
      this.track1.audio.stop();
      this.track1.active = false;
    }
    if (key === "2") {
      //play track1.mp3
      this.track2.audio.play();
      this.track2.audio.loop();
      this.track2.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "2" && this.track2.active === true) {
      //stop track and make inactive
      this.track2.audio.stop();
      this.track2.active = false;
    }
    if (key === "3") {
      //play track2.mp3
      this.track3.audio.play();
      this.track3.audio.loop();
      this.track3.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "3" && this.track3.active === true) {
      //stop track and make inactive
      this.track3.audio.stop();
      this.track3.active = false;
    }
    if (key === "4") {
      //play track3.mp3
      this.track4.audio.play();
      this.track4.audio.loop();
      this.track4.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "4" && this.track4.active === true) {
      //stop track and make inactive
      this.track4.audio.stop();
      this.track4.active = false;
    }
    if (key === "5") {
      //play track04.mp3
      this.track5.audio.play();
      this.track5.audio.loop();
      this.track5.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "5" && this.track5.active === true) {
      //stop track and make inactive
      this.track5.audio.stop();
      this.track5.active = false;
    }
    if (key === "6") {
      //play track05.mp3
      this.track6.audio.play();
      this.track6.audio.loop();
      this.track6.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "6" && this.track6.active === true) {
      //stop track and make inactive
      this.track6.audio.stop();
      this.track6.active = false;
    }
    if (key === "7") {
      //play track06.mp3
      this.track7.audio.play();
      this.track7.audio.loop();
      this.track7.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "7" && track7.active === true) {
      //stop track and make inactive
      this.track7.audio.stop();
      this.track7.active = false;
    }
    if (key === "8") {
      //play track0.mp3
      this.track8.audio.play();
      this.track8.audio.loop();
      this.track8.active = true;
      this.track1.audio.amp(1, 0.8);
    } else if (key === "8" && track8.active === true) {
      //stop track and make inactive
      this.track8.audio.stop();
      this.track8.active = false;
    }
  }
  //when 1-8 is pressed, play that track, if active and pressed again, turn off

  // getTrack() {
  //   //array to save tracks in and then recall?
  // }
  mousePosition() {
    //play back rate controlled by the Y position
    if (this.track1.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track1.rate(playRate);
    } else if (this.track2.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track2.rate(playRate);
    } else if (this.track3.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track3.rate(playRate);
    } else if (this.track4.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track4.rate(playRate);
    } else if (this.track5.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track5.rate(playRate);
    } else if (this.track6.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track6.rate(playRate);
    } else if (this.track7.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track7.rate(playRate);
    } else if (this.track8.active) {
      playRate = map(mouseY, 0.1, height, 0, 2);
      playRate = constrain(playRate, 0.01, 4);
      this.track8.rate(playRate);
    }
    //playback direction controlled by X position -  negative rate numbers mean play backwards
    if (this.track1.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track1.rate(playDirection);
    } else if (this.track2.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track2.rate(playRate);
    } else if (this.track3.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track3.rate(playRate);
    } else if (this.track4.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playRate, -2, 1.5);
      this.track4.rate(playDirection);
    } else if (this.track5.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track5.rate(playDirection);
    } else if (this.track6.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track6.rate(playDirection);
    } else if (this.track7.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track7.rate(playDirection);
    } else if (this.track8.active) {
      playDirection = map(mouseX, 0.1, height, 0, 2);
      playDirection = constrain(playDirection, -2, 1.5);
      this.track8.rate(playDirection);
    }
  }
}
