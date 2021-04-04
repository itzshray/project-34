class Monster{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'frictionAir':0.004
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("Images/Monster-01.png")
        this.image2 = loadImage("Images/Monster-02.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255
    }
    display(){
    var pos=this.body.position
    if(this.body.speed<10){
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image ,0, 0, this.width, this.height)
        pop();
    }
    else{
        push();
        this.visibility = this.visibility - 5
        World.remove(world,this.body)
        tint(255,this.visibility)
        imageMode(CENTER);
        image(this.image ,pos.x, pos.y, this.width, this.height)
        pop();
    }
   
    }
}