const homeworkTask = new Promise((resolve) => {
    setTimeout(() => resolve("Homework finished!"), 3000);
});

const chargingTask = new Promise((resolve) => {
    setTimeout(() => resolve("Battery charged!"), 2000);
});

const iceCreamTask = new Promise((resolve) => {
    setTimeout(() => resolve("Ice cream ordered!"), 1000);
});

Promise.race([homeworkTask,chargingTask,iceCreamTask])

.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log('Task completed!');
})