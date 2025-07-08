
var http = require('http');
var a =10;
var b = 20;
var c = a+b;
var msg ="";
if(c==30){
    msg = "c value is 30";
}else{
    msg = "c value is not 30";
}
http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hello world");
    res.write(`<br/> A value is ${a} <br/>
        B value is ${b} sum is ${c} <br/>`);
    res.write(msg)

    res.end("<br/> by");
}).listen(3000)
console.log("http server http://127.0.0.1:3000")