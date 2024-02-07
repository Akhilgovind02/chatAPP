const http=require('http');
const url=require('url');
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const path=url.parse(req.url,true);
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log(path.pathname);
    
    if(path.pathname=="/chatentry")
    {
        fs.readFile('./enterchat.html',(error,data)=>{
            if(error){
                return  res.write("<p>Error</p>");
            }
            return res.end(data);


        });
    }
    if(path.pathname=="/postchat"){
        const date = new Date();
        let datastr="<p>"+path.query.txtName+":"+path.query.txtMsg+":"+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+"/"+date.getHours()+":"+date.getMinutes()+"</p><br>";
        fs.appendFile('chatTxt.txt',datastr,()=>{});
        return res.end("<h1>Chat Entered</h1>");
    }
    if(path.pathname=="/getchat"){
        fs.readFile('./chatTxt.txt',(error,data)=>{
            if(error){
                return  res.write("<p>Error</p>");
            }
            return res.end(data);


        });
    }


    
   
});
server.listen(3500,()=>{
    console.log("Server is running @ 3500");
});
