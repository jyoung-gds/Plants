const User = require('../models/user');

const SessionsController = {
  New: function(req, res) {
    res.render('sessions/new', {incorrectPassword: ''});
  },

  Create: function(req, res) {
    console.log('trying to log in');
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}).then(
        (user) => {
          if (!user) {
            res.redirect('/users/new');
          } else if (user.password != password) {
            // res.redirect('/sessions/new' {
            res.render('sessions/new', {
              incorrectPassword: 'Incorrect Password',
            });
          } else {
            req.session.user = user;
            res.redirect('/plants');
          }
        },
    );
  },

  Destroy: function(req, res) {
    console.log('logging out');
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
    }
    res.redirect('/');
  },
};

module.exports = SessionsController;
