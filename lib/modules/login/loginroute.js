const express = require('express'),
        router = express.Router();
const login = require('./logincontroller');

router.post('/login/user',login.loginUser);

module.exports = router; 
