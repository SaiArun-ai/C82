var cx ;
var cy ;
var lx  = 0 ;
var ly  = 0;
var ME ;
var widthOL = 5 ;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var colour = "black";
canvas.addEventListener("mousedown",my_MouseDown);
function my_MouseDown(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    ME =    "MouseDown";
}
canvas.addEventListener("mouseUp",my_MouseUp);
function my_MouseUp(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    ME =    "MouseUp";
}
canvas.addEventListener("mouseleave",my_MouseLeave);
function my_MouseLeave(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    ME =    "MouseLeave";
}
canvas.addEventListener("mousemove",my_MouseMove);
function my_MouseMove(e){
    cx = e.clientX - canvas.offsetLeft ;
    cy = e.clientY - canvas.offsetTop ;
    if(ME == "MouseDown"){
        colour = document.getElementById("Colour-Name").value;
        widthOL = document.getElementById("Width").value ;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthOL;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lx = cx ;
    ly = cy ;
    
}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

