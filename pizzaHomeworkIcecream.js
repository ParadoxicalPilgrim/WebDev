const homeworkTask= new Promise((resolve,reject)=>{

    let homeworkTask=Math.random()>0.3;

    setTimeout(()=>{

        if (homeworkTask){
        resolve(`Homework's done!`);
        }

        else{
            reject(`Homework's not done!`);
        }
    },2000)
});

const iceCream= new Promise((resolve,reject)=>{

    let isShopOpen= Math.random()>0.2;

    setTimeout(()=>{

        if (isShopOpen){
            resolve('Ice cream ordered!');
        }

        else{
            reject('Shop closed, sorry!');
        }

    })
})

const pizzaOrder= new Promise((resolve,reject)=>{
    
    let shopOpen= Math.random()>0.3;

    if (shopOpen){
        resolve('Pizza has been ordered!');
    }

    else{
        reject('Sorry the shop is closed!');
    }
})


let charger= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const charged=Math.random()>0.3

        if (charged){
            resolve('Battery charged to 100%.');
        }

        else{
            reject('Please plug the charger properly!');
        }
    },6000)
});


Promise.all([homeworkTask,iceCream,pizzaOrder,charger])

.then ((results)=>{
    console.log(results);
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log('All tasks done!');
});