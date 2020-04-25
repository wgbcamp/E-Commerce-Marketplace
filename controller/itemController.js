const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');
var multer = require('multer')
var path = require('path');

//MULTER FILE UPLOAD//

var upload = multer({ dest: './client/public/images/'});

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './client/public/images/');    
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



module.exports = router;