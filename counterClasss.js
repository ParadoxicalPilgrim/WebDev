class Counter{
    static count=0;

    static countInc(){
        return ++this.count;
    }
}


console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());
console.log(Counter.countInc());