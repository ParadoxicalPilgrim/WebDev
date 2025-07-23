let names=['Suruchi','Arnav','Bhupendra'];

let ids=names.map((ele,index)=>{
    return {id:index+1,name:ele};
});

console.log(ids);