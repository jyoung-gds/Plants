const fetch = require('node-fetch');

const Geolocator = {
  GetLatLon: function(postcode) {
    const apiKey = '4e5124b68e117f374d587eddf32287e5';
    return fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${postcode},GB&appid=${apiKey}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const latLon = [data.lat, data.lon];
          console.log(latLon);
          return latLon;
        });
  },
};

module.exports = Geolocator;
