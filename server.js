const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;
console.log(mongoose.connection.readyState);

const indexRouter = require('./routes/index.js');
const filterRouter = require('./routes/filter.js');
const plantsRouter = require('./routes/plants.js');
const confirmationRouter = require('./routes/confirmation.js');
const wishlistRouter = require('./routes/wishlist.js');
const weatherRouter = require('./routes/weather.js');
const sessionsRouter = require('./routes/sessions.js');
const usersRouter = require('./routes/users.js');
const mapRouter = require('./routes/map.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));


const mongoDbUrl = process.env.MONGODB_URI || 'mongodb+srv://plantasia-team:plantasia@plantasia.ahzb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT || port);
// app.listen(port);

app.use(session({key: 'user_sid',
  secret: 'super_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000},
}));

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});



app.use('/', indexRouter);
app.use('/filter', filterRouter);
app.use('/plants', plantsRouter);
app.use('/confirmation', confirmationRouter);
app.use('/wishlist', wishlistRouter);
app.use('/weather', weatherRouter);
app.use('/sessions', sessionsRouter);
app.use('/users', usersRouter);
app.use('/map', mapRouter);
