
const express = require("express");
const app = express();


app.use(express.json());
require("dotenv").config();
const port = process.env.PORT || 5000;

const blog   = require("./routes/blog");

app.use("/api/v1" ,blog);

const connectwithdb = require("./config/database");
connectwithdb();


app.listen(port,()=>{
    console.log("app started")
})

app.get("/",(req,res)=>{
    res.send("Home page");
})