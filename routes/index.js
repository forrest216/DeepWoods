var router = require('express').Router();
var passport = require('passport');


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

router.get('/', (req, res, next) => {
  res.render('index', {user: req.user});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



module.exports = router;
