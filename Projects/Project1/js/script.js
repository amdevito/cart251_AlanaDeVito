/**************************************************
Alana DeVito
Project 1:
Tumbling through Madness: The Adventures of the White Squirrel

**************************************************/
//Set up objects for game play

//OPENING:
//enter Screen//After clicking to continue music should start with the title screen.//make this screen early internet style? photo?// or just in american typewriter?
let enterScreen1 = {
  string: `Error 404: Gender Not Found.`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};
let enterScreen2 = {
  string: `Please click to Continue.`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//title//
let title = {
  string: `Tumbling Through Madness: \n The Great White Squirrel Caper of 2020`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//instructions//
let instruction1 = {
  string: `Level ONE: \n It all Started like any Other Day... \n HOW TO PLAY: Use the arrow keys to control the white squirrel. \n Collect 6 acorns and save them in your home tree. \n Be careful! The dogs are out to play today!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction2 = {
  string: `Level TWO: \n Let the Madness Begin... \n HOW TO PLAY: Use the arrow keys to control the white squirrel. \n Collect 6 loaves of homemade sourdough bread and save them in your home tree. \n Be careful! \n The Anti-Mask Protestors have taken over the park and are spreading the Virus! \n Studies haven't shown that white squirrels are immune yet...`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction3 = {
  string: `Level THREE: \n Take Back the Park! \n HOW TO PLAY: \n Team Up with black squirrel and fight off the growing swarms of WASPS! \n Use the arrow keys to control the white squirrel and hit SHIFT to shoot acorns. \n Use AWSD keys to control the black squirrel and 'Q' to shoot. \n Careful, you only have 3 acorns to shoot each! \n Fight off the WASPS for 90 seconds and they just might retreat!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//GENERAL OBJECTS

//keyboard control
let keyboardControl = {
  left: 8,
  right: 8,
  up: 10,
  down: 10
}

//backdrops
//level one background
let bg1;
//level two background
let bg2;
//level three background
let bg3;
//all level game over
let bgGameOver;

//WHITE SQUIRREL
//set squirrel objects
let squirrel = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

let squirrelWin = {
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

//BLACK SQUIRREL
let squirrel2 = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

//black and white squirrel win, final screen
let squirrelBothWin = {
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}



//LEVEL specific OBJECTS

//LEVEL1:
//Acorns to Collect
let acorn1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn2 = {
  x: -650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 10,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn3 = {
  x: -750,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn4 = {
  x: -850,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn5 = {
  x: -950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn6 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}

//DOGS
///setting dog objects
let dog1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let dog2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let dog3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let dog4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let dog5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained dog spawn//
let randomDogSpawn = {
  min:575,
  max:770
}


//SCORE//
let score = 0;
let scoreDots = {
  x: 450,
  y: 340,
  radius: 50,
  offset1: 55,
  offset2: 110,
  offset3: 165,
  offset4: 220,
  color:{
    r: 94,
    g: 69,
    b: 35
  }
}

//LEVEL 2:
//Bread to Collect
let bread1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread2 = {
  x: -650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 10,
  image: 0,
  ax: 0,
  ay: 0
}
let bread3 = {
  x: -750,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread4 = {
  x: -850,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}
let bread5 = {
  x: -950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread6 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}

//Anti-maskers
///setting anti-masker character objects
let antiMasker1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker6 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained AntiMasker spawn//
let randomAntiMaskSpawn = {
  min:575,
  max:770
}

//Covid Virus' that shoot from anti-maskers
let covid1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid2 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid3 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid4 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid5 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid6 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}

//LEVEL 3:
//Anti-maskers
///setting anti-masker character objects
let wasp1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}
let wasp6 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained wasp spawn//
let randomWaspSpawn = {
  min:575,
  max:770
}


//acorn Bullets (3 each for BS and WS) -- start with brown dots, change to the images later?
let acornBullet1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet2 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet3 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet4 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet5 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let acornBullet6 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}

let state = 'enter'; //different states: enter>title>level1>gameover>win>level2>level3

//preload images for background and characters
function preload() {
  //backgrounds
  bg1 = loadImage('assets/images/park.jpg');//morning
  bg2 = loadImage('assets/images/park2.jpg');//afternoon**
  bg3 = loadImage('assets/images/park3.jpg');//evening**
  bgGameOver = loadImage('assets/images/squirrel_dead.jpg');

  //win images
  squirrelWin.image = loadImage('assets/images/squirrel_youWin.jpg');
  squirrelBothWin.image = loadImage('assets/images/squirrel_youWin.jpg');//**

  //squirrel characters
  squirrel.image = loadImage("assets/images/squirrel.png");
  squirrel2.image = loadImage("assets/images/squirrel.png");//**

  //level one, acorns to collet
  acorn1.image = loadImage('assets/images/acorn1.png');
  acorn2.image = loadImage('assets/images/acorn2.png');
  acorn3.image = loadImage('assets/images/acorn1.png');
  acorn4.image = loadImage('assets/images/acorn2.png');
  acorn5.image = loadImage('assets/images/acorn1.png');
  acorn6.image = loadImage('assets/images/acorn2.png');

  //level one, dogs attacking
  dog1.image = loadImage('assets/images/dog1.png');
  dog2.image = loadImage('assets/images/dog2.png');
  dog3.image = loadImage('assets/images/dog3.png');
  dog4.image = loadImage('assets/images/dog4.png');
  dog5.image = loadImage('assets/images/dog3.png');

  //level two, bread to collect
  bread1.image = loadImage('assets/images/dog1.png');//*
  bread2.image = loadImage('assets/images/dog2.png');//*
  bread3.image = loadImage('assets/images/dog3.png');//*
  bread4.image = loadImage('assets/images/dog4.png');//*
  bread5.image = loadImage('assets/images/dog3.png');//*
  bread6.image = loadImage('assets/images/dog3.png');//*


  //level two, anti-maskers
  antiMasker1.image = loadImage('assets/images/dog1.png');//*
  antiMasker2.image = loadImage('assets/images/dog2.png');//*
  antiMasker3.image = loadImage('assets/images/dog3.png');//*
  antiMasker4.image = loadImage('assets/images/dog4.png');//*
  antiMasker5.image = loadImage('assets/images/dog3.png');//*
  antiMasker6.image = loadImage('assets/images/dog3.png');//*

  //level three, WASPS
  wasp1.image = loadImage('assets/images/dog1.png');//*
  wasp2.image = loadImage('assets/images/dog2.png');//*
  wasp3.image = loadImage('assets/images/dog3.png');//*
  wasp4.image = loadImage('assets/images/dog4.png');//*
  wasp5.image = loadImage('assets/images/dog3.png');//*
  wasp6.image = loadImage('assets/images/dog3.png');//*

}

// setup()
//
// Description of setup() goes here.
function setup() {

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
