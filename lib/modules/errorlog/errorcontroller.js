const errorModel = require('./errormodel');

exports.create = (err, req, res, next) =>{
    let errorModel = new errorModel({
        errMsg : err
    });
errorModel.save()
.then(data =>
    {
        res.json({message:"successfully error logged"});
    })
    .catch((err)=>
        

        {
        res.status(500).json({
            message : "server error",
            errMsg: toString()
        }
    );
    })

exports.getAll = (req, res)=>{
    errorModel.find({})
    .then((response) => {
        res.json(response);
    })
    .catch((err)=> {
        res.status(500).json({
            message : "Cannot find the error database",
            errMsg: toString()
    });
});
};
}
