var canvas = document.querySelector('canvas');

// setting the size of canvas to match size of browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// allows to create geometric objects on 2d canvas
var context = canvas.getContext('2d');

// Rectangle drawing
// context.fillStyle = "rgba(255, 0, 0, 0.5)";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "rgba(0, 0, 255, 0.5)";
// context.fillRect(200, 200, 100, 100);
// context.fillStyle = "rgba(0, 255, 0, 0.5)";
// context.fillRect(300, 300, 100, 100);

// Line drawing
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.strokeStyle = "#fa34a3";
// context.stroke();

// Arc / Circle drawing
// context.beginPath();
// context.arc(300, 300, 30, 0, Math.PI * 2, false);
// context.strokeStyle = 'blue';
// context.stroke();

// for (var i = 0; i < 10; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     context.beginPath();
//     context.arc(x, y, 30, 0, Math.PI * 2, false);
//     context.strokeStyle = 'blue';
//     context.stroke();
// }

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'blue';
        context.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


var circleArray = [];

for(var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight - radius*2) + radius;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}


function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};

animate();