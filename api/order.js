const router = require("express").Router();
const Controller = require("../controllers");

router.get("/add", Controller.Order.addOrder);

module.exports = router;
