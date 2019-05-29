const Trade = require('../models/trade');
const Secret = require('../models/secret');
const User = require('../models/user');

module.exports = {
   createSecret,
   deleteSecret,
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

function deleteSecret(req, res) {
   
}
