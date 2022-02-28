const express = require('express');
const router = express.Router();

const WishlistController = require('../controllers/wishlist.js');

router.post('/add/:id', WishlistController.Add);
router.get('/', WishlistController.Index);

module.exports = router;
