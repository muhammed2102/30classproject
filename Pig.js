class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity =  255//0 - 255  = 0 mean totally not visible
                      //255= fully visibe
  }


  display(){

    //if pig is not hit, then display pig

    if(this.body.speed <3)
    {
        super.display();

    }

    //else , when bird hids, vanish the pig

    else{

      World.remove(world, this.body);
      push()

      this.Visiblity = this.Visiblity - 5;

      tint ( 255 ,this.Visiblity );

      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop()

    }



  }


};