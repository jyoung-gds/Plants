const express = require('express');
const router = express.Router();

const ConfirmationController = require('../controllers/confirmation');

router.get('/', ConfirmationController.Confirmation);
router.get('/quiz/:id', ConfirmationController.Quiz);
router.get('/quiz/:id/result/', ConfirmationController.Result);

module.exports = router;
