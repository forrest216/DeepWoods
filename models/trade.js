var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
   content: {type: String, required: true},
   user: String
}) 


var tradeSchema = new mongoose.Schema({
   secret: { type: Schema.Types.ObjectId, ref: 'Secret' },
   species: String,
   content: String,
   region: String,
   messages: [messageSchema],
   createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
   tradedTo: {type: Schema.Types.ObjectId, ref: 'User'},
   status: {
      type: String,
      enum: ['Active', 'Pending', 'Traded']
   }
}, {
   timestamps: true
});

module.exports = mongoose.model('Trade', tradeSchema);