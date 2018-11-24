let errorRouter = (() => {
    'use strict';

    var express = require("express"),
    router = express.Router(),
    controller = require("./errorcontroller");
    

// router.post('/post/', controller.post);
router.route('get')
    .get(controller.getAll);

    return router;
})();

module.exports = errorRouter;