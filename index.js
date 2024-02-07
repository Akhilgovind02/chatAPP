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