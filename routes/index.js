var router = require('express').Router();
var passport = require('passport');
var usersController = require('../controllers/users');


/* GET home page. */
router.get('/auth', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/'
  }
));

router.get('/', usersController.index);

router.get('/references', (req, res)=> {
  res.render('references', {user: req.user});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



module.exports = router;
