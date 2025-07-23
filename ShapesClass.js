class Shape{
    getArea(){
        throw new Error(`"getArea()" to be executed only by a subclass! `);
    }
}

class Rectangle extends Shape{
    constructor(height,width){
        this.height=height;
        this.width=width;
        super();
    }

    getArea(){
        return this.height*this.width;
    }
}

class Circle extends Shape{
    constructor(radius){
        this.radius=radius;
    }

    getArea(){
        super();
        return Math.PI*Math.pow(this.radius,2);
    }
}