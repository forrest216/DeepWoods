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
         secret.save((err) => {
            if (err) return res.redirect('/users');
            res.redirect('/users');
         });
}

function updateSecret(req, res) {
   Secret.update({_id: req.params.id}, req.body, (err, updatedSecret) => {
      if (err) console.log(err);
      res.redirect('/users');
   });
}

function deleteSecret(req, res) {
   Secret.findOneAndDelete({_id: req.params.id}).exec((err, deletedSecret) => {
      if (err) console.log(err);
      res.redirect('/users');
   });
}
