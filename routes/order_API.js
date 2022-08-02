const oderController = require('../controllers/order_C');
const verifyJWT = require('../middlewares/verifyJWT');
const mid = require('../middlewares/valid_order');

module.exports = (app)=>{
    app.post('/zomato/v1/restaurant/takeOder/:id',[verifyJWT.token,mid.verifyOrder],oderController.takeOder);
}