

const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT||4000;

app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("/api/v1",todoRoutes);

app.listen(port,()=>{
    console.log(`server started successfully at ${port}`);
})


const dbconnect = require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.send("<h1>Hello jee kya haal chal </h1>")
})