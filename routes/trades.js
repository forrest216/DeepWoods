var router = require('express').Router();
var passport = require('passport');
var tradesController = require('../controllers/trades');



router.post('/', tradesController.createTrade);
// router.put('/', tradesController.updateTrade);
// router.delete('/', tradesController.deleteTrade);

module.exports = router;