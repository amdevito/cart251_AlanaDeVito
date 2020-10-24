/**************************************************
Intro to Object Oriented Programming
Alana DeVito

**************************************************/
"use strict";
// our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // how many flowers in the garedn
  numFlowers: 20,
  //an array to our bees
  bee: [],
  //how many bees in the garden
  numBee: 5,
  //The color of the grass(background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120,
  },
};

function setup() {
  createCanvas(600, 600);

  //Create our flower by counting up the number of the numFlowers
  for (let i = 0; i < garden.numFlowers; i++) {
    //create variables for our arguements for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    };
    // create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // add the flower  to the array of Flowers
    garden.flowers.push(flower);
  }

  //SORT the array using the sortByY() function
  garden.flowers.sort(sortByY);
}

//create our bees by counting up to the number of bees
for (let i = 0; i < garden.numBee; i++) {
  //create variables for our arguements for clarity
  let x = random(0, width);
  let y = random(0, width);
  // create a new bee using the arguements
  let bee = new Bee(x, y);
  //add the bee to the array of bees
  garden.bees.push(bee);
}

//sortByY takes two flowers as parameters to compare
// it should return a negative number if flower1 should come
//BEFORE flower 2 in the array, a positive number if flower1 should
//come AFTER flower2 in the array, and 0 if there they have the same priority

function sortByY(flower1, flower2) {
  //We achieve the above by subtracting flower2's y position from flower  1's
  return flower1.y - flower2.y;
}

// createFlower()
// Creates a new JavaScript Object describing a flower and returns it

function createFlower() {
  // Create our Object
  let flower = {
    //position and size information
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stemLength: 75,
    stemThickness: 10,
    petalThickness: 10,
    // color information
    stemColor: {
      r: 50,
      g: 150,
      b: 50,
    },
    petalColor: {
      r: 200,
      g: 50,
      b: 50,
    },
    centreColor: {
      r: 50,
      g: 0,
      b: 0,
    },
  };
  return flower;
}

function draw() {
  // Display grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  //Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // NEW! Check if this flower is alive before updating it
    if (flower.alive) {
      //update the flower by shrinking it and displaying it
      flower.shrink(); //NEW! Shrink living flowers every frame
      flower.display();
    }
  }

  //loop through all the bees in the array and display them
  for (let i = 0; i < garden.bee.length; i++) {
    let bee = garden.bee[i];
    //check if this bee is alive
    if (bee.alive) {
      // update the bee by shrinking, moving and displaying it
      bee.shrink();
      bee.move();
    }
  }
}

//new go thorugh the entire flower array and try to pollinate the flowers!
//note that we use j in our for-loop here because we're alread inside
// a for-loop using it!
for (let j = 0; j < garden.flowers.length; j++) {
  let flower = garden.flowers[j];
  bee.tryToPollinate(flower);
}
//display the bee
bee.display();

//nEW! mousePressed() calls the equivalent mousePressed() method on every flower
function mousePressed() {
  for (let i = 0; i < garden.flowers.length; i++) {
    //get the current flower in the Loop
    let flower = garden.flowers[i];
    //call the flower's mousePressed() method
    flower.mousePressed();
  }
}

//displayFlower(flower)
//Displays the provided flower on the canvas

function displayFlower(flower) {
  push();
  // Draw a line for the stem
  strokeWeight(flower.stemThickness);
  stroke(flower.stemColor.r, flower.stemColor.g, flower.stemColor.b);
  line(flower.x, flower.y, flower.x, flower.y + flower.stemLength);
  // Draw a circle with a heavy outline for the flowers
  strokeWeight(flower.petalThickness);
  fill(flower.centreColor.r, flower.centreColor.g, flower.centreColor.b);
  stroke(flower.petalColor.r, flower.petalColor.g, flower.petalColor.b);
  ellipse(flower.x, flower.y, flower.size);
  pop();
}
