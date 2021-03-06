var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
   by: String, // this is a googleId
   content: String,
   rating: Number,
   secret: {type: Schema.Types.ObjectId, ref: 'Secret'}
}, {
   timestamps: true
});

var userSchema = new Schema({
   userName: String,
   email: String,
   googleId: String,
   avatar: String,
   userRating: Number,
   region: String,
   reviewsAbout: [reviewSchema],
   reviewsBy: [reviewSchema],
   tagline: String,
   sharedSecrets: Number,
}, {
   timestamps: true
});

module.exports = mongoose.model('User', userSchema);