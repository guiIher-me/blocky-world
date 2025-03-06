const mongoose = require('mongoose');
const { Logger } = require('./logger/Logger');
require('dotenv').config();

/**
 * The MongoDB connection URL based on environment variables.
 * @type {string}
 */
const dbUrl = `mongodb://blockyworld-backend-mongodb:${process.env.DATABASE_PORT}`;

mongoose.connect(dbUrl, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));

db.once('open', () => {
    Logger.info(`Database MongoDB ON [PORT: ${process.env.DATABASE_PORT}]`);
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Conexão com o MongoDB fechada devido à finalização da aplicação.');
        process.exit(0);
    });
});

module.exports = db;
