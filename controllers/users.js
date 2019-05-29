const Trade = require('../models/trade');
const Secret = require('../models/secret');
const User = require('../models/user');

module.exports = {
   index,
   user,
   createTrade,
}

function index(req, res, next) {
   // get all trades involving the user
   Trade.find({}, (err, trades) => {
      if (err) return next(err);
      res.render('index', {
         trades,
         user: req.user
      });
   });
}

function user(req, res, next) {
   // get all trades involving the user
   Trade.find({ users: { $in: [req.user._id] } }, (err, trades) => {
      if (err) return next(err);
      // get all secrets involving the user
      Secret.find({ $or: [{ creator: req.user.googleId }, { recipient: req.user.googleId }] }, (err, secrets) => {
         if (err) return next(err);
         // render user page and pass in the user Object, all of their past trades and their secrets
         res.render('users/users', {
            trades,
            secrets,
            user: req.user
         });
      })
   });
}

function createTrade(req, res) {

}


