const Wishlist = require('../models/wishlist');

const WishlistController = {
  Add: function(req, res) {
    console.log(req.params);
    const plantId = req.params.id;
    const plantName = req.params.Common_Name;
    const newWishlistItem = new Wishlist({plantID: plantId, Name: plantName});
    newWishlistItem.save(function(err) {
      if (err) {
        throw err;
      }
      res.redirect('/wishlist');
    });
  },

  Index: function(req, res) {
    // eslint-disable-next-line no-var
    Wishlist.find().exec(function(err, plants) {
      if (err) {
        throw err;
      }

      res.render('wishlist', {plants: plants});
    });
  },
};

module.exports = WishlistController;
