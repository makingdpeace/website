let x = 100;
let y = 100;
let speedX = 2;
let speedY = 3;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-sketch-container');
  noStroke();
  background(0, 0, 0, 0); // Transparent background at setup
}

function draw() {
  background(0);
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  x += speedX;
  y += speedY;

  if (x > width || x < 0) {
    speedX *= -1;
  }
  if (y > height || y < 0) {
    speedY *= -1;
  }
}
