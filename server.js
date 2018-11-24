const mongoose = require('mongoose'),
    express = require('express'),
    //route = require('./lib/route/index')
    parser = require('body-parser'),
    app = express(),
    helper = require('./lib/route/index'),
    dbconfig = require('./lib/config/config'),
    errorHandler = require('./lib/modules/errorlog/errorcontroller');

    
app.use(parser.json());


mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url,{
    useNewUrlParser:true
}).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log('Data base connection failed...exiting now');
    process.exit();
});

console.log('Here Ia m');
helper.init(app);
app.use(function(err, req, res, next){
    errorHandler.create(err,req, res,next);
})
//app.use('/api/', route);
app.listen(8000);
