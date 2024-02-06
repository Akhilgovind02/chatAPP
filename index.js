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