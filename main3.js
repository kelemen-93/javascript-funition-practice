var canvas = document.getElementById('myCanvasThree');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var lineCounter = 0;

function lineToCenter(positionX, positionY, color) {
  
  context.beginPath();
  context.moveTo(positionX, positionY);
  context.lineTo(canvasWidth / 2, canvasHeight / 2);
  
  context.strokeStyle = color;
  context.stroke();
}

function random(max, min) {
  
  return Math.floor(Math.random() * (max - min + 1) + min);
  
}

for (lineCounter; lineCounter < 1000; lineCounter += 1) {
  
  lineToCenter(random(canvasWidth, 0), random(canvasHeight, 0), 'teal');
  
}

