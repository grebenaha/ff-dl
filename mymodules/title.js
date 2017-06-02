/**
 * Created by neiro on 30/05/2017.
 */
const lineReader = require('line-reader');
const randomstring = require("randomstring");

let content;

function processFileName() {
    let fileName = randomstring.generate({length: 5, charset: 'alphabetic'});
    return fileName;
}
lineReader.eachLine('SmgXg.txt', {encoding: 'utf8'}, function(line, last) {
    const re = /^(.*?(\b.mp3\b)[^$]*)$/i;
        if (line.match(re)) {
            content = line;
            processFile()
        }
});
function processFile() {
    return content.substring(22);
}

module.exports.processFileName = processFileName;
module.exports.processFile = processFile;
