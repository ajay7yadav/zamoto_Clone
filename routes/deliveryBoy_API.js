const boyController = require('../controllers/deliveryBoy_C');

module.exports = (app)=>{
    app.post('/zomato/v1/deliveryBoys/create',boyController.createBoy);
}