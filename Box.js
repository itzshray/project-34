class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'frictionAir':0.004
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y)
    stroke("aqua")
    strokeWeight(4)
    fill(0,100,220)
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop();
    }
}