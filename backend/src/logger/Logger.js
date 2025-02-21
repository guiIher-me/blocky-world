const moment = require('moment');
const { LOGTYPE } = require('./logtype.enum');

class Logger {
    static async message(message, type = LOGTYPE.INFO) {
        const datetime = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(`[${type}] [${datetime}] ${message}`);
    }

    static async log(message) {
        Logger.message(`${message}`, LOGTYPE.LOG);
    }

    static async info(message) {
        Logger.message(`${message}`, LOGTYPE.INFO);
    }

    static async warn(message) {
        Logger.message(`${message}`, LOGTYPE.WARNING);
    }

    static async error(message) {
        Logger.message(`${message}`, LOGTYPE.ERROR);
        console.error(message);
    }
}

module.exports = { Logger };
