class particles {
    constructor(x,y,r) {
      var options = {
        restitution = 0.4
      }

      this.r=r;
      this.body = Bodies.Circle(x,y,width,this.r,options);
    this.color=color (random (0, 225), random (0,225), random (0, 22))
    World.add(world, this.body);
}
display(){

    if(frameCount%60 === 0){
        particles.push(newParticle(random(width/2-10,width/2+10), 10,10));
    }

    for(var j = 0;j < particles.lengh; j++){
        particles[j].display();
    }
    for(var k = 0;k < divisions.length;k++){
     divisions[k].display()
    }

    var pos =this.body.position;
    var angle =this.body.angle;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    noStroke()
    imageMode(CENTER);
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
  }

};






