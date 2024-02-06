<<<<<<< HEAD
const http=require('http');
const fs=require('fs');
const url=require('url');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    var s=url.parse(req.url,true);
    if(s.pathname=='/enterchat'){
         fs.readFile("./enterchat.html",function (err,data){
           if(err){
               return  res.end("<p align='center'>File Not Found</p>");
           } 
           
           return res.end(data);
        });
    }
    if(s.pathname=="/writechat"){
        
        return res.end("This is writechat");
    }
    if(s.pathname=='/listchat')
    {
        res.write('<h1>DisplayChat</h1>');
    }
    
    
})
server.listen(3500,()=>{
    console.log('Server is running @3500');
});
=======
const http = require('http')
const fs = require('fs')
const url = require('url')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})

    var s = url.parse(req.url,true)
    if(s.pathname == '/enterchat'){
        fs.readFile('./enterchat.html',(err,data) =>{
            if(err){
                return res.end("<p align='center></p>")
            }else{
                return res.end(data)
            }
        })
    }
    if(s.pathname)
    if(s.pathname == '/lostchat'){
        res.write('Display chat');
    }
});
server.listen(3500,()=>{
    console.log('server is running');
})
>>>>>>> cbc2971425afb269d80771d60934a2bc0c584251
