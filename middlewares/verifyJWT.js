
const jwt = require('jsonwebtoken');
const Key = require('../configs/db.config');

const verifyToken = (req, res, next) =>{
    const header = req.headers['x-access-token'];
    if(!header){
        res.status(401).send({
            message : ' enter accessToken '
        });
        return;
    }
    jwt.verify(header,Key.Key,(err, decodeToken)=>{
        if(err){
            res.status(401).send({
                message : ' Token is not valid, Enter valid accessToken'
            });
            return;
        }
        req._id = decodeToken._id;
        next();
    });
}

module.exports = {
    token : verifyToken
}