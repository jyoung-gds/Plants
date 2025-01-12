const User = require('../models/user');

const UsersController = {
  New: function(req, res) {
    res.render('users/new', {});
  },

  Create: function(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);


    const user = new User( {
      email: req.body.email,
      password: req.body.password,
    });

    user.save(function(err) {
      if (err) {
        throw err;
      }
      
      res.status(201).redirect('/sessions/new');
    });
  },
};
module.exports = UsersController;
