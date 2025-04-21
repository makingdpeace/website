let canvas;
let ballX = 100;
let ballY = 100;
let ballSpeedX = 3;
let ballSpeedY = 2;
let ballRadius = 25;

function setup() {
  const container = document.getElementById('p5-sketch-container');
  canvas = createCanvas(container.offsetWidth, container.offsetHeight);
  canvas.parent('p5-sketch-container');
  noStroke();
}

function draw() {
  clear(); // transparent background
  fill(255);
  ellipse(ballX, ballY, ballRadius * 2);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Bounce off left and right edges
  if (ballX - ballRadius < 0 || ballX + ballRadius > width) {
    ballSpeedX *= -1;
  }

  // Bounce off top and bottom edges
  if (ballY - ballRadius < 0 || ballY + ballRadius > height) {
    ballSpeedY *= -1;
  }
}

function windowResized() {
  const container = document.getElementById('p5-sketch-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);

  // Optional: reposition ball if it goes out of bounds
  ballX = constrain(ballX, ballRadius, width - ballRadius);
  ballY = constrain(ballY, ballRadius, height - ballRadius);
}
