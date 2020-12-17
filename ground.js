class GROUND{
    constructor(x,y,width){
    
         var options={
            isStatic:true

        }

        this.body = Bodies.rectangle(x,y,200,10,options);
        this.width = width;
        this.height = 10;

    World.add(world,this.body);
    
    }
    
    display(){
        var shoc = this.body.position

        rectMode(CENTER);
        fill("orange");
        rect(shoc.x,shoc.y,this.width,this.height);
        
    }
    
    
    }