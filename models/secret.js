var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var secretSchema = new mongoose.Schema({
   
}, {
   timestamps: true
});

module.exports = mongoose.model('Secret', secretSchema);