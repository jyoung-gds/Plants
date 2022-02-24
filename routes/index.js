const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
}),

router.get('/filter/new', function(req, res) {
  res.render('../views/form/index');
}),

router.get('/confirmation/confirmation', function(req, res) {
  res.render('../views/form/confirmation');
});

module.exports = router;
