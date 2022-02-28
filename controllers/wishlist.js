const Wishlist = require('../models/wishlist');
const Plant = require('../models/plants');

const WishlistController = {
  Add: function(req, res) {
    // console.log(req.params.id);
    const plant_id = req.params.id;
    const new_wishlist_item = new Wishlist({plantID: plant_id});
    new_wishlist_item.save(function(err) {
      if (err) {
        throw err;
      }
      res.redirect('/wishlist');
    });
  },

  Index: function(req, res) {
    // Want to get all the wishlist plant_ids
    Wishlist.find().exec(function(err, plants) {
      if (err) {
        throw err;
      }

      // eslint-disable-next-line no-var
      var wishlistPlants = [];

      plants.forEach((plant)=>{
        // plantIDs.push(plant[0])})

        // console.log(plant.plantID);
        Plant.find({_id: plant.plantID}).exec(function(err, plantFound) {
          if (err) {
            throw err;
          }

          wishlistPlants.push(plantFound[0]);

          console.log(wishlistPlants);
          res.render('wishlist', {plants: wishlistPlants});
        });
      });
      // console.log(wishlistPlants);
      // res.render('wishlist', {plants: wishlistPlants});
    });
  },
};

module.exports = WishlistController;
