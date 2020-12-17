class Box {
    constructor(x, y) {
      var options = {
          isStatic:false,
         
      }
      this.body = Bodies.rectangle(x,y,20,40,options);
      this.width = 25;
      this.height = 30;
      this.visibility = 255;
      
      World.add(world,this.body);
    }
    display(){
      //var pos =this.body.position;
      if(this.body.speed < 3){
        rectMode(CENTER);
        stroke("aquamarine");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        pop();
    }

    }

    score1(){
      if(this.visibility < 0 &&
        this.visibility > -10){
       score = score+1  ;
   
     }
    }

  }