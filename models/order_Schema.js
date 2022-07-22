const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    itemName : {
        type : String
    },
    quantity : {
        type : Number
    },
    restaurant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'restaurant'
    },
    orderStatus : {
        type : String
    }
});

module.exports = mongoose.model('oders',Order);