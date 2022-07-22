const mongoose = require('mongoose');

const Restaurant = new mongoose.Schema({
    name : {
        type : String
    },
    restaurantStatus : {
        type : String,
        default : 'close'
    },
    areaCode : {
        type : Number
    },
    orderId : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'orders'
    }
});

module.exports = mongoose.model('restaurant',Restaurant);