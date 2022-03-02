const fetch = require('node-fetch');

const Weather = {
  GetCumulativeWeather: function(latLon) {
    return new Promise((resolve, reject) => {
      const cumulativeWeather = {
        temp: 0,
        pressure: 0,
        humidity: 0,
        wind: 0,
        precipitation: 0,
        clouds: 0,
        sunshine: 0,
      };
      for ( month = 1; month < 13; month ++ ) {
        fetch(`https://history.openweathermap.org/data/2.5/aggregated/month?month=${month}&${latLon}&appid=4e5124b68e117f374d587eddf32287e5`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              cumulativeWeather.temp += data.result.temp.mean;
              cumulativeWeather.pressure += data.result.pressure.mean;
              cumulativeWeather.humidity += data.result.humidity.mean;
              cumulativeWeather.wind += data.result.wind.mean;
              cumulativeWeather.precipitation += data.result.precipitation.mean;
              cumulativeWeather.clouds += data.result.clouds.mean;
              cumulativeWeather.sunshine += data.result.sunshine_hours;
            });
      }
      setTimeout(() => {
        resolve(cumulativeWeather);
      }, 3000);
    });
  },

  GetAverageWeather: function(cumulativeWeather) {
    return new Promise((resolve, reject) => {
      const averageWeather = {
        temp: 0,
        pressure: 0,
        humidity: 0,
        wind: 0,
        precipitation: 0,
        clouds: 0,
        sunshine: 0,
      };
      averageWeather.temp = cumulativeWeather['temp']/12;
      averageWeather.pressure = cumulativeWeather['pressure']/12;
      averageWeather.humidity = cumulativeWeather['humidity']/12;
      averageWeather.wind = cumulativeWeather.wind/12;
      averageWeather.precipitation = cumulativeWeather.precipitation/12;
      averageWeather.clouds = cumulativeWeather.clouds/12;
      averageWeather.sunshine += cumulativeWeather.sunshine/12;
      setTimeout(() => {
        resolve(averageWeather);
      }, 1000);
    });
  },

  FormatWeatherData: function(averageWeather) {
    return new Promise((resolve, reject) => {
      averageWeather.temp = Math.round(averageWeather.temp-273.15);
      averageWeather.pressure = Math.round(averageWeather.pressure);
      averageWeather.humidity = averageWeather.humidity.toFixed(2);
      averageWeather.wind = averageWeather.wind.toFixed(2);
      averageWeather.precipitation = averageWeather.precipitation.toFixed(2);
      averageWeather.clouds = averageWeather.clouds.toFixed(2);
      averageWeather.sunshine = averageWeather.sunshine.toFixed(2);
      setTimeout(() => {
        resolve(averageWeather);
      }, 1000);
    });
  },
};

module.exports = Weather;
