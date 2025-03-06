/* eslint-disable import/no-extraneous-dependencies */
require('./src/db');
require('dotenv').config();
const moment = require('moment-timezone');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./src/routes');
const { Logger } = require('./src/logger/Logger');
const { globalErrorMiddleware } = require('./src/middlewares/globalErrorMiddleware');
const { requestLoggerMiddleware } = require('./src/middlewares/logs/requestLoggerMiddleware');
const { responseLoggerMiddleware } = require('./src/middlewares/logs/responseLoggerMiddleware');
const { notFoundMiddleware } = require('./src/middlewares/notFoundMiddleware');

const app = express();
const { FRONTEND_URL, SERVER_PORT } = process.env;

// Datetime Configurations
moment.tz.setDefault('America/Sao_Paulo');

// Cors Configurations
const corsOptions = {
    origin: FRONTEND_URL,
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Middlewares Setup
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(requestLoggerMiddleware);
app.use(responseLoggerMiddleware);

app.use(router);
app.use(notFoundMiddleware);
app.use(globalErrorMiddleware);

// Listen
app.listen(SERVER_PORT, () => {
    Logger.info(`Server ON [PORT:${SERVER_PORT}]`);
});
