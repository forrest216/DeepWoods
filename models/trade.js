var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tradeSchema = new mongoose.Schema({
   secret: { type: Schema.Types.ObjectId, ref: 'Secret' },
   content: String,
   region: String,
   users: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
   timestamps: true
});

module.exports = mongoose.model('Trade', tradeSchema);