var express = require('express');
var router = express.Router();

/* GET servicios page. */
router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'Chalten Destinos' });
});

module.exports = router;
