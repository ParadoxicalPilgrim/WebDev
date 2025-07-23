function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

Person.prototype.getFullName=function getFullName(){
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
}

let Ayush= new Person('Ayush','Ayan',19);
Ayush.getFullName();

let Arnav= new Person('Arnav','Ayan',10);
Arnav.getFullName();