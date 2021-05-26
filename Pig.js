class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255
    
  }
  display(){
    console.log(this.body.speed)

  if(this.body.speed>3){
    World.remove(world,this.body)
    push()
    this.Visibility=this.Visibility-1
    tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
  }
  else{
    super.display()
  }
}
  
};