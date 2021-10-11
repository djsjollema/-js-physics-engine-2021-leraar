const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let A,B,background,l;

A = new Point(200,200,20,"red",true);
B = new Point(500,300,20,"blue",true);

l=new LinearFunction(-1,400);

for(let x = 0; x <500; x+=5){
    console.log(l.y(x));
    let p = new Point(x,l.y(x),2,"yellow");
    p.draw();
}


background = new GraphBackGround();

//animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    background.draw();
    A.draw();
    B.draw();
}


