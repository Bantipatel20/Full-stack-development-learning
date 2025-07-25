
const express = require("express");
const router = express.Router();

const {createComment} =require("../controllers/CommentController");
const {createpost} = require("../controllers/PostController");
const {getallpost} = require("../controllers/PostController")
const {likepost} = require("../controllers/LikeController");
const {unlikepost} = require("../controllers/LikeController");
router.post("/comments/create",createComment);
router.post("/posts/create",createpost);
router.get("/posts",getallpost);
router.post("/posts/like",likepost);
router.post("/posts/unlike",unlikepost);
module.exports = router;
