var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/add-student', function(req, res, next) {
  res.render('add-student', { title: 'Express' });
});

const sadd = require("../controller/add-student-controller")
router.post('/add-student-process',sadd.add);

module.exports = router;
