/**
* HTML: <canvas id="window" width="500" height="500" style="border: 1px solid black;" ></canvas>
* <div id="color"></div>
* JS Fiddle: https://jsfiddle.net/crqo4mgy/8/
**/

let screen = document.getElementById('window');
let canvas = screen.getContext('2d');
const colorButtonArea = document.getElementById('color');
let html = colorButtonArea.innerHTML || '';

const colorMap = new Map();

colorMap.set(15, 'white');
colorMap.set(14, 'yellow');
colorMap.set(13, 'purple');
colorMap.set(12, 'maroon');
colorMap.set(11, 'teal');
colorMap.set(10, 'green');
colorMap.set(9, 'navy');
colorMap.set(8, 'gray');
colorMap.set(7, 'silver');
colorMap.set(6, 'brown');
colorMap.set(5, 'fuchsia');
colorMap.set(4, 'red');
colorMap.set(3, 'aqua');
colorMap.set(2, 'green');
colorMap.set(1, 'blue');
colorMap.set(0, 'black');

for ( let i = 0; i <= 15; i+= 1 ) {
	html = html + `<input type='submit' value='${colorMap.get(i)}' style='background-color: ${colorMap.get(i)}' id="${i}"/>`;
}

colorButtonArea.innerHTML = html;

let pickedColor = 5;

function saveColor (color) {
	pickedColor = color;
}

function getColor () {
	return pickedColor ?? 5;
}

for ( let i = 0; i <= 15; i+= 1 ) {
	let button = document.getElementById(i);
	button.addEventListener('click', (e) => {
  	saveColor(i);
    console.log(i);
  });
}

let mouseX = 0;
let mouseY = 0;

let img = [];

for ( let j = 0; j <= 33; j += 1 ) {
	let arr = [];
	for ( let i = 0; i <= 33; i += 1 ) {
    arr.push(5);
  }
  img.push(arr);
}

function rect(x, y, size, color, canvas) {
	canvas.fillStyle = color;
  canvas.fillRect(x,y,size,size);
}

let x, y = 0;

function drawMap(x, y) {
	for ( let j = 0; j <= img.length - 1; j+= 1) {
	x = 0;
  y = y+1;
	for ( let i = 0; i <= img[j].length - 1; i+= 1) {
  	x = x+1;
  	rect(x*10,y*10,10,colorMap.get(img[j][i]), canvas);
  }
	}
}

drawMap(x, y);

screen.onmousedown = function (e) {
	mouseX = e.x - e.x % 10;
  mouseY = e.y - e.y % 10;
  //console.log(e.x + ' ' + e.y);
  //console.log(mouseX + ' ' + mouseY);
  img[parseInt(mouseY/10 - 2)][parseInt(mouseX/10 - 2)] = getColor();
  console.log(getColor());
  drawMap(0, 0);
};

/* 
0, 0 = 20, 20
10, 0 = 30, 20 
320, 320
....
*/ 
