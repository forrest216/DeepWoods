const Trade = require('../models/trade');
const Secret = require('../models/secret');
const User = require('../models/user');

module.exports = {
   createSecret,
   updateSecret,
   deleteSecret,
   
}

function createSecret(req, res) {
   var secret = new Secret(req.body);
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

function updateSecret(req, res) {
   console.log(req.body, req.params.id);
   Secret.update({_id: req.params.id}, req.body, (err, updatedSecret) => {
      if (err) console.log(err);
      res.redirect('/users');
   });
}

function deleteSecret(req, res) {
   console.log(req.body, req.params.id);
   Secret.findOneAndDelete({_id: req.params.id}).exec((err, deletedSecret) => {
      if (err) console.log(err);
      res.redirect('/users');
   });
}
