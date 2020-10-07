const express = require('express');
const router = express.Router();
const queries = require('./queries');

router.get('/get', function(req, res, next) {
    queries.getAll(function(error, resuts) {
        if(error) {
            return res.json(error);
        }
        res.json(resuts);
    });
});

router.post('/create', function(req, res, next) {
    queries.create(req.body, function(error, resuts) {
        if(error) {
            return res.json(error);
        }
        res.json(resuts);
    });
})

module.exports = router;
