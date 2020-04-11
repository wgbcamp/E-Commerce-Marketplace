const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/ItemDB');

const newItemSeed = [
    {
        item: 'Prada Bag',
        quantity: 5,
        type: 'Clothing',
        image: './images/handbag.jpg'
    },
    {
        item: 'Commodore 64',
        quantity: 1,
        type: 'Electronics',
        image: './images/commodore64.jpg'
    }
];

db.NewItem
    .deleteMany({})
    .then(() => db.NewItem.collection.insertMany(newItemSeed))
    .then((data) => {
        console.log("seeds were successfully inserted");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });