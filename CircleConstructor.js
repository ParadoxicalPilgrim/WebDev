function Circle(radius){
    this.radius=radius;
}

Circle.prototype.circArea= function(){
    return Math.PI*Math.pow(this.radius,2);
}

function Cylinder(radius,height){
    this.height=height;
    Circle.call(this,radius);
}

Cylinder.prototype=Object.create(Circle.prototype);
Cylinder.prototype.constructor=Cylinder;

Cylinder.prototype.cylVolume=function(){
    return this.circArea()*this.height;
}