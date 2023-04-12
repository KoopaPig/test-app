//Click on square to make it bigger by a constant amount, so you have to click faster to keep it going
//Displays clicks and time at end of game (once square is too small)

const { expect } = require("chai");

canvasSize_x = 720; canvasSize_y = 480;

//setup global variables
let clicks = 0;
let timer = 0;
rate = 1.5;
    
//setup states
gameEnd = false;

//chai testing
assert = chai.assert;
expect = chai.expect;

//test functions
function addxy(x,y) {
  return x + y;
}

function testStuff() {
  console.log("testStuff");
  assert(addxy(2,3) == 5, "equality fails"); //second argument is error msg
  expect(addxy(4,4)).to.equal(8);
  console.log("testStuff done");
}

//setup
function setup() {
  createCanvas(720, 480);
    //setup shape
    size = 200;
    shape_x = width/2 - size/2;
    shape_y = height/2 - size/2;
    
    testStuff();
    console.log("setup");
}
 
function shape() {
    square(shape_x, shape_y, size);
}

function mousePressed() {
  size = size + 10 + rate/2 * 10;
  if (gameEnd == false) { clicks++; }
}

function draw() {
    background(220);
    
  if (gameEnd == false) { 
    shape();
    shape_x = width/2 - size/2;
    shape_y = height/2 - size/2;
    size = size - rate;
    //draw instructions
    textFont('Helvetica');
    textAlign(CENTER, CENTER);
    textSize(30);
    text('Click anywhere to keep the box big.', width/2, height - 30);
    //draw timer
    textFont('Helvetica');
    textAlign(CENTER, CENTER);
    textSize(35);
    text('TIME: ' + timer, width/2, 30);
    if (frameCount % 6 == 0) {
      timer = round(timer = timer + 0.1, 2); 
    }
    rate = rate + 0.002;
    
    if (size < 10) { gameEnd = true; }
  } else {
    
    textFont('Helvetica');
    textSize(30);
    textAlign(CENTER);
    text('The box died.\nTime: ' + timer + '\nClicks: ' + clicks, width/2, height/2);
    
  }
}
