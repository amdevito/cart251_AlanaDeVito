/**************************************************
Functions
Alana DeVito

Functions Experiments3
Functions with return values
See below for a possible function
**************************************************/

function setup() {
  createCanvas(windowWidth, windowHeight); //(1000, 1000)

  let hotCelsius = toCelsius(100);
  console.log(`100 degrees Fahrenheit is ${hotCelsius} in Celsius.`)

  let coldCelsius = toCelsius(10);
  console.log(`10 degrees Fahrenheit is ${coldCelsius} in Celsius.`)
}

function draw() {
  background(0);
}

function toCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}


// //function unit(u) = {
//   let unit = height/width * u;
//  return unit;
// }
