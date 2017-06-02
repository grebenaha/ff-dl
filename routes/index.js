const express = require('express');
const router = express.Router();
const log = require('../log')(module);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Converter' });
});

module.exports = router;
