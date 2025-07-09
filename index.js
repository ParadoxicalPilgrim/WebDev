const fs=require('fs');
const mongoose=require('mongodb');
const express=require('express');
const exp=express();

const users=require('./MOCK_DATA.json');

exp.use(express.json());
exp.use(express.urlencoded({extended:false}));

exp.get('/',(req,res)=>{
    res.send('Homepage');
});

exp.get('/users',(req,res)=>{
    return res.json(users);
});

exp.post('/users',(req,res)=>{
    let body=req.body;
    console.log(body);
    users.push({id:users.length+1,...body});

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err)=>{
        if(err){console.log('Failed to write into file');
        }else{console.log('Written into file successfully');}
    });
});

exp.listen(1234,()=>{console.log('Server started!');});