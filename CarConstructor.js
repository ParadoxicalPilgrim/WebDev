function Car(brand,model,year){
    this.model=model;
    this.brand=brand;
    this.year=year;
    this.getCarInfo=function getCarInfo(){
        console.log(`The car,${this.brand} ${this.model}, was created in the year ${this.year}`);
    }
}

let mercf1=new Car('Mercedes','W11',2022);
let mercf1other= new Car('Mercedes','W12',2023);

mercf1.getCarInfo();
mercf1other.getCarInfo();
