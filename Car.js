class Car extends BaseClass {
  constructor(x, y, width, height,color){
    super(x,y,width,height);
    if(color ===1)this.image = loadImage("images/blueCar.png");
    else if(color ===2)this.image = loadImage("images/redCar.png");
    else if(color ===3)this.image = loadImage("images/yellowCar.png");
    else if(color ===4)this.image = loadImage("images/greenCar.png");
  }

}
