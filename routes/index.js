var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Course.findAll().then(function(result) {
    res.render('index', { title: 'Note Stream', courses: result  });
  });
});

module.exports = router;
