const Plant = require('../models/plants');
// var Planttest = require('../models/testplant');

const PlantsController = {
  Index: function(req, res) {
    Plant.find(function(err, plants) {
      if (err) {
        throw err;
      }
      // console.log(plants)
      res.render('plant', {plants: plants});
    });
  },

  Doctor: function(req, res) {
    res.render('plantDoc');
  },

  Single: function(req, res) {
    const plantIDClicked = req.params.id;
    Plant.find({_id: plantIDClicked}).exec(function(err, plantSelected) {
      if (err) {
        throw err;
      }

      // console.log(plant);
      res.render('singlePlant', {plantID: req.params.id, plant: plantSelected});
    });
  },

  Recieved: function(req, res) {
    res.render('plantDocRecieved');
  },
};

module.exports = PlantsController;
