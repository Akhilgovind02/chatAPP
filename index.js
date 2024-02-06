const http=reqire('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>Working</h1>");
});
server.listen(3500,()=>{
    console.log('Server is working @3500');
});