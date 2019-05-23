var router = require('express').Router();
var request = require('request');
var passport = require('passport');
var apiController = require('../controllers/api/apiController');

/* GET home page. */
router.get('/auth', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
