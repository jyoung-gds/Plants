/* eslint-disable max-len */
const Plants = require('../models/plants');

const ConfirmationController = {
  Confirmation: function(req, res) {
    res.render('../views/form/confirmation');
  },

  Quiz: function(req, res) {
    res.render('quiz', {plantID: req.params.id});
  },

  Result: function(req, res) {
    // eslint-disable-next-line no-var
    var plantID = req.params.id;
    Plants.find({_id: plantID}).exec(function(err, results) {
      if (err) {
        throw err;
      }

      // eslint-disable-next-line no-var
      var dbResultSoil = results[0].Soil_Indicator;
      // eslint-disable-next-line no-var
      var dbResultType = results[0].Type;

      if (dbResultSoil == req.query.soilIndicator && dbResultType == req.query.type) {
        res.render('./form/confirmation');
      }
      res.render('./form/index');
    });
  },
};

module.exports = ConfirmationController;
