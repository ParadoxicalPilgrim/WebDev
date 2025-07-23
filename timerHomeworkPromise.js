const homework= new Promise((resolve,reject)=>{
    let timeOut=Math.random()*6000;

    setTimeout(()=>{
        if (timeOut<=4000){
        resolve(`Homework completed in ${(timeOut/1000).toFixed(2)} seconds! Super Fast!`);
    }

    else if (timeOut<=5000){
        resolve(`Homework completed in ${(timeOut/1000).toFixed(2)} seconds! Just in time!`);
    }

    else{
        reject(`Homework not done! Took too long: ${(timeOut/1000).toFixed(2)} seconds.`);
    }
    },2000)
    
});

homework
.then((result)=>{
    console.log(result);
})

.catch((late)=>{
    console.log(late);
})

.finally(()=>{
    console.log('Ab ham free hai!!');
})