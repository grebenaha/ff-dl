
const randomstring = require('randomstring');
const lineReader = require('line-reader');
// function ConvertToWebm() {
//     this.mp3Title = '%(title)s.%(ext)s';
//     this.fileName = randomstring.generate({length: 5, charset: 'alphabetic'});
//
// }
//
// function ReadLine() {
//     const randomFile = new ConvertToWebm().fileName + '.txt';
//     lineReader.eachLine('SmgXg.txt', {encoding: 'utf8'}, function (line, last) {
//         const re = /^(.*?(\b.webm\b)[^$]*)$/i;
//         if (line.match(re)) {
//             this.content = line;
//             processFile()
//         }
//     });
// }
// function processFile() {
//     const myContent = new ReadLine().content;
//     return myContent.substring(22);
// }
//     console.log(processFile());
let content;
    lineReader.eachLine('SmgXg.txt', {encoding: 'utf8'}, function (line, last) {
        const re = /^(.*?(\b.mp3\b)[^$]*)$/i;
        if (line.match(re)) {
            content = line;
            processFile()
        }
    });
function processFile() {
    return content.substring(22);
}
console.log(processFile());