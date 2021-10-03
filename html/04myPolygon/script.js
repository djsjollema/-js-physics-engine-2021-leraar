const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const background = new GraphBackground();
let polygon = [];
let numberOfPoints = 5;

for(let i = 0; i<numberOfPoints; i++){
    let point = new Point(Math.random()*width,Math.random()*height,15,"red",true);
    polygon.push(point);

}


animate();

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0,0,width,height);
    background.draw();

    context.beginPath();
    context.fillStyle = "rgba(255,255,0,0.2"
    context.moveTo(polygon[0].x,polygon[0].y);
    polygon.map((p) =>{
        context.lineTo(p.x,p.y);
    });
    context.closePath();
    context.fill();
    context.stroke();
    
    polygon.map((p) =>{
        p.draw(context);
    });

}

