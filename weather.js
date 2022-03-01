// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const apiKey = '4e5124b68e117f374d587eddf32287e5';
// const location = 'Stockport,GB';

// fetch(`https://history.openweathermap.org/data/2.5/aggregated/month?month=9&q=Stockport,GB&appid=4e5124b68e117f374d587eddf32287e5`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data); // our response data!
//       console.log(data.result.temp.record_min);
//     });

const cumulativeWeather = {
  'temp': 0,
  'pressure': 0,
  'humidity': 0,
  'wind': 0,
  'precipitation': 0,
  'clouds': 0,
};

const averageWeather = {
  'temp': 0,
  'pressure': 0,
  'humidity': 0,
  'wind': 0,
  'precipitation': 0,
  'clouds': 0,
};

// eslint-disable-next-line require-jsdoc
function getCumulativeWeather() {
  for (let month = 1; month < 13; month++) {
    fetch(`https://history.openweathermap.org/data/2.5/aggregated/month?month=${month}&q=Stockport,GB&appid=4e5124b68e117f374d587eddf32287e5`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          cumulativeWeather['temp'] += data.result.temp.mean;
          cumulativeWeather['pressure'] += data.result.pressure.mean;
          cumulativeWeather['humidity'] += data.result.humidity.mean;
          cumulativeWeather['wind'] += data.result.wind.mean;
          cumulativeWeather['precipitation'] += data.result.precipitation.mean;
          cumulativeWeather['clouds'] += data.result.clouds.mean;
        });
  }
}

// eslint-disable-next-line require-jsdoc
function getAverageWeather() {
  averageWeather['temp'] = cumulativeWeather['temp']/12;
  averageWeather['pressure'] = cumulativeWeather['pressure']/12;
  averageWeather['humidity'] = cumulativeWeather['humidity']/12;
  averageWeather['wind'] = cumulativeWeather['wind']/12;
  averageWeather['precipitation'] = cumulativeWeather['precipitation']/12;
  averageWeather['clouds'] = cumulativeWeather['clouds']/12;
}

// eslint-disable-next-line require-jsdoc
function printWeather() {
  console.log('Clouds: ' + averageWeather['clouds']);
  console.log('Temp: ' + averageWeather['temp']);
  console.log('Pressure: ' + averageWeather['pressure']);
  console.log('Humidity: ' + averageWeather['humidity']);
  console.log('Wind: ' + averageWeather['wind']);
  console.log('Precipitation: ' + averageWeather['precipitation']);
}

// eslint-disable-next-line require-jsdoc
function weather() {
  const promise = getCumulativeWeather();
  const promise2 = promise.then(getAverageWeather);
  const promise3 = promise2.then(printWeather);
  console.log(promise3);
}

weather();
