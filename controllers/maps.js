const Geolocator = require('../models/geolocator');

require('../models/geolocator');

const MapsControler = {
  Index: function(req, res) {
    res.render('mapBox', {postcode: ''});
  },

  Postcode: function(req, res) {
    // console.log(req.body);
    const inputPostcode = req.body.postcode;
    console.log(inputPostcode);
    Geolocator.GetLatLon(inputPostcode).then((results, err) => {
      if (err) {
        throw err;
      }
      // console.log(results);
      res.render('mapBox', {postcode: results});
    });
  },
};

module.exports = MapsControler;
