

const express = require("express");
const app =  express()

app.use(express.json())
require("dotenv").config();

const port = process.env.PORT || 5000;

require("./config/database").connectdb();

const user = require("./routes/User");
app.use("/api/v1",user);


app.listen(port,()=>{
    console.log(`App started on port no ${port}`);
})
