var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/index.html',function(req,res,next){
  res.render('index',{ title: 'Home' });
});

router.get('/point-environment.html',function(req,res,next){
  res.render('point-environment',{ title: 'monitor point - environment' });
});

router.get('/point-103.html',function(req,res,next){
  res.render('point-103',{ title: 'monitor point - 103' });
});

router.get('/point-104.html',function(req,res,next){
  res.render('point-104',{ title: 'monitor point - 104' });
});

router.get('/point-106.html',function(req,res,next){
  res.render('point-106',{ title: 'monitor point - 106' });
});

router.get('/point-109.html',function(req,res,next){
  res.render('point-109',{ title: 'monitor point - 109' });
});

router.get('/point-112.html',function(req,res,next){
  res.render('point-112',{ title: 'monitor point - 112' });
});

router.get('/point-115.html',function(req,res,next){
  res.render('point-115',{ title: 'monitor point - 115' });
});

router.get('/left-sidebar.html',function(req,res,next){
  res.render('left-sidebar',{ title: 'left-sidebar' });
});

router.get('/right-sidebar.html',function(req,res,next){
  res.render('right-sidebar',{ title: 'right-sidebar' });
});

router.get('/no-sidebar.html',function(req,res,next){
  res.render('no-sidebar',{ title: 'no-sidebar' });
});

module.exports = router;
