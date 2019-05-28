var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var secretSchema = new mongoose.Schema({
   recipient: String,
   creator: String,
   position: {lat: Number, lng: Number},
   locale: String,
   species: String,
   Terrain: String,
   Notes: String,
   Status: {type: String, enum: ['fresh', 'traded', 'escrow']}
}, {
   timestamps: true
});

module.exports = mongoose.model('Secret', secretSchema);