var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });
});

router.get('/index.html',function(req,res,next){
  res.render('index',{ title: '主页' });
});

router.get('/point-environment.html',function(req,res,next){
  res.render('point-environment',{ title: '监测点 - 环境' });
});

router.get('/point-103.html',function(req,res,next){
  res.render('point-103',{ title: '监测点 - 环境103楼' });
});

router.get('/point-104.html',function(req,res,next){
  res.render('point-104',{ title: '监测点 - 环境104楼' });
});

router.get('/point-106.html',function(req,res,next){
  res.render('point-106',{ title: '监测点 - 环境106楼' });
});

router.get('/point-109.html',function(req,res,next){
  res.render('point-109',{ title: '监测点 - 环境109楼' });
});

router.get('/point-112.html',function(req,res,next){
  res.render('point-112',{ title: '监测点 - 环境112楼' });
});

router.get('/point-115.html',function(req,res,next){
  res.render('point-115',{ title: '监测点 - 环境115楼' });
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
