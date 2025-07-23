function Vehicle(make,year){
    this.make=make;
    this.year=year;
}

Vehicle.prototype.getAge=function (){
    return (2025-this.year);
}

function Car(model,mileage,make,year){
    this.model=model;
    this.mileage=mileage;
    Vehicle.call(this,make,year);
}

Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;

Car.prototype.getDescription=function(){
    return `${this.make} ${this.year} ${this.model}`;
}