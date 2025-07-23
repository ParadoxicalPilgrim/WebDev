class Counter{
    static count=0;

    constructor(){
        Counter.count++;
    }

    static getCount(){
        return this.count;
    }
}