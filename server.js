const express = require('express');
var mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

const indexRouter = require('./index.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public '))

var mongoDbUrl = process.env.MONGODB_URL || 'mongodb://localhost/plants';
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT || port);

app.use('/', indexRouter)
