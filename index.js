const http=require('http');
const url=require('url');
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const path=url.parse(req.url,true);
    
    console.log(path.pathname);
    
    if(path.pathname=="/chatentry")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./enterchat.html',(error,data)=>{
            if(error){
                return  res.write("<p>Error</p>");
            }
            return res.end(data);


        });
    }
    if(path.pathname=="/postchat"){
        res.writeHead(200,{'Content-Type':'text/html'});
        const date = new Date();
        let datastr="<p>"+path.query.txtName+":"+path.query.txtMsg+":"+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+"/"+date.getHours()+":"+date.getMinutes()+"</p><br>";
        fs.appendFile('chatTxt.txt',datastr,()=>{});
        return res.end("<h1>Chat Entered</h1>");
    }
    if(path.pathname=="/getchat"){
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache',
        });
        setInterval(()=>{
            fs.readFile('./chatTxt.txt',(error,data)=>{
                if(error){
                    return  res.write("<p>Error</p>");
                }
                s='event:message \n';
                s+='data:'+data;
                return res.end(s);

    
    
            });
        },5000);
        req.on('close', () => res.end('Chat Closed'))
        
    }


    
   
});
server.listen(3500,()=>{
    console.log("Server is running @ 3500");
});
