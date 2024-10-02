const { LoggerAppender } = require('../../logger/LoggerAppender');

const requestLoggerMiddleware = async (req, res, next) => {
    const logger = new LoggerAppender();
    logger.append('[REQUEST]');
    logger.append(`${JSON.stringify({
        request: {
            method: req.method,
            url: req.url,
            body: req.body,
        },
    }, null, 2)}`);
    logger.info();

    next();
};

module.exports = { requestLoggerMiddleware };
