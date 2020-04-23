const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    shipping: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const PurchaseItem = mongoose.model('PurchaseItem', ItemSchema, 'PurchaseItem');

module.exports = PurchaseItem;