//Importing CSV into the database
var mongoose = require('mongoose');
const csvtojson = require('csvtojson');

var mongoDbUrl = process.env.MONGODB_URL || 'mongodb://localhost/plants';
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
   var collectionName = 'plants';
   var collection = db.collection(collectionName);
   collection.insertMany(arrayToInsert, (err, result) => {
       if (err) console.log(err);
       if(result){
           return console.log('Import CSV into database successfully.');
       }
      });
});


