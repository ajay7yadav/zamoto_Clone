const resController = require('../controllers/restaurant_C');

module.exports = (app)=>{
    app.post('/zomato/v1/restaurant/createRest',resController.createRestaurant);
}