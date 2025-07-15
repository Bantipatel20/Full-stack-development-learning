

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


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

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
