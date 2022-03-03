const express = require('express');
const router = express.Router();

const WishlistController = require('../controllers/wishlist.js');


router.post('/add/:id/:Common_Name', WishlistController.Add);
router.get('/', WishlistController.Index);

module.exports = router;
