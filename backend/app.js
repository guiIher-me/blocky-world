/* eslint-disable global-require */
/* eslint-disable no-bitwise */
/* eslint-disable import/no-extraneous-dependencies */
require('./src/db');
require('dotenv').config();
const moment = require('moment-timezone');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const router = require('./src/routes');
const { Logger } = require('./src/logger/Logger');
const { globalErrorMiddleware } = require('./src/middlewares/globalErrorMiddleware');
const { requestLoggerMiddleware } = require('./src/middlewares/logs/requestLoggerMiddleware');
const { responseLoggerMiddleware } = require('./src/middlewares/logs/responseLoggerMiddleware');
const { notFoundMiddleware } = require('./src/middlewares/notFoundMiddleware');

const app = express();
const {
    FRONTEND_URL, SERVER_PORT, HTTPS_KEY, HTTPS_CERT,
} = process.env;

// Datetime Configurations
moment.tz.setDefault('America/Sao_Paulo');

// Cors Configurations
const corsOptions = {
    origin: FRONTEND_URL,
    credentials: true,
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

// Configurar o servidor HTTPS com certificados
const httpsOptions = {
    cert: fs.readFileSync(HTTPS_CERT),
    key: fs.readFileSync(HTTPS_KEY),
    secureProtocol: 'TLSv1_2_method',
    secureOptions: require('constants').SSL_OP_NO_SSLv2 | require('constants').SSL_OP_NO_SSLv3,
};

https.createServer(httpsOptions, app).listen(SERVER_PORT, () => {
    Logger.info(`Server ON [HTTPS] [PORT:${SERVER_PORT}]`);
}).on('error', (err) => {
    Logger.error(`Failed to start server: ${err.message}`);
});
