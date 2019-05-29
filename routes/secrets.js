var router = require('express').Router();
var passport = require('passport');
var secretsController = require('../controllers/secrets');


router.post('/', secretsController.createSecret);
router.put('/:id', secretsController.updateSecret);
router.delete('/:id', secretsController.deleteSecret);

module.exports = router;



