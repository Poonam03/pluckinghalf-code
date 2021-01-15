class Mango {
     constructor(x,y, radius) {
          //this.pos = pos;
          
         // this.pos = position;
          //console.log(this.pos);
          //this.x = this.pos.x;
          //this.y = this.pos.y;
         this.radius = radius;
         this.diameter = this.radius * 2;
         this.options = {
             density: 0.0004,
             friction: 1,
             restitution: 0.5,
             isStatic: true
         };
         this.body = Bodies.circle(x, y, this.radius, this.options);
         this.objectImage=loadImage("images/mango.png")
         World.add(world, this.body);
     }
     display() {
         if (this.objectImage) {
             image(this.objectImage, this.body.position.x, this.body.position.y, this.diameter * 1.8, this.diameter * 1.8);
         }
     }
 }