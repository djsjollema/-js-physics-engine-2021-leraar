const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let myArray = [];

canvas.width = width;
canvas.height = height;

let background = new GraphBackGround();



let point = new Point(200,200,15,"red",true);

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    background.draw();
    point.draw();
}

