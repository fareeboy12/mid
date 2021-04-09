const router = require('express').Router();
const Controller = require('../controllers');

router.get('/all', Controller.Product.getAllProducts);


module.exports = router;