const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');


router.get('/api/item', (req, res) => {
	db.NewItem
		.find({})
		.then((results) => {
			res.json(results);
			// console.log(results);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/api/item/readpurchase', (req, res) => {
	db.PurchaseItem
		.find({})
		.then((results) => {
			res.json(results);
			// console.log(results);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/api/item', (req, res) => {
	db.NewItem.collection.insertOne(req.body)
		.then(results => res.json(results))
		.catch((err)=>{
			console.log(err);
		});

})

router.post('/api/item/purchase', (req, res) => {
	db.PurchaseItem.collection.insertOne(req.body)
		.then(results => res.json(results))
		.catch((err)=>{
			console.log(err);
		});

})

router.post('/api/item/delete', (req, res) => {
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
	
	console.log("I am" + req.body)
	let id = mongoose.Types.ObjectId(req.body.thingID);
	console.log(id);
	
	db.NewItem.deleteOne({_id: id})
		.then(results => res.json(results))
		.catch((err)=>{
			console.log(err);
		});
})

// router.post('/public/images', upload.single('selectedFile'), (req, res) =>{
// 	res.send();
// });

module.exports = router;