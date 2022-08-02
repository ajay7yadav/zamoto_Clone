const resController = require('../controllers/restaurant_C');
const mid = require('../middlewares/valid_restaurant');

module.exports = (app)=>{
    app.post('/zomato/v1/restaurant/createRest',[mid.verifyRequest],resController.createRestaurant);
}