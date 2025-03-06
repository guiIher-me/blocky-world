/* eslint-disable prefer-rest-params */
const { LoggerAppender } = require('../../logger/LoggerAppender');

const responseLoggerMiddleware = (req, res, next) => {
    const oldWrite = res.write;
    const oldEnd = res.end;
    const chunks = [];

    res.write = function _(chunk) {
        chunks.push(chunk);
        return oldWrite.apply(res, arguments);
    };

    res.end = function _(chunk) {
        if (chunk) chunks.push(chunk);

        const body = Buffer.concat(chunks).toString('utf8');
        const logger = new LoggerAppender();
        logger.append('[RESPONSE]');
        logger.append(`${JSON.stringify({
            response: {
                url: req.url,
                statusCode: res.statusCode,
                body,
            },
        }, null, 2)}`);
        logger.info();

        oldEnd.apply(res, arguments);
    };

    next();
};

module.exports = { responseLoggerMiddleware };
