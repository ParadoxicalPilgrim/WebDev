const weatherCheck= new Promise((resolve,reject)=>{
    let weatherCondition=Math.random()*2000;

    if (weatherCondition<=1000){
        resolve('Weather is sunny!');
    }

    else{
        reject('Weather is rainy!');
    }
})

weatherCheck
.then((condn)=>{
    console.log(condn);
})

.catch((condn2)=>{
    console.log(condn2);
})