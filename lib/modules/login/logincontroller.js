const mongoose = require('mongoose');
const User = require('../register/registermodel');
    bcrypt = require('bcrypt'),
    SALT_VA1 = 10;

mongoose.Promise = Promise;

exports.loginUser = (req, res) => {

    //Use express Validator here
    User.findOne({ email: req.body.email })
        .then((data) => {
            if (!data) {
                return res.status(500).send("Couldnot find the data");
                return res.status(400).json({
                    code: 400,
                    status: 'Bad request',
                    message: 'The user name already exists.',
                    errMsg: err.toString()});
            
            } else if(data) {
                bcrypt.compare(req.body.password, data.password, (err, result) => {
                    if (result == true) {
                        jwt.sign({email: req.body.email}, 'sdfdsf', (err, token) => {
                            console.log("Token:" + token )
                        res.json({token:jwt.sign({email: data.email},'RESTFULAPIs')});
                        });
                    }
                        })
                    } else {
                    // res.status(500).send('Authentication Failed');
                     res.status(500).json({
                        code: 500,
                        status: 'error',
                        message: 'Failed to generate the token',
                        errMsg: err.toString()});
                    }
                })
            }