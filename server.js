const express = require('express');
var mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const csvtojson = require('csvtojson');


const indexRouter = require('./routes/index.js')
const plantsRouter = require('./routes/plants.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))

var mongoDbUrl = process.env.MONGODB_URL || 'mongodb://localhost/plants';
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Uploading csv into the data frame
function dataInput (){
    
    if (db.collection('plant').count() > 0){
        console.log('Data already uploaded');
    }
    else{
        var arrayToInsert = [];
        csvtojson().fromFile('plants_raw.csv').then(source => {
        // Fetching the all data from each row
        for (var i = 0; i < source.length; i++) {
         var oneRow = {
            Scientific_Name: source[i]['Scientific_Name'],
            Common_Name: source[i]['Common_Name'],
            img_name: source[i]['img_name'],
            Sunlight: source[i]['Sunlight'],
            Moisture: source[i]['Moisture'],
            Soil_Indicator:source[i]['Soil_Indicator'],
            Plant_Spread: source[i]['Plant_Spread'],
            Plant_Height: source[i]['Plant_Height'],
            Indoor_Spread: source[i]['Indoor_Spread'],
            Indoor_Height: source[i]['Indoor_Height'],
            Toxic_Dogs: source[i]['Toxic_Dogs'],
            Toxic_Cats: source[i]['Toxic_Cats'],
            Plant_Habit: source[i]['Plant_Habit'],
            Type: source[i]['Type'],
            Indoor_Flowering: source[i]['Indoor_Flowering'],
            Hanging: source[i]['Hanging'],
            Bloom_Period: source[i]['Bloom_Period'],
            Humidity: source[i]['Humidity'],
            Air_Purifying: source[i]['Air_Purifying'],
            Ph_Soil: source[i]['Ph_Soil'],
            Bloom_Description: source[i]['Bloom_Description']
         };
         arrayToInsert.push(oneRow);
     }
     //inserting into the table 'plants'
     var collectionName = 'plant';
     var collection = db.collection(collectionName);
     collection.insertMany(arrayToInsert, (err, result) => {
         if (err) console.log(err);
         if(result){
             console.log('Import CSV into database successfully.');
         }
        });
    });

    }
};

// dataInput();


app.listen(process.env.PORT || port);

app.use('/', indexRouter);
app.use('/plants', plantsRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
  
// error handler
// app.use(function(err, req, res) {
//    // set locals, only providing error in development
//    res.locals.message = err.message;
//    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//    // render the error page
//    res.status(err.status || 500);
//    res.render('error');
//   });