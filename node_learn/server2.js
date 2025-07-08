var http = require('http');

http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.end("<h1>home page</h1>")
    }else if(req.url=='/about'){
        res.end('<h1>about page</h1>')
    }else{
        res.end("<h1>welcome page</h1>")
    }
}).listen(4000)

console.log("server started on http://127.0.0.1:4000")