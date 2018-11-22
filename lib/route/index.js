var express = require('express');
var router = express.Router();
const register = require('../modules/register/registerrout'),
      login = require('../modules/login/loginroute');
      //error = require()

router.use('/create/user', register.registerUser);
router.use('/login/user', login.loginUser);

module.exports = router; 
