class Tree {
    constructor(x,y,width,height){
        var options ={
            isStatic: true 
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    this.image = loadImage("tree.png");
    }
    display(){

        imageMode(CENTER);
        image(this.image,1000, 200, this.width, this.height);
      }
}