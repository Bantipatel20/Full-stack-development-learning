var http =  require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile("demo.html",'utf-8',function(err,data){
        console.log(data)
        res.end(data)
    })
}).listen(4000)


console.log("http://127.0.0.1:4000");