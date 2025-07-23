async function fetchData() {
    try{
            let dataPromise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data fetched successfully!');
        },2000)
    })

    const result= await dataPromise;
    console.log(result);

    const dataProcess= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data processed!');
        },3000)
    })

    let processedData=await dataProcess;
    console.log(processedData);
    }

catch(error){
    console.log(error);
}

finally{
    console.log('Fetch process complete!');
}

}
