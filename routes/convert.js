/**
 * Created by neiro on 26/05/2017.
 */
const express = require('express');
const router = express.Router();
const log = require('../log')(module);
const exec = require('child_process').exec;
const randomstring = require("randomstring");
const newTitle = require('../mymodules/title');

router.post('/', function(req, res, next) {
    const mp3Title = '%(title)s.%(ext)s';
    const youtubeLink = req.body.link;
    const fileName = randomstring.generate({length: 5, charset: 'alphabetic'});
    const cmd = 'youtube-dl --extract-audio --audio-format mp3 --restrict-filenames -o "youtube/' + mp3Title + '" ' + youtubeLink + ' > temp/'  + fileName + '.txt';
    exec(cmd, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            const file = newTitle.processFile();
            res.download(file);
        }

    });
});

module.exports = router;