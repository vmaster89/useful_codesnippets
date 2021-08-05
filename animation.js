const screen = document.getElementById('display').getContext('2d');

screen.fillStyle = 'black';
screen.fillRect(10,10,1,1);

let x = 800, y = 400;

function point(x, y, canvas, color
	canvas.fillStyle = color;
  canvas.fillRect(x, y, 2, 2);
}

let addToX = 0, addToY = 0;
let radius = 100;

let i = 0;
let j = 0;
function animate() {
requestAnimationFrame(animate);
	let color = `rgb(${i <= 255 ?  i: 0}, ${i <= 255 ? i+1 : 0}, 250)`;
  //for (let i = 0; i<=1000; i++) {
  i += 400;
  j += 0.1;
    x = x - Math.cos(i)*200;
    y = y + Math.sin(i)*radius;

    point(x - j , y, screen, color); 
  }
 
 //}
animate();
