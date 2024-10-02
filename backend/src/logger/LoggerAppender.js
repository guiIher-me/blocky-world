const { Logger } = require('./Logger');

class LoggerAppender {
    constructor() {
        this.message = '';
    }

    append(message) {
        this.message += `${message}\n`;
    }

    async log() {
        return Logger.log(this.message);
    }

    async info() {
        return Logger.info(this.message);
    }

    async warn() {
        return Logger.warn(this.message);
    }

    async error() {
        return Logger.error(this.message);
    }
}

module.exports = { LoggerAppender };
