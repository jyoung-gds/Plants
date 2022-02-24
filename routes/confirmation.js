const express = require('express');
const router = express.Router();

const ConfirmationController = require('../controllers/confirmation');

router.get('/', ConfirmationController.Confirmation);

module.exports = router;
