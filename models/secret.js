var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var secretSchema = new Schema({
   recipient: String,
   creator: String,
   lat: {type: Number, required: true}, 
   lng: {type: Number, required: true},
   locale: {type: String, required: true},
   species: {type: String, required: true},
   terrain: {type: String, required: true},
   notes: {type: String, required: true},
   status: {type: String, enum: ['fresh', 'traded', 'escrow']}
}, {
   timestamps: true
});

module.exports = mongoose.model('Secret', secretSchema);