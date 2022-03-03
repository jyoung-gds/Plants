const express = require('express');
const router = express.Router();

const MapsControler = require('../controllers/maps');

router.get('/', MapsControler.Index);
router.post('/', MapsControler.Postcode);

module.exports = router;
