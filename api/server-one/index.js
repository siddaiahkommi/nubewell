const express = require('express');
const router = express.Router();
const queries = require('../server-one/queries');
var rp = require('request-promise');

router.get('/get', function(req, res, next) {
    queries.getAll(function(error, resuts) {
        if(error) {
            return res.json(error);
        }
        res.json(resuts);
    });
});

router.post('/create', function(req, res, next) {
    var options = {
        method: 'POST',
        uri: 'http://localhost:4000/api/two/create',
        body: req.body,
        json: true 
    };
     
    rp(options)
        .then(function (parsedBody) {
            res.json(parsedBody);
        })
        .catch(function (err) {
            res.json(err);
        });
})

module.exports = router;
