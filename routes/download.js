/**
 * Created by neiro on 26/05/2017.
 */
var express = require('express');
var fs = require('fs');
var router = express.Router();
var log = require('../log')(module);
var converter = require('./convert.js');

router.get('/', function(req, res, next) {
    console.log(converter.fileName);
    // fs.readFile(path, function (err, f) {
    //
    // });
    var file = 'youtube/OFFICIAL_VIDEO_Hallelujah_-_Pentatonix.mp3';
    res.download(file);
});

module.exports = router;




