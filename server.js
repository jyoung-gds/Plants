const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index.js');
const filterRouter = require('./routes/filter.js');
const plantsRouter = require('./routes/plants.js');
const confirmationRouter = require('./routes/confirmation.js');
const wishlistRouter = require('./routes/wishlist.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoDbUrl = process.env.MONGODB_URI || 'mongodb+srv://plantasia-team:plantasia@plantasia.ahzb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT || port);
// app.listen(port);


app.use('/', indexRouter);
app.use('/filter', filterRouter);
app.use('/plants', plantsRouter);
app.use('/confirmation', confirmationRouter);
app.use('/wishlist', wishlistRouter);


function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -25.344,
    lng: 131.036
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
