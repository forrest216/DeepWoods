var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
   content: {type: String, required: true},
   user: String
}) 


var tradeSchema = new mongoose.Schema({
   secret: { type: Schema.Types.ObjectId, ref: 'Secret' },
   content: String,
   region: String,
   messages: [messageSchema],
   users: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
   timestamps: true
});

module.exports = mongoose.model('Trade', tradeSchema);