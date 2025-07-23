class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    get age(){
        return this._age;
    }

    set age(newAge){
        if (newAge<0){
            throw new Error(`Age cannot be negative!`);
        }
        this._age=newAge;
    }

    get details(){
        return `${this.name},${this.age}`;
    }

}