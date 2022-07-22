const Restaurant = require('../models/restaurant_Schema');
const Oder = require('../models/order_Schema');
const User = require('../models/user_Schema');
const DeliveryBoys = require('../models/deliveryBoy_Schema');

exports.takeOder = async(req, res)=>{
    const restoId = req.params.id;
    try { 
        // find is this restaurant is valid or not
        const resto = await Restaurant.findById(restoId);
        if(!resto){
            return res.status(404).send({message : "restaurant not in the range, find nearest restaurant !"});
        }
        // if restaurant is close
        if(resto.restaurantStatus == 'close'){
            return res.status(401).send({message : " restaurant is close !"});
        }
        // taking request from client
        const orderObj = {
            itemName : req.body.itemName,
            quantity : req.body.quantity,
            restaurant : restoId,
            
        };
        // creating oder
        const orders = await Oder.create(orderObj);
        // check same restaurant area has any delivery boy
        const deliveryBoys = await DeliveryBoys.findOne({areaCode : resto.areaCode});
        let orderCurrStatus;
        //if same area has any delivery boys the orderStatus change and push give oder to delivery boy
        if(!deliveryBoys){
            orderCurrStatus = "food prepair";
        }
        else{
            orderCurrStatus = "oder picked, deliveryBoy on the way...";
            deliveryBoys.orderId.push(orders.id);
            await deliveryBoys.save();
        }
        // resto pick oders by customer
        resto.orderId.push(orders._id);
        await resto.save();
        // which user order the item
        const users = await User.findById(req._id);
        await users.save();

        res.status(201).send({
            user : users.username,
            itemName : orders.itemName,
            quantity : orders.quantity,
            restaurant : resto.name,
            orderStatus : orderCurrStatus,
        });

    } catch(err) {
        console.log(err);
        res.status(500).send({
            message : " Internal error ! "
        })
    }
}

// restaurant