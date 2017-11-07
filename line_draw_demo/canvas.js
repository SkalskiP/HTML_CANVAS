
var canvas = document.querySelector('canvas');

// setting the size of canvas to match size of browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// =====================================================================================================================
// CLASS DEFINITION
// =====================================================================================================================

// Drawing active flag
var draw_active = false;

// Drawing continue flag
var draw_continues = false;

// Array storing made lines
var lines = [];

// Array storing made rectangles
var rectangles = [];

// Flag indicating whether the drawing mode is active

// Varriable holding current position of mouse
var mouse = {
    x: undefined,
    y: undefined
}

// Class point

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Class line

class Line {
    constructor() {
        this.points = [];
    }

    addPoint(x, y) {
        var point = new Point(x, y);
        this.points.push(point);
    }

    callOf() {
        this.points = [];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        ctx.lineTo(this.points[1].x, this.points[1].y);
        ctx.stroke();
    }

    drawActive(ctx, mouse) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }
}

// Function that draw stage
function drawStage(context, mouse) {

    // Clearing canvas
    context.clearRect(0, 0, innerWidth, innerHeight);

    // Drawing active line
    if(draw_active) {
        current_line.drawActive(context, mouse);
    }
    // Drawing all previous lines
    for(var i = 0; i < lines.length; i++) {
        lines[i].draw(context);
    }
}

// =====================================================================================================================
// DRAWING
// =====================================================================================================================

// Line object that is currently edited
var current_line = new Line();

// Allows to create geometric objects on 2d canvas
var context = canvas.getContext('2d');

// =====================================================================================================================
// EVENTS
// =====================================================================================================================

// Event launching functions after mouse click

window.addEventListener('click', function(event) {
    
    current_line.addPoint(mouse.x, mouse.y);

    if(!draw_active) {
        draw_active = true;
    } 
    
    else {
        lines.push(current_line);
        current_line = new Line();

        if (draw_continues) {
            current_line.addPoint(mouse.x, mouse.y);
        } else {
            draw_active = false;
        }
    }
});

// Event launching functions after mouse move

window.addEventListener('mousemove', function(event) {

    // Updated values in mouse variable
    mouse.x = event.x;
    mouse.y = event.y;

    // Drawing stage content
    drawStage(context, mouse);
});


// Event launching functions after kay press

window.addEventListener('keyup', function(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
        console.log("ENTER");
    }
    else if(event.keyCode === 27) {
        current_line.callOf();
        draw_active = false;

        // Drawing stage content
        drawStage(context, mouse);
    }
    else if(event.keyCode === 49) {
        // Switching to continues mode
        if (draw_continues) {
            draw_continues = false;
        } else {
            draw_continues = true;
        }
    }
});

// Event setting the size of canvas to match size of browser

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// =====================================================================================================================
