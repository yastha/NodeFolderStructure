const express = require('express'),
      router = express.Router();
var register = require('./registercontroller');

router.post('/create/user', register.registerUser);

module.exports = router; 