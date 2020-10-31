"use strict";

//Our cars array and its starting length
// let cars = [];

//our vehicles (new)
let vehicles = [];
//New: how many of each kind
let numCars = 5;
//
// // Our motorcycles
// let motorcycles = [];
let numMotorcycles = 10;

//Set up the canvas and our cars
function setup() {
  createCanvas(600, 600);
  //Create the correct number of cars and put them in our array
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  //Create correct number of motorcycles and put them in our array
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }
}

//Display and move the cars.
function draw() {
  background(0);

  //Go through all the cars and move, wrap, and display them.
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }

  // // Go through all the motorcycles and move, wrap, and display them
  // for (let i = 0; i < motorcycles.length; i++) {
  //   let motorcycle = motorcycles[i];
  //   motorcycle.move();
  //   motorcycle.wrap();
  //   motorcycle.display();
  // }
}
