const db = require("../models");

exports.getAllProducts = (req, res) => {
	db.Product.find().then((products) => {
        console.log(JSON.stringify(products, null, "\t"));
        res.status(200).json(products);
    });
};
