const Restaurant = require('../models/restaurant_Schema');

exports.createRestaurant = async(req, res)=>{
    let status;
    if(req.body.restaurantStatus){
        status = req.body.restaurantStatus
    }
    const rest = {
        name : req.body.name,
        restaurantStatus : status,
        areaCode : req.body.areaCode
    };
    try{
        const restaurant = await Restaurant.create(rest);
        res.status(201).send(restaurant);
    }catch(err){
        res.status(500).send({
            message : 'Internal error !'
        });
    }
}