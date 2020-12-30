class plinkos{
    constructor(x,y,w,h){
        var options = {
            isStatic : true

        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body); 

    }
    display(){

        for (var j = 40; j <=width;j=j+50)
{
 plinkos.push(new plinko(j,75));
}
for (var j = 15; j <=width-10;j=j+10)
{
 plinkos.push(new plinko(j,175));
}
        var pos =this.body.position;  
        rectMode(CENTER); 
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}