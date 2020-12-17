class POLY{
constructor(){

    var options={
        isStatic:false,
        density:0.1
    }

    this.body = Bodies.polygon(100,300,6,20,options)
    this.radius = 40;
    this.image = loadImage("polygon.png");
    World.add(world,this.body);

}

display(){
    var pos = this.body.position

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius,this.radius);

}

}
