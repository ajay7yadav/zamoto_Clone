const DeliveryBoy = require('../models/deliveryBoy_Schema');
const Oder = require('../models/order_Schema');
const Restaurant = require('../models/restaurant_Schema');

exports.createBoy = async(req, res)=>{
    //const oderId = req.params.id;

    const boyObj = {
        name : req.body.name,
        areaCode : req.body.areaCode
    }
    try{
        const boys = await DeliveryBoy.create(boyObj);
        const restaurant = await Restaurant.findOne({areaCode : boyObj.areaCode});
        if(restaurant && restaurant.orderId.length != 0){
            let orderNo = restaurant.orderId.pop();
            // let orderNo = await Restaurant.updateOne({name : restaurant.name},{$pop : restaurant.orderId});
            await restaurant.save();
            if(orderNo){
                boys.orderId.push(orderNo);
                await boys.save();
            }
        }
        res.status(201).send(boys);

    }catch(err){
        console.log(err);
        res.status(500).send({
            message : "Internal Error !"
        })
    }
}