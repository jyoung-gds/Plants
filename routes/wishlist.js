const express = require('express');
const router = express.Router();

const WishlistController = require('../controllers/wishlist');

router.post('/', WishlistController.New);
router.get('/', WishlistController.Index);

module.exports = router;
