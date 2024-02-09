<<<<<<< HEAD
const http=require('http');
const url=require('url');
const routes = require("./routes");
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const query= parsedUrl.query;
    const path=parsedUrl.pathname;
    const method=req.method.toLocaleUpperCase();
    let handler=routes[path]&&routes[path][method];
    console.log(handler);
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.end("<h1>Hello</h1>");
    handler(req,res);
});
server.listen(3600,()=>{
    console.log('Server is working @3500');
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
