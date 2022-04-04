var express = require('express');
var router = express.Router();

/* GET nosotros page. */
router.get('/', function(req, res, next) {
  res.render('nosotros',
  { title: 'Chalten Destinos',
    isNosotros:true
  });
});

module.exports = router;
