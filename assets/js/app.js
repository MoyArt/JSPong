// Global Variables
let canvas,
canvasContext,
ballX = 50,
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
    ballX = ballX + 10;
    if(ballX === 800){
        ballX = 0;
        ballSpeed = ballSpeed + 10;
    }
    console.log(ballX);
    console.log(ballSpeed);
}

function drawEverithing(){   
    /* First we draw our background*/
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    /* Then we draw our paddle */
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(1, 250, 15, 100);
    /* Finally we draw our ball */
    canvasContext.fillStyle = 'lime';
    canvasContext.fillRect(ballX, 200, 10, 10);
}

