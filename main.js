var mouseEvent = "empty"
var lastPositionOfX, lastPositionOfY

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = "1";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_possition_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_possition_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last possition of x and y coordinates = ");
        console.log("x = " + lastPositionOfX +"y = " +lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("current possition of x and y coordinates = ");
        console.log("x = " + current_possition_of_mouse_x +"y = " +current_possition_of_mouse_x);
        ctx.lineTo(current_possition_of_mouse_x, current_possition_of_mouse_y);
        ctx.stroke();
        
    } 
    lastPositionOfX = current_possition_of_mouse_x;
    lastPositionOfY = current_possition_of_mouse_y;
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height )
}