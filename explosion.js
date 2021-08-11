const screen = document.getElementById('display').getContext('2d');

screen.fillStyle = 'black';
screen.fillRect(0,0,1000,500);

let x = 200, y = 200;

function point(x, y, canvas, size) {
	this.x = x;
 	this.y = y;
  this.canvas = canvas; 
  this.size = size;
}

point.prototype.drawPoint = function (x, y, color) {
	this.canvas.fillStyle = color;
	this.canvas.fillRect(x,y,this.size,this.size);
}

let addToX = 0, addToY = 0;
let radius = 5;

let pointRepository = new Map();

for ( let i = 0; i < 100; i += 1 ) {
	pointRepository.set(i, new point( 500, 500, screen, 5));
}

let pointRepository2 = new Map();

for ( let i = 0; i < 100; i += 1 ) {
	pointRepository2.set(i, new point( 500, 500, screen, 5));
}


let angle = Math.random()*10, r = 10;
let red, yellow; 
let i = 15; 
function animate() {
	if ( i > 0 ) i -= 0.1;
	screen.clearRect(0, 0, 1000, 500);
  screen.fillStyle = 'black';
	screen.fillRect(0,0,1000,500);
	requestAnimationFrame(animate);
	red = `#${Math.round(i).toString(16)}00`;
  yellow = `#${Math.round(i).toString(16)}${Math.round(i).toString(16)}0`;
  let item;
  let item2;
  r += 1;
  angle += Math.random()*10;
  for ( let i = 0; i < 10; i += 1 ) {
    item = pointRepository.get(i);
    item.drawPoint(x + Math.random()*10 + r *  Math.cos(Math.round(i)), y + Math.random()*10 + r * Math.sin(Math.round(i)), red)
  }
  for ( let i = 0; i < 10; i += 1 ) {
    item2 = pointRepository2.get(i);
    item2.drawPoint(x + Math.random()*100 + r *  Math.cos(Math.round(i)), y + Math.random()*100 + r * Math.sin(Math.round(i)), yellow)
  }
}
animate();
