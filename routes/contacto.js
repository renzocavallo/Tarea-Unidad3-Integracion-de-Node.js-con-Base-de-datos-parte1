var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Chalten Destinos' });
});

module.exports = router;