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




let canvas;
let peaceImage;
let peaceX = 100;
let peaceY = 100;
let peaceSpeedX = 3;
let peaceSpeedY = 2;
let peaceRadius = 25; // Optional: Keep for collision detection

function preload() {
  // Load the image in preload() to ensure it's ready before setup
  peaceImage = loadImage('seed-of-life.png');
}

function setup() {
  const container = document.getElementById('p5-sketch-container');
  canvas = createCanvas(container.offsetWidth, container.offsetHeight);
  canvas.parent('p5-sketch-container');
  noStroke();
}

function draw() {
  clear(); // transparent background
  
  // Draw the image at the ball's position
  image(peaceImage, peaceX - peaceRadius, peaceY - peaceRadius, peaceRadius * 2, peaceRadius * 2);

  peaceX +=  peaceSpeedX;
  peaceY +=  peaceSpeedY;

  // Bounce off left and right edges
  if (peaceX - peaceRadius < 0 || peaceX + peaceRadius > width) {
    peaceSpeedX *= -1;
  }

  // Bounce off top and bottom edges
  if (peaceY - peaceRadius < 0 || peaceY + peaceRadius > height) {
    peaceSpeedY *= -1;
  }
}

function windowResized() {
  const container = document.getElementById('p5-sketch-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);

  // Optional: reposition ball if it goes out of bounds
  peaceX = constrain(peaceX, peaceRadius, width - peaceRadius);
  peaceY = constrain(peaceY, peaceRadius, height - peaceRadius);
}

