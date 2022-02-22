var mongoose = require('mongoose');

var PlantSchema = new mongoose.Schema({
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

var Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;
