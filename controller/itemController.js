const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');


router.get('/api/item', (req, res) => {
	db.NewItem
		.find({})
		.then((results) => {
			res.json(results);
			console.log(results);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;