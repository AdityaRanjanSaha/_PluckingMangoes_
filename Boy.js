class Boy {
    constructor(x,y,width,height){
        var options ={
            isStatic: true 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    this.image = loadImage("boy.png");
    }
    display(){

        imageMode(CENTER);
        image(this.image,400,350, this.width, this.height);
      }
}