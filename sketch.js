//Idea: create square that shrinks over time, maybe speeds up shrinking
//Click on square to make it bigger by a constant amount, so you have to click faster to keep it going
//Check for when it reaches a certain size, end game
//maybe display time

canvasSize_x = 720; canvasSize_y = 480;

//setup global variables
let clicks = 0;
let timer = 0;
rate = 1.5;
    
//setup states
gameEnd = false;

function setup() {
  createCanvas(720, 480);
    //setup shape
    size = 200;
    shape_x = width/2 - size/2;
    shape_y = height/2 - size/2;
    
    console.log("setup");
}
 
function shape() {
    square(shape_x, shape_y, size);
}

function mousePressed() {
  size = size + 10;
  clicks++;
}

function draw() {
    background(220);
    
  if (gameEnd == false) { 
    shape();
    shape_x = width/2 - size/2;
    shape_y = height/2 - size/2;
    size = size - rate;
    //draw timer
    textFont('Helvetica');
    textAlign(CENTER, CENTER);
    textSize(35);
    text('TIME: ' + timer, width/2, 30);
    if (frameCount % 6 == 0) {
      timer = round(timer = timer + 0.1, 2); 
    }
    rate = rate + 0.004;
    
    if (size < 10) {
      gameEnd = true;
    }
  } else {
    
    textFont('Helvetica');
    textSize(30);
    textAlign(CENTER);
    text('The square died.\nTime: ' + timer + '\nClicks: ' + clicks, width/2, height/2);
    
  }
}
