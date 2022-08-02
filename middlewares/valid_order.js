const verifyOrder = (req, res, next)=>{
    if(!req.body.itemName){
        return res.status(401).send({message : "please enter product name"});
    }
    if(!req.body.quantity){
        return res.status(401).send({message : "please enter quantity 1 to 50"});
    }
    next();
}

module.exports = {
    verifyOrder : verifyOrder
}