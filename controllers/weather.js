const Weather = require('../models/weather.js');
const Geolocator = require('../models/geolocator.js');

const WeatherController = {
  Index: function(req, res) {
    res.render('weather', {weather: null});
  },

  GetWeather: function(req, res) {
    const postcode = req.body.postcode;
    // Converts postcode to latitude & longitude
    Geolocator.GetLatLon(postcode)
        .then((latLon) => {
          return `lat=${latLon[0]}&lon=${latLon[1]}`;
        })
        .then((latLon) => {
          // Gets the weather statistics for given latitude and longitude
          Weather.GetCumulativeWeather(latLon)
              .then((cumulativeWeather) => {
                return Weather.GetAverageWeather(cumulativeWeather);
              })
              .then((averageWeather) => {
                return Weather.FormatWeatherData(averageWeather);
              })
              .then((formattedWeather) => {
                res.render('weather', {weather: formattedWeather});
              });
        });
  },
};

module.exports = WeatherController;
