const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    rating: {
        type: Number
    },
    imageUrl: {
        type: String
    }
})

const Item = module.exports = mongoose.model('Item', itemSchema)