const mongoose = require('mongoose');

const DeliveryBoy = new mongoose.Schema({
    name : {
        type : String
    },
    areaCode : {
        type : Number
    },
    orderId : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'oders'
    }
});

module.exports = mongoose.model('deliveryboys',DeliveryBoy);