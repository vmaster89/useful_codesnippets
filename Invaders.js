/*
* Invaders 
* Small quick code example I've coded directly with jsfiddle.net: https://jsfiddle.net/2k1fw9jm/18/
*/ 

// HTML: <canvas id="window" width="500" height="500" style="border: 1px solid black;" ></canvas>
let screen = document.getElementById('window');
let canvas = screen.getContext('2d');

let image = [
	[0,0,0,0,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,0,0,1,0,0,0],
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,0,1,1,0,1,1,1],
  [1,1,0,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,1]
]

let enemy = [
	[0,0,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,0,0,1,1,0,0,1,1],
  [1,1,0,0,1,1,0,0,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,1,0,0,0,0,1,0,1]
]

function rect(x, y, size, color, canvas) {
	canvas.fillStyle = color;
  canvas.fillRect(x,y,size,size);
}

function Hero (x, y,size,canvas,image) {
	this.x = x;
  this.y = y;
  this.start_x = x;
  this.start_y = y;
  this.size = size;
  this.canvas = canvas;
  this.image = image;
}

Hero.prototype.draw = function (rect) {
 	let x = this.x;
  let start_x = this.x;
  let y = this.y;
  let def = this.size;
  for ( let i = 0; i <= this.image.length-1; i+=1 ) {
    x = start_x;
    y += def;
    for ( let j = 0; j <= this.image.length; j+=1 ) {
      x = x + def;
      let color = '#000';
      if ( this.image[i][j] === 0 ) color = '#fff';
      rect(x, y, def, color, this.canvas);
    }	
  }
}

Hero.prototype.move = function ( dir, screen ) {
	if (this.x > screen.width - this.size * this.image.length ) {
  	this.x = screen.width - this.size * this.image.length;
  } else if (this.x < screen.width * 0 ) {
  	this.x = 0;
  } else {
		this.x = this.x+this.size/5 * dir;
  }
}

Hero.prototype.moveY = function ( dir ) {
  this.y = this.y+this.size/2;
}

Hero.prototype.shoot = function (dir) {
	
}

let hero = new Hero( screen.width * 0.4, screen.height * 0.9, 5, canvas, image);
hero.draw(rect);

let x = 0;
let enemies = [];
let y_axis = 0;
for ( let j = 0; j <= 4; j+=1 ) {
  x = 0;
  for ( let i = 0; i <= 5; i+=1 ) {
    x += 55;
    enemies.push(
      new Hero( screen.width * 0.05 + x, y_axis, 5, canvas, enemy)
    );
  }
  y_axis += 55;
}

let activeKeys = {};
document.addEventListener("keydown", function (event) {
  activeKeys[event.key] = true;
  if (event.key !== ' ') {
    activeKeys[event.key] = true;
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key === ' ') hero.shoot(1);
});

document.addEventListener("keyup", function (event) {
  delete activeKeys[event.key];
});

let f = 1;
let move = true;
setInterval( function() {
	if (activeKeys['ArrowRight']) hero.move(1, screen);
  if (activeKeys['ArrowLeft']) hero.move(-1, screen);
	canvas.clearRect(0, 0, screen.width, screen.height);
  hero.draw(rect);
  enemies.forEach( oponent => {
  	if ( oponent.x > screen.width - 50  ) {
    	f = -1;
      move = true;
    } 
    if ( oponent.x === 0 ) {
    	f = 1;
    }
    oponent.move(f, screen);
    oponent.draw(rect);
  });
  if (move) {
  	enemies.forEach ( oponent => oponent.moveY() );
    move = false;
  }
}, 10 );
