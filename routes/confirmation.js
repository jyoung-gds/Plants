const express = require('express');
const router = express.Router();

var ConfirmationController =  {
  Confirmation: function(req, res) {
    res.render('../views/form/confirmation');
  }
};

module.exports = router;
