var Plant = require('../models/plants');
const FilterController = {

  New: function(req, res) {
    res.render('form/index');
  },

  Filter: function(req, res) {
    // console.log(req.query)
      Plant.find({ 
      Sunlight: req.query.sunlight,
      Moisture: req.query.moisture,
      Indoor_Flowering: req.query.indoorFlowering,
      Toxic_Dogs: req.query.toxicToAnimals  
      }).exec(function (err, filtered_plants){
      if (err){ throw err;}
      res.render('filteredPlants', {filteredPlants : filtered_plants});
    });}
};

module.exports = FilterController;
