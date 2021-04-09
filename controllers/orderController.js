const db = require("../models");

exports.addOrder = (req, res) => {
	db.Order.create({
		items: req.body.products,
	}).then((res) => {
		res.status(200).json(res);
	});
};

// db.Product.find({ $text: { $search: req.params.name } })
// db.users.find({'name': {'$regex': 'sometext', '$options': 'i'}})