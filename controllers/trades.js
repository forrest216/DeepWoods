const Trade = require('../models/trade');
const Secret = require('../models/secret');
const User = require('../models/user');

module.exports = {
   createTrade,
}


function createTrade(req, res) {
   var trade = new Trade(req.body);
   trade.save((err) => {
      if (err) return res.redirect('/users');
      res.redirect('/users');
   });
}
