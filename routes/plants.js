const express = require('express');
const router = express.Router();

const PlantsController = require('../controllers/plants');

router.get('/', PlantsController.Index);

module.exports = router;
