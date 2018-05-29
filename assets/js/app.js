// Global Variables
/* 
    We use canvas to all concerns about screen size. & we use Canvas Context to all graphical information.
*/
let canvas,
canvasContext,
ballX = 50,
ballY = 50,
ballSpeedX = 10,
ballSpeedY = 5,
framesPerSecond = 30,
p1PaddleY = 250,
p1PaddleHeight = 100,
ballSpeed = 1000/framesPerSecond;

/* 
    our onload function.
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

/*
    This function hel us to move everything on the canvas
*/
function moveEverithing(){
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    if(ballX<0){
        ballSpeedX = -ballSpeedX;
    };
    if(ballY<0){
        ballSpeedY = -ballSpeedY;
    };
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    };
    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
    }
}

/*
    This function draws all the elements on the canvas
*/
function drawEverithing(){   
    /* First we draw our background*/
    drawElement(0, 0, canvas.width, canvas.height, 'black');
    /* Then we draw our paddle */
    drawElement(1, p1PaddleY, 15, p1PaddleHeight, 'white');
    /* Finally we draw our ball */
    drawCircle(ballX, ballY, 10, 'lime');
}

/*
    This function help us to create new round elements to my canvas
*/
function drawCircle(centerX, centerY, radius, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

/*
    This function help us to create new box elements to my canvas
*/
function drawElement(topX, topY, canvasWidth, canvasHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topX, topY, canvasWidth, canvasHeight);
}
