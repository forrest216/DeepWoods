const User = require('../models/user');

module.exports = {
   index
}

function index(req, res, next) {
   console.log(req.user);
   let modelQuery = req.query.googleId ? userName : new RegExp()

}
