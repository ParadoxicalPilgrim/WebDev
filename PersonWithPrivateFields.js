class Person{

    #name;
    #age;
    constructor (name,age){
        this.#name=name;
        if (age<0){
            throw new Error("Age needs to be positive!");
        }
        this.#age=age;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name=newName;
    }

    get age(){
        return this.#age;
    }

    set age(newAge){
        if(newAge<0){
            throw new Error(`Age cannot be negative!`);
        }
        this.#age=newAge;
    }
}