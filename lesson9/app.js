// What is canvas?
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
// https://www.w3schools.com/html/html5_canvas.asp
// https://www.w3schools.com/graphics/canvas_intro.asp
// https://www.w3schools.com/graphics/canvas_reference.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// How to create it and use it
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const LEFT_MARGIN = 5;
const TOP_MARGIN = LEFT_MARGIN;
const NUMBER_OF_BREAKS = 8;
const BREAK_WIDTH = (CANVAS_WIDTH - (NUMBER_OF_BREAKS + 1) * LEFT_MARGIN) / NUMBER_OF_BREAKS;
console.log(BREAK_WIDTH);

const canvas = document.getElementById('myCanvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext('2d');
console.log(ctx);

// Draw rectangles
// =================
// fillRect

// ctx.fillStyle = 'red';
// for (let i = 0; i< NUMBER_OF_BREAKS; i++) {
//     ctx.fillRect(LEFT_MARGIN*(i+1)+BREAK_WIDTH*i, LEFT_MARGIN, BREAK_WIDTH, 20);
// }

// ctx.fillRect(100+2*LEFT_MARGIN, LEFT_MARGIN, 100, 20);
// ctx.fillRect(200+3*LEFT_MARGIN, LEFT_MARGIN, 100, 20);
// ctx.fillRect(20, 20, 100, 50);

// strokeRect
ctx.strokeStyle = 'red';
ctx.lineWidth = 4;
ctx.strokeRect(20, 20, 100, 50);
ctx.fillStyle = 'yellow';
ctx.fillRect(22, 24, 92, 42)

// clearRect
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

// fillText
ctx.fillStyle = 'green';
ctx.fillText("Hello Canvas", 100, 100);

// strokeText
ctx.lineWidth = 2;
ctx.font = "70px Arial";
ctx.strokeText("Hello WOrld", 200, 100);

// Translate and rotate
// ===================
function degreedToRadian(degree) {
    return degree * Math.PI / 180;
}
// ctx.rotate(degreedToRadian(-30));
// ctx.fillRect(100, 100, 100, 50);

// ctx.fillRect(100, 100, 100, 50);
// ctx.translate(200, 200);
// ctx.fillRect(100, 100, 100, 50);

// ctx.rotate(degreedToRadian(-30));
// ctx.fillRect(100, 100, 100, 50);

// Paths   beginPath, moveTo, lineTo, closePath, stroke, fill
// ==============

// ctx.rotate(degreedToRadian(5));
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 200);
// ctx.lineTo(200, 150);
// // ctx.lineTo(100, 100);
// ctx.closePath();
// ctx.strokeStyle = 'green';
// ctx.fillStyle = 'white';
// ctx.fill();
// ctx.stroke();

// Arcs
// ====================
ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = 'brown'
ctx.arc(100, 100, 50, 0, 1.4*Math.PI);
// ctx.stroke();
ctx.fillStyle = 'pink';
ctx.fill()

// Draw image
// ====================
const img = new Image();
img.onload = function(){
    console.log(img.width, img.height);
    // ctx.drawImage(img, 100, 100, 200, 200);
    // const imageData = ctx.getImageData(300, 300, 300, 200);

    // ctx.putImageData(imageData, 0, 0);

};
img.src = 'tesla_car_x.png';


// Write text
// ====================

// Ball animation
// ====================
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

const ball = {
    x: 100,
    y: 100,
    r: 25,
    dx: 0,
    dy: 0
}

update();
function drawBall() {
    clear();
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'blue';
    ctx.fill();

    if (ball.x + ball.r >= CANVAS_WIDTH || ball.x - ball.r <= 0) {
        ball.dx *= -1;
    }

    if (ball.y + ball.r >= CANVAS_HEIGHT || ball.y - ball.r <= 0) {
        ball.dy *= -1;
    }

    // ball.dx = 1;
    // ball.dy = 1;
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function clear() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update(){
    drawBall();

    requestAnimationFrame(update);
}

document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key == 'ArrowUp') {
        ball.dy = -3;
    } else if (e.key == 'ArrowDown') {
        ball.dy = 3;
    } else if (e.key === 'ArrowRight') {
        ball.dx = 3;
    } else if (e.key === 'ArrowLeft') {
        ball.dx = -3;
    }
})

document.addEventListener('keyup', function (e) {
    if (e.key == 'ArrowUp') {
        ball.dy = 0;
    } else if (e.key == 'ArrowDown') {
        ball.dy = 0;
    } else if (e.key === 'ArrowRight') {
        ball.dx = 0;
    } else if (e.key === 'ArrowLeft') {
        ball.dx = 0;
    }
})