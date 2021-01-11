class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            resitution:1,
            friction:0.3,
            density:0.3
        }

      this.x = x
      this.y = y
      this.r = r
      this.image=loadImage("paper.png");
    
      
      this.body=Bodies.circle(this.x,this.y,this.r,options);

   

      World.add(world,this.image);
      World.add(world,this.body);
   


    }
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
  
    fill("blue");
    rotate(angle);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y, this.r ,this.r);
   
}
}
