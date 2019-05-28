var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var secretSchema = new mongoose.Schema({
   recipient: String,
   creator: String,
   lat: Number, 
   lng: Number,
   locale: {type: String, required: true},
   species: {type: String, required: true},
   terrain: {type: String, required: true},
   notes: {type: String, required: true},
   status: {type: String, enum: ['fresh', 'traded', 'escrow']}
}, {
   timestamps: true
});

module.exports = mongoose.model('Secret', secretSchema);