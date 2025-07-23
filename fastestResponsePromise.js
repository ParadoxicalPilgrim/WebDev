const task1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Task 1 failed!"), 1000);
});

const task2 = new Promise((resolve) => {
    setTimeout(() => resolve("Task 2 success!"), 2000);
});

const task3 = new Promise((resolve) => {
    setTimeout(() => resolve("Task 3 success!"), 3000);
});


Promise.any([task1,task2,task3])

.then((info)=>{
    console.log(info);
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log('Fastest resolve received!');
});