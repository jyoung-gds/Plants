var express = require('express');
var router = express.Router();

var FilterController = require('../controllers/filter')

router.get('/filter/new', FilterController.New)

module.exports = router;