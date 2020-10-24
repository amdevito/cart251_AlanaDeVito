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
    // create a new flower
    let flower = new Flower();
    // add the flower  to the array of numFlowers
    garden.flowers.push(flower);
  }

  //SORT the array using the sortByY() function
  garden.flowers.sort(sortByY);
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
    flower.display();
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
