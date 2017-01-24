/**
 * Created by yantianyu on 17/1/24.
 */
var os = require('os');
var express = require('express');
var app = express();
var port = process.env.PORT || 3002;
var storage = require('./storage');

app.use(express.static(__dirname + '/static/'));

app.get('/get-status', function (req, res) {
    res.json(storage.getStatus());
});

app.get('/set-status', function (req, res) {
    storage.setStatus({
        isAccoutOn: req.query.isAccoutOn
    });
    res.json(storage.getStatus());
});

app.listen(port, function () {
    console.log('*******************************************************************************************');
    console.log('http://localhost:' + port);
    console.log('*******************************************************************************************');
});