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
    } else if ((key == 2 && track.active = true)) {
      //stop track and make inactive
      track2.audio.stop();
      track2.active = false;
    }
    if (key == 3) {
      //play track2.mp3
      track.three.play();
      track.three.loop();
      track.active = true;
    } else if ((key == 3 && track.active = true)) {
      //stop track and make inactive
      track.three.stop();
      track.active = false;
    }
    if (key == 4) {
      //play track3.mp3
      track.four.play();
      track.four.loop();
      track.active = true;
    } else if ((key == 4 && track.active = true)) {
      //stop track and make inactive
      track.four.stop();
      track.active = false;
    }
    if (key == 5) {
      //play track04.mp3
      track.five.play();
      track.five.loop();
      track.active = true;
    } else if ((key == 5 && track.active = true)) {
      //stop track and make inactive
      track.five.stop();
      track.active = false;
    }
    if (key == 6) {
      //play track05.mp3
      track.six.play();
      track.six.loop();
      track.active = true;
    } else if ((key == 6 && track.active = true)) {
      //stop track and make inactive
      track.six.stop();
      track.active = false;
    }
    if (key == 7) {
      //play track06.mp3
      track.seven.play();
      track.seven.loop();
      track.active = true;
    } else if ((key == 7 && track.active = true)) {
      //stop track and make inactive
      track.seven.stop();
      track.active = false;
    }
    if (key == 8) {
      //play track0.mp3
      track.eight.play();
      track.eight.loop();
      track.active = true;
    } else if ((key == 8 && track.active = true)) {
      //stop track and make inactive
      track.eight.stop();
      track.active = false;
    }
  }
  //when 1-8 is pressed, play that track, if active and pressed again, turn off
  mousePressed() {
    if (track.eight.active === true) {
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
