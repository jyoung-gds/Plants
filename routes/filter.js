const express = require('express');
const router = express.Router();

const FilterController = require('../controllers/filter');

router.get('/new', FilterController.New);
router.get('/results', FilterController.Filter)

module.exports = router;
