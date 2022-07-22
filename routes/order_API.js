const oderController = require('../controllers/order_C');
const verifyJWT = require('../middlewares/verifyJWT');
module.exports = (app)=>{
    app.post('/zomato/v1/restaurant/takeOder/:id',[verifyJWT.token],oderController.takeOder);
}