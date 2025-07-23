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

charger
.then((notification)=>{
    console.log(notification);
})

.catch((issue)=>{
    console.log(issue);
})