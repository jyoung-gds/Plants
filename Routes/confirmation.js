var express = require('express');
var router = express.Router();

var ConfirmationController = require('../controllers/confirmation');

router.get('/',ConfirmationController.Confirmation)

module.exports = router;
