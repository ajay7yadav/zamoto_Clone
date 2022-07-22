const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

const dbConfig = require('./configs/db.config');

mongoose.connect(dbConfig.DB_URl,()=>{
    console.log('mongoDB connect');
});

require('./routes/restaurant_API')(app);
require('./routes/order_API')(app);
require('./routes/user_API')(app);
require('./routes/deliveryBoy_API')(app);

app.listen(2020, ()=>{
    console.log('server started');
})