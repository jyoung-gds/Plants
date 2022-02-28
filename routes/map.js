const express = require('express');
const router = express.Router();

const MapsControler = require('../controllers/maps');

router.get('/', MapsControler.Index);
router.get('/test', function(req, res) {
  console.log(req.body);
});

module.exports = router;
