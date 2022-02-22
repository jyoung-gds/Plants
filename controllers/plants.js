var Plants = require('../models/plants');

var PlantsController = {
  Index: function(req,res){

    Plants.find(function(req,red){
      if (err) {throw err;}
      else{
        console.log('HELLOO')
        console.log(req.body)
        res.render('plant', {plants:req.body})
      }
    });
    
  }
};

module.exports = PlantsController;