var express = require('express');
var router = express.Router();

/* GET novedades page. */
router.get('/', function(req, res, next) {
  res.render('novedades',
   { title: 'Chalten Destinos',
     isNovedades:true
   });
});

module.exports = router;