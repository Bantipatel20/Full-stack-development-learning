

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded());
app.set("views",__dirname+"/views");
app.set("view engine" , "ejs");
app.get("/homepage" ,(req,res)=>{
  res.render("home",{"mya":"kya haal chal"})
})
app.get("/marksheet",(req,res)=>{
  res.render("marksheet");
})
app.post("/marksheetprocess",(req,res)=>{
  var a = req.body.text1
  var b  = req.body.text2
  var c  = parseInt(a) + parseInt(b);
  res.render("app",{"mya":a,"myb":b,"myc":c});
})
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/home.html")
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname+"/home.html")
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname+"/about.html")
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+"/contact.html")
})

app.get('/cake', (req, res) => {
  res.send('Hello cake!')
})
app.get('/contact/surat', (req, res) => {
  res.send('Hello !cake in surat')
})
app.get('/contact/ahmedabad', (req, res) => {
  res.send('Hello cake in ahmedabad!')
})

app.get('/product/:id',(req,res)=>{
  var id = req.params.id;
  res.send("Parameter id is = "+ id);
})

app.get("/sum",(req,res)=>{
  res.sendFile(__dirname+"/sumdemo.html");
})

app.get('/sumprocess',(req,res)=>{
    var a = req.query.text1;
    var b  = req.query.text2;
    var c = parseInt(a) + parseInt(b);
    res.send (`A value is ${a} <br/> B value is ${b} <br/> sum value is ${c}`);
})
app.get("/search",(req,res)=>{
  var qq = req.query.q
  res.send("Qaury string is the = "+ qq);
})
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
