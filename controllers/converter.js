/**
 * Created by neiro on 03/06/2017.
 */
const lineReader = require('line-reader');
const randomstring = require("randomstring");
const exec = require('child_process').exec;

function convertToWebm(youtubeLink) {
    const mp3Title = '%(title)s.%(ext)s';
    const fileName = randomstring.generate({length: 5, charset: 'alphabetic'});
    const cmd = 'youtube-dl --extract-audio --audio-format mp3 --restrict-filenames -o "youtube/' + mp3Title + '" ' + youtubeLink + ' > temp/'  + fileName + '.txt';
    const file = exec(cmd, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            return file;
        }
    });
}
    let content;
    lineReader.eachLine('SmgXg.txt', {encoding: 'utf8'}, function(line, last) {
        const re = /^(.*?(\b.mp3\b)[^$]*)$/i;
        if (line.match(re)) {
            content = line;
            processFile()
        }
    });
    function processFile(num) {
        return content.substring(num);
}
module.exports.convertToWebm = convertToWebm;
module.exports.processFile = processFile;