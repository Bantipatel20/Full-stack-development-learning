const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Hello jee, kya haal chaal?");
});

// POST Route to submit car data
app.post("/api/cars", (req, res) => {
    const { name, brand } = req.body;
    console.log("Car Name:", name);
    console.log("Car Brand:", brand);
    res.send("Car submitted successfully");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port number ${port}`);
});



const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Cars",{
    useNewUrlParser: true ,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection Succesfully")})
.catch((err)=>{console.log("connection rejected")})
