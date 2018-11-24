((routeHelper) => {
      'use strict';

      var express = require('express');
      var router = express.Router();
      const register = require('../modules/register/registerrout'),
            login = require('../modules/login/loginroute'),
            errorlog = require('../modules/errorlog/errorroute');
     
      routeHelper.init = (app) => {
            console.log('HereIam Dude');
            app.use('/signup/',register);
            app.use('/login/', login);
            app.use('/error/', errorlog);
      };
})(module.exports);


