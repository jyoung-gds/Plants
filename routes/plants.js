const express = require('express');
const router = express.Router();

const PlantsController = require('../controllers/plants');

router.get('/', PlantsController.Index);
router.get('/doctor', PlantsController.Doctor);
router.get('/doctor/recieved', PlantsController.Recieved);
router.get('/:id', PlantsController.Single);

module.exports = router;
