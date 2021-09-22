const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

////let point = new Point(100,100,30,"yellow");

function drawCircle(){
    /*
        teken een honderd rode cirkels met als middelpunt
        M(200,200) en een straal van 50 px
    */

    for(let i = 0; i<100; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;
        let radius = 50;
        context.beginPath();
        context.fillStyle = "rgb(255,0,0)";
        context.arc(x,y,radius,0,2*Math.PI)
        context.closePath();
        context.stroke();
        context.fill();
    }

}

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    point.x += 1;
    point.y += 1;
    point.radius += 1;
    point.draw();
}