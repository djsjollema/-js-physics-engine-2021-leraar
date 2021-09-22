class Point {
    constructor(x,y,radius,color,draggable){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.draggable = draggable || false;

        if(draggable){
            this.drag();
        }
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.closePath();
        context.stroke();
        context.fill();
    }

    drag(){
        console.log('ik ben draggable')
    }
}