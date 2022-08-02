const verifyRestaurantBody = (req, res, next)=>{
    if(!req.body.name){
        return res.status(401).send({message : "please enter restaurant name"});
    }
    if(!req.body.areaCode){
        return res.status(401).send({message : "please enter areaCode"});
    }
    next();
}

module.exports = {
    verifyRequest : verifyRestaurantBody
}