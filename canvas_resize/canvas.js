var canvas = document.querySelector('canvas');

// setting the size of canvas to match size of browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// allows to create geometric objects on 2d canvas
var context = canvas.getContext('2d');

context.fillRect(100, 100, 100, 100);
context.fillRect(200, 200, 100, 100);
context.fillRect(300, 300, 100, 100);

console.log(canvas);