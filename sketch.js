shape_x = 200;
shape_y = 200;
//adding comment to test git
shape_dx = 2;
shape_dy = 0;

function setup() {
    createCanvas(400, 400);
}
 
function shape() {
    square(shape_x, shape_y, 50);
}

function draw() {
    background(220);
    shape();
    shape_x = shape_x + shape_dx;
    shape_y = shape_y + shape_dy;
    if ((shape_x < 0) || (shape_x > 400)) {
        shape_dx = -shape_dx;
    }
    if ((shape_y < 0) || (shape_y > 400)) {
        shape_dy = -shape_dy;
    }
    shape_dy = shape_dy + 0.05;
}

function mousePressed() {
    shape_x = mouseX;
    shape_y = mouseY;
    shape_dx = 0;
    shape_dy = 0;
}