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

  Doctor: function(req,res){
    res.render('plantDoc');
  },

  Single: function(req,res){
    res.send('hello - single plant with ID');
  }
};

module.exports = PlantsController;
