const express=require('express');
const exp=express();
const fs=require('fs');

exp.get('/',(req,res)=>{

    let date=new Date();
    let info=`${date.getDate()} ${date.getHours()}:${date.getMinutes()}  ${date.getMinutes()} ${date.getSeconds()} ${date.getMilliseconds()} \n`;
    fs.appendFile('./log.txt',info,(err)=>{
        if(err){
            console.log('Failed to write file.',err);
        } else{
            console.log('Logged successfully!');
        }
    });
    return res.send('Hey! This is the homepage!');
});

exp.get('/about',(req,res)=>{
    return res.send('Hey! This is the about page!');
});

exp.listen(1234,()=>{console.log('Server started!')});
