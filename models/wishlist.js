const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  plantID: String,
});

const Wishlist = mongoose.model('Wishlist', WishlistSchema);
module.exports = Wishlist;


