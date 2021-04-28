class SlingShot {
    constructor(bodyA,pointB){
        var coption={
              bodyA:bodyA,
              pointB:pointB,
              stiffness:1,
              length:10
        }
        this.pointB=pointB
        this.body=Constraint.create(coption);

    }

    fly(){
     //connection should be cuttt
       this.body.bodyA = null;
    }
    
    display(){   //when mouse is draggeddddd
        if(this.body.bodyA  ){
        var posA=this.body.bodyA.position
        var pointB=this.pointB
        line(posA.x,posA.y,pointB.x,pointB.y);
        }
    }

}