const iceCream= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const isShopOpen=Math.random()>0.2

        if (isShopOpen){
            resolve('Ice cream order has been placed!');
        }

        else{
            reject('Sorry! The shop is not open yet.');
        }
    });
})

iceCream
.then((info)=>{
    console.log(info);
})
.catch((status)=>{
    console.log(status);
})