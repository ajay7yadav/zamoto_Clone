const boyController = require('../controllers/deliveryBoy_C');
const mid = require('../middlewares/valid_deliveryBoy');

module.exports = (app)=>{
    app.post('/zomato/v1/deliveryBoys/create',[mid.verifyRequest],boyController.createBoy);
}