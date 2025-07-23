function Rectangle(width,height){
    this.width=width;
    this.height=height;
}

Rectangle.prototype.getArea=function(){
    return (this.width * this.height);
}

function Square(width){
    Rectangle.call(this,width,width);
}

Square.prototype=Object.create(Rectangle.prototype);
Square.prototype.constructor=Square;


