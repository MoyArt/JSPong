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
p2PaddleY = 250,
p1PaddleHeight = 100,
player1Score = 0,
player2Score = 0,
paddleThickness = 15,
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
    }, ballSpeed);
    canvas.addEventListener('mousemove', (e)=>{
        let mousePos = calculateMousePosition(e);
        p1PaddleY = mousePos.y - (p1PaddleHeight/2);
    });
    
}
/*
    This function resets the ball and changes the ball trajectory
*/
function ballReset(){
    ballX = canvas.width/2;
    ballY = canvas.height/2;
    ballSpeedX = -ballSpeedX;
}
/* 
    This function calculates the mouse position 
*/
function calculateMousePosition(e){
    let rect = canvas.getBoundingClientRect(),
        root = document.documentElement,
        mouseX = e.clientX - rect.left - root.scrollLeft,
        mouseY = e.clientY - rect.top - root.scrollTop;
        return {
            x: mouseX,
            y: mouseY 
        }
}
/*
    Computer AI Paddle Function
*/
function computerMovement(){
    //We calculate the center of the paddle
    let paddle2Center = p2PaddleY + (p1PaddleHeight/2);
    if(paddle2Center < ballY - 35){
        p2PaddleY += 6;
    }else if(paddle2Center > ballY + 35){
        p2PaddleY -= 6;
    }
}
/*
    This function hel us to move everything on the canvas
*/
function moveEverithing(){
    computerMovement()
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if(ballX<0){
        //ballSpeedX = -ballSpeedX;
        if(ballY>p1PaddleY && ballY<p1PaddleY + p1PaddleHeight){
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (p1PaddleY + p1PaddleHeight/2);
            ballSpeedY = deltaY * 0.35;
        }else{
            ballReset();
            player2Score +=1;
        }
    };
    if(ballY<0){
        ballSpeedY = -ballSpeedY;
    };
    if(ballX > canvas.width){
        if(ballY>p2PaddleY && ballY<p2PaddleY + p1PaddleHeight){
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (p2PaddleY + p1PaddleHeight/2);
            ballSpeedY = deltaY * 0.35;
        }else{
            ballReset();
            player1Score +=1;
        }
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
    /* Then we draw our ball */
    drawCircle(ballX, ballY, 10, 'lime');
    /* Then we draw our Player 1 paddle */
    drawElement(0, p1PaddleY, paddleThickness, p1PaddleHeight, 'white');
    /* Then we draw our Player 2 paddle */
    drawElement((canvas.width - paddleThickness), p2PaddleY, paddleThickness, p1PaddleHeight, 'white');
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);
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
