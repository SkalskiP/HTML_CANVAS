var canvas = document.querySelector('canvas');

// setting the size of canvas to match size of browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pointsArray = [];

var mouse = {
    x: undefined,
    y:undefined
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}




// // allows to create geometric objects on 2d canvas
// var context = canvas.getContext('2d');

// var pointsArray = [];

// window.addEventListener('click', 
//     function(event) {
//         var point =[event.x, event.y];
//         pointsArray.push(point);
//         console.log(pointsArray);
// });

// var mouse = {
//     x: undefined,
//     y:undefined
// }

// window.addEventListener('mousemove', 
//     function(event) {
//         mouse.x = event.x;
//         mouse.y = event.y;
//         drawLine(pointsArray);
// });

// window.addEventListener('resize', 
//     function() {
//         // setting the size of canvas to match size of browser
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
// })

// function drawLine(pointsArray) {
//     if(pointsArray.length == 0) {
//         return
//     } else {
//         context.beginPath();
//         context.moveTo(pointsArray[0].x, pointsArray[0].y);
//         for(var i = 1; i < pointsArray.length; i++) {
//             context.lineTo(pointsArray[i].x, pointsArray[i].y);
//         }
//         context.stroke();
//     }
// }

// var pointsArray1 = [
//     [10, 20],
//     [10, 50]
// ];

// context.beginPath();
// context.moveTo(pointsArray1[0].x, pointsArray1[0].y);
// context.lineTo(pointsArray1[1].x, pointsArray1[1].y)
// context.stroke();

// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.stroke();