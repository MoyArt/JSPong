// Global Variables
let canvas,
canvasContext,
ballX = 50,
ballSpeedX = 10,
framesPerSecond = 30,
ballSpeed = 1000/framesPerSecond;
/* 
We use canvas to all concerns about screen size. & we use Canvas Context to all graphical information.
*/

window.onload = function(){
    console.log('Window finished loading, App scripts loaded');
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(function(){
        moveEverithing();
        drawEverithing();
    }, ballSpeed)
    
}

function moveEverithing(){
    ballX = ballX + ballSpeedX;
    if(ballX<0){
        ballSpeedX = -ballSpeedX;
    };
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    };
}

function drawEverithing(){   
    /* First we draw our background*/
    drawElement(0, 0, canvas.width, canvas.height, 'black');
    /* Then we draw our paddle */
    drawElement(1, 250, 15, 100, 'white');
    /* Finally we draw our ball */
    drawElement(ballX, 200, 10, 10, 'lime');
}

function drawElement(topX, topY, canvasWidth, canvasHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topX, topY, canvasWidth, canvasHeight);
}
