const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/ItemDB');

const newItemSeed = [
    {
        item: 'Prada Bag',
        quantity: 5,
        type: 'Clothing',
        condition: 'New',
        price: 1235,
        shipping: 'Free shipping',
        description: 'Brand new Prada leather bag with two side pockets never used and in excellent condition!',
        image: './images/handbag.jpg'
    },
    {
        item: 'Commodore 64',
        quantity: 1,
        type: 'Electronics',
        condition: 'Used',
        price: 180,
        shipping: '$10.78 shipping',
        description: 'Up for auction is a Commodore 64 in excellent working condition. 1982 model 8-bit home computer by Commodore International.',
        image: './images/commodore64.jpg'
    },
    {
        item: 'Batman Vol. 1 #1 (1940)',
        quantity: 1, 
        type: 'Books',
        condition: 'New',
        price: 567625,
        shipping: 'Free shipping',
        description: 'Batman Vol. 1 1940 Spring Issue. Brand New! **MINT CONDITION**',
        image: './images/batman.jpg'
        
    }
];


db.NewItem
    .deleteMany({})
    .then(() => db.NewItem.collection.insertMany(newItemSeed))
    .then((data) => {
        // console.log("seeds were successfully inserted");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

db.PurchaseItem
    .deleteMany({})
    .then((data) => {
        console.log("seeds were successfully inserted");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });