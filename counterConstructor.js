function Counter(){
    let count=0;
    this.countInc=function(){
        return ++count;
    }
}

const c1=new Counter();
console.log(c1.countInc());
console.log(c1.countInc());
console.log(c1.countInc());console.log(c1.countInc());