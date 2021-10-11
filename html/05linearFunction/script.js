const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let A,B,background;

A = new Point(200,200,20,"red",true);
B = new Point(500,300,20,"blue",true);

background = new GraphBackGround();

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    background.draw();
    A.draw();
    B.draw();
}


