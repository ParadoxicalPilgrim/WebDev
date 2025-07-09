const http=require('http');
const fs=require('fs');


const myServer=http.createServer((req,res)=>{
    const date=new Date();
    let info = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getDay()} ${date.getTime()}: User Request\n`;
    fs.appendFile('./log.txt',info,{encoding:'utf-8'},(err)=>{

        switch(req.url){
            case '/':res.end('Hi! There from JS! Check out the about and arnav!');
            break
            case '/about':res.end('Just learning about server!');
            break
            case '/this':res.end('Hi! You travelled to another place.');
            break
            default:res.end('Error! Page not found! err:404');
        }

        if (err){
            console.log('Error writing to file:',err);
        }
    });
    console.log('New request received!');
})

myServer.listen(6969,()=>{
    console.log('Server started!');
});