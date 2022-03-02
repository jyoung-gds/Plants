const express = require('express');
const router = express.Router();

const WeatherController = require('../controllers/weather.js');

router.get('/', WeatherController.Index);
router.post('/', WeatherController.GetWeather);

module.exports = router;
