const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('First task failed!');
    },2000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Second task completed successfully!');
    });
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Third task completed successfully!');
    });
});


Promise.allSettled([p1,p2,p3])

.then((result)=>{
    console.log(result);
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log('All tasks initiated!');
})