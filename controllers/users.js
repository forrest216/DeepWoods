const Trade = require('../models/trade');
const Secret = require('../models/secret');
const User = require('../models/user');

module.exports = {
   index,
   createSecret,
   createTrade,
}

function index(req, res, next) {
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

function createSecret(req, res) {
   var secret = new Secret(req.body);
   console.log(req.user);
   User.findById(req.user._id, (err, user) => {
      user.secrets.push(secret._id);
      user.save((err) => {
         secret.save((err) => {
            if (err) return res.redirect('/users');
            res.redirect('/users');
         });

      });
      
   });
}

function createTrade(req, res) {

}


