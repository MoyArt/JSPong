// Global Variables
let canvas,
canvasContext;
/* 
We use canvas to all concerns about screen size. & we use Canvas Context to all graphical information.
*/

window.onload = function(){
    console.log('Window finished loading, App scripts loaded');
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

