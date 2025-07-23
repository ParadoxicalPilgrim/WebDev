const pizzaOrder= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const shopOpen=Math.random()>0.1;
        
        if (shopOpen){
        resolve('Pizza ordered!')
        }

        else {
            reject('Shop is closed, sorry!');
        }

    },1000)
})

pizzaOrder

.then((status)=>{
    console.log(status);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Pizza is baked!');
        },4000);
    });
})

.then((nxtStatus)=>{
    console.log(nxtStatus);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Pizza is delivered!');
        },5000);
    });
})

.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log('Pizza process complete.')
})