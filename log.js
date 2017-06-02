/**
 * Created by neiro on 30/05/2017.
 */
const winston = require('winston');

module.exports = function (module) {
    return makeLogger(module.filename);
};
function makeLogger(path) {
    if (path.match(/app.js/)) {
        const transports = [
            new winston.transports.Console({
                timestamp: true,
                colorize: true,
                level: 'info'
            }),
            new winston.transports.File({filename: 'debug.log', level: 'debug'})
        ];
        return new winston.Logger({transports: transports})
    } else {
        return new winston.Logger({
            transports: []
        });
    }
}