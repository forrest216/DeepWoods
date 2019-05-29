var router = require('express').Router();
var passport = require('passport');
var secretsController = require('../controllers/secrets');


router.post('/', secretsController.createSecret);

module.exports = router;



