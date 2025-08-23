
const express = require("express")
const app = express();
const fileupload = require("express-fileupload")
require("dotenv").config()

port = process.env.PORT || 3000

app.use(express.json());
app.use(fileupload());

const db = require("./config/database")
db.connectiondb();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryconnect();

// const Upload = require("./routes/FileUpload");
// app.use("/api/v1/upload",Upload)

app.listen("/",()=>{
    console.log(`server started on port ${port}`);
})


