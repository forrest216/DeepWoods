var router = require('express').Router();
var passport = require('passport');
var usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', usersController.user);


module.exports = router;

