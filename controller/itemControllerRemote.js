const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');
var multer = require('multer')
var path = require('path');

//MULTER FILE UPLOAD//

var upload = multer({ dest: './client/build/images/'});

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './client/build/images/');    
    }, 
    filename: function (req, file, cb) { 
       cb(null ,  file.originalname );   
    }
 });

var upload = multer({ 
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('avatar');

function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mimetype
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
        return cb(null, true);
    }else{
        cb('Error: Images Only!');
    }
  }


router.post('/profile', upload, function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  res.send(req.file);
})

//MULTER FILE UPLOAD//



router.post('/api/item/search', (req, res) => {
	
	var query = new RegExp(".*" + req.body.search + ".*", "i");
	
	db.NewItem
		.find( { name: { $regex: query } } )
		.then((results) => {
			res.json(results);
		})
		.catch((err) => {
			res.json(err);
		});

});

router.post('/api/item/searchByTag', (req, res) => {

	var query = new RegExp(".*" + req.body.searchTag + ".*", "i");

	db.NewItem
		.find( { type: { $regex: query } } )
		.then((results) => {
			res.json(results);
		})
		.catch((err) => {
			res.json(err);
		})
})


router.post('/api/item/byID', (req, res) => {
	
	let id = mongoose.Types.ObjectId(req.body.search);
	console.log(id);
	db.NewItem
		.find({_id: id})
		.then((results) => {
			res.json(results);
			console.log(results);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/api/item/byIDpurchased', (req, res) => {
	
	let id = mongoose.Types.ObjectId(req.body.search);
	console.log(id);
	db.PurchaseItem
		.find({_id: id})
		.then((results) => {
			res.json(results);
			console.log(results);
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
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/api/item', (req, res) => {
	console.log(req.body);
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
	
	let id = mongoose.Types.ObjectId(req.body.thingID);
	console.log(id);
	
	db.NewItem.deleteOne({_id: id})
		.then(results => res.json(results))
		.catch((err)=>{
			console.log(err);
		});
})

router.put('/api/item/update', (req, res)=> {
	console.log("update run");

	let id = mongoose.Types.ObjectId(req.body._id);
	console.log(id);

	db.NewItem.findOneAndUpdate({ "_id": id }, { "$set": { "name": req.body.name, "quantity": req.body.quantity, "type": req.body.type, "condition": req.body.condition, "price": req.body.price, "shippingCost": req.body.shippingCost, "description": req.body.description}})
		.then(results => res.json(results))
		.catch((err)=>{
			console.log(err);
		});

})

router.post('/api/signUp', (req, res)=> {
	db.User.create({
		username: req.body.username,
		password: req.body.password,
		uniqueID: req.body.uniqueID
	})
});

router.post('/api/signIn', (req, res)=>{

	var query1 = new RegExp(".*" + req.body.username + ".*", "i");
	var query2 = new RegExp(".*" + req.body.password + ".*", "i");

	db.User
		.find({username: { $regex: query1 }, password: { $regex: query2 } } )
		.then((results) => {
			res.json(results);
		})
		.catch((err) => {
			res.json(err);
		});
})

router.post('/api/searchForAccount', (req, res)=>{

	
	console.log(req.body.account);
	db.User
		.find({uniqueID: req.body.account})
		.then((results) => {
			res.json(results);
		})
})

router.post('/api/findItemSeller', (req, res)=>{

	db.User
		.find({uniqueID: req.body.account})
		.then((results) => {
			res.json(results);
		})

})

router.post('/api/searchPostsByAccount', (req, res)=>{


			db.NewItem
				.find({itemSeller: req.body.account})
				.then((results) => {
					res.json(results);
					console.log(results);
				})

				.catch((err) => {
					res.json(err);
				});
			})

router.post('/api/searchBuysByAccount', (req, res)=>{

	db.PurchaseItem
				.find({itemBuyer: req.body.account})
				.then((results) => {
					res.json(results);
					console.log(results);
				})

				.catch((err) => {
					res.json(err);
				});
			})
	
module.exports = router;
