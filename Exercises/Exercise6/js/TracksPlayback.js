class TracksPlayback {
  //creating class for the TrackPlayback control using the mouse position
  constructor(rate, direction) {
    this.rate = rate;
    this.direction = direction;
    this.track1 = {
      audio: createAudio("assets/sounds/track0.mp3"),
      active: false,
    };
    this.track2 = {
      audio: createAudio("assets/sounds/track1.mp3"),
      active: false,
    };
    this.track3 = {
      audio: createAudio("assets/sounds/track2.mp3"),
      active: false,
    };
    this.track4 = {
      audio: createAudio("assets/sounds/track3.mp3"),
      active: false,
    };
    this.track5 = {
      audio: createAudio("assets/sounds/track4.mp3"),
      active: false,
    };
    this.track6 = {
      audio: createAudio("assets/sounds/track5.mp3"),
      active: false,
    };
    this.track7 = {
      audio: createAudio("assets/sounds/track6.mp3"),
      active: false,
    };
    this.track8 = {
      audio: createAudio("assets/sounds/track7.mp3"),
      active: false,
    };
    //create arrays to store and retrieve tracks instead?
  }

  //press corresponding number to play track, press again to stop
  // it (deactivate)
  keyPressed() {
    if ((key == 1 && track1.active = false)) {
      //play track0.mp3
      track1.audio.play();
      track1.audio.loop();
      track1.active = true;
    } else if ((key == 1 && track1.active = true)) {
      //stop track and make inactive
      track1.audio.stop();
      track1.active = false;
    }
    if (key == 2) {
      //play track1.mp3
      track2.audio.play();
      track2.audio.loop();
      track2.active = true;
    } else if ((key == 2 && track2.active = true)) {
      //stop track and make inactive
      track2.audio.stop();
      track2.active = false;
    }
    if (key == 3) {
      //play track2.mp3
      track3.audio.play();
      track3.audio.loop();
      track3.active = true;
    } else if ((key == 3 && track3.active = true)) {
      //stop track and make inactive
      track3.audio.stop();
      track3.active = false;
    }
    if (key == 4) {
      //play track3.mp3
      track4.audio.play();
      track4.audio.loop();
      track4.active = true;
    } else if ((key == 4 && track4.active = true)) {
      //stop track and make inactive
      track4.audio.stop();
      track4.active = false;
    }
    if (key == 5) {
      //play track04.mp3
      track5.audio.play();
      track5.audio.loop();
      track5.active = true;
    } else if ((key == 5 && track5.active = true)) {
      //stop track and make inactive
      track5.audio.stop();
      track5.active = false;
    }
    if (key == 6) {
      //play track05.mp3
      track6.audio.play();
      track6.audio.loop();
      track6.active = true;
    } else if ((key == 6 && track6.active = true)) {
      //stop track and make inactive
      track6.audio.stop();
      track6.active = false;
    }
    if (key == 7) {
      //play track06.mp3
      track7.audio.play();
      track7.audio.loop();
      track7.active = true;
    } else if ((key == 7 && track7.active = true)) {
      //stop track and make inactive
      track7.audio.stop();
      track7.active = false;
    }
    if (key == 8) {
      //play track0.mp3
      track8.audio.play();
      track8.audio.loop();
      track8.active = true;
    } else if ((key == 8 && track8.active = true)) {
      //stop track and make inactive
      track8.audio.stop();
      track8.active = false;
    }
  }
  //when 1-8 is pressed, play that track, if active and pressed again, turn off
  mousePressed() {
    if (track1.active === true) {
      //add filter to track and control with x and y position of mouse
    }
  }
  // getTrack() {
  //   //array to save tracks in and then recall?
  // }
  mousePosition() {
    this.rate = mouseX;
    this.direction = mouseY;
  }
}
