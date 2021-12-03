const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let graph,A,B,l;

graph = new GraphBackGround();
A = new Point(300,300,15,"rgba(255,0,0,0.3)",true);
B = new Point(500,200,15,"rgba(255,0,0,0.3)",true);

// y = slope * x + intercept
l = new LinearFunction(0,0);

animmate();

function animmate(){
    requestAnimationFrame(animmate);
    context.clearRect(0,0,width,height);
    graph.draw();


    // slope = rise / run
    l.slope =  (B.y - A.y)/(B.x - A.x);

    // intercept = y - slope * x
    l.intercept = B.y - l.slope * B.x;
    drawLine(l,"blue");


    A.draw();
    B.draw();
}



function drawLine(line,color){
    context.beginPath();
    context.lineWidth = "3";
    context.strokeStyle = color
    context.moveTo(0,l.y(0));
    context.lineTo(width,l.y(width));
    context.closePath();
    context.stroke();

}