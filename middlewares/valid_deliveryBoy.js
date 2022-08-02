const verifyDB = (req, res, next)=>{
    if(!req.body.name){
        return res.status(401).send({message : "please enter name"});
    }
    if(!req.body.areaCode){
        return res.status(401).send({message : "please enter areaCode"});
    }
    next();
}

module.exports = {
    verifyRequest : verifyDB
}