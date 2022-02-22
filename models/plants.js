var mongoose = require('mongoose');
const csvtojson = require('csvtojson');

var PlantsSchema = new mongoose.Schema({
  Scientific_Name: String,
  Common_Name: String,
  img_name: String,
  Sunlight: String,
  Moisture: String,
  Soil_Indicator: String,
  Plant_Spread: String,
  Plant_Height: String,
  Indoor_Spread: String,
  Indoor_Height: String,
  Toxic_Dogs: String,
  Toxic_Cats: String,
  Plant_Habit: String,
  Type: String,
  Indoor_Flowering: String,
  Hanging: String,
  Bloom_Period: String,
  Humidity: String,
  Air_Purifying: String,
  Ph_Soil: String,
  Bloom_Description: String
});

var Plant = mongoose.model('Plant', PlantsSchema);
module.exports = Plant;

// Potentially need a db connection set up here
// sense check to see if it's loaded
// Importing a file - Copy start


// var arrayToInsert = [];
// csvtojson().fromFile('plants_raw.csv').then(source => {
//     // Fetching the all data from each row
//     for (var i = 0; i < source.length; i++) {
//          var oneRow = {
//             Scientific_Name: source[i]['Scientific_Name'],
//             Common_Name: source[i]['Common_Name'],
//             img_name: source[i]['img_name'],
//             Sunlight: source[i]['Sunlight'],
//             Moisture: source[i]['Moisture'],
//             Soil_Indicator:source[i]['Soil_Indicator'],
//             Plant_Spread: source[i]['Plant_Spread'],
//             Plant_Height: source[i]['Plant_Height'],
//             Indoor_Spread: source[i]['Indoor_Spread'],
//             Indoor_Height: source[i]['Indoor_Height'],
//             Toxic_Dogs: source[i]['Toxic_Dogs'],
//             Toxic_Cats: source[i]['Toxic_Cats'],
//             Plant_Habit: source[i]['Plant_Habit'],
//             Type: source[i]['Type'],
//             Indoor_Flowering: source[i]['Indoor_Flowering'],
//             Hanging: source[i]['Hanging'],
//             Bloom_Period: source[i]['Bloom_Period'],
//             Humidity: source[i]['Humidity'],
//             Air_Purifying: source[i]['Air_Purifying'],
//             Ph_Soil: source[i]['Ph_Soil'],
//             Bloom_Description: source[i]['Bloom_Description']
//          };
//          arrayToInsert.push(oneRow);
//      }
//      //inserting into the table 'plants'
//      var collectionName = 'testPlants';
//      var collection = db.collection(collectionName);
//      collection.insertMany(arrayToInsert, (err, result) => {
//          if (err) console.log(err);
//          if(result){
//              console.log('Import CSV into database successfully.');
//          }
//      });
// });

// END
																			
