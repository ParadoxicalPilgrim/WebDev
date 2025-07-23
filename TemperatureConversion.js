class TempConv{
    constructor(cel){
        this.cel=cel;
    }

    get cel(){
        return this._cel;
    }

    set cel(newCel){
        this._cel=newCel;
    }

    get fahrn(){
        return (this.cel * (9/5))+32; 
    }
}