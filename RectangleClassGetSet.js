class Rectangle{
    constructor(length,width){
        this.width=width;
        this.length=length;
    }

    get width(){
        return this._width;
    }

    get length(){
        return this._length;
    }

    set width(newWidth){
        if (newWidth<0){
            throw new Error(`Width cannot be negative!`);
        }
        this._width=newWidth;
    }

    set length(newLength){
        if (newLength<0){
            throw new Error(`Length cannot be negative!`);
        }
        this._length=newLength;
    }

    get area(){
        return this._length*this._width;
    }
} 