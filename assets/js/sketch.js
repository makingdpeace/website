let x = 100;
let y = 100;
let speedX = 2;
let speedY = 3;
let ballRadius = 25; // Radius of the ball for collision detection
let canvas;

function setup() {
  let container = document.getElementById('p5-sketch-container');
  canvas = createCanvas(container.offsetWidth, container.offsetHeight);
  canvas.parent('p5-sketch-container');
  noStroke();
  }

function draw() {
  clear(); // Keep the background transparent

  fill(255, 0, 0); // Ball color (red)
  ellipse(x, y, ballRadius * 2, ballRadius * 2); // Draw the ball

  // Update ball position
  x += speedX;
  y += speedY;

  // Check if the ball hits the left or right edge
  if (x - ballRadius < 0 || x + ballRadius > container.offsetWidth) {
    speedX *= -1; // Reverse horizontal direction if hitting left or right
  }

  // Check if the ball hits the top or bottom edge
  if (y - ballRadius < 0 || y + ballRadius > container.offsetHeight) {
    speedY *= -1; // Reverse vertical direction if hitting top or bottom
  }

function windowResized() {
  let container = document.getElementById('p5-sketch-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
}
