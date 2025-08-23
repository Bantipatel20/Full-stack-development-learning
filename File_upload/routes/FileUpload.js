
const express = require("express");
const router = express.Router();

const {imageUpload,localFileUpload} = require("../controllers/fileupload")

// router.post("/imageupload",imageUpload);
router.post("/localfileupload",localFileUpload);
router.post("/imageupload",imageUpload);

module.exports = router;