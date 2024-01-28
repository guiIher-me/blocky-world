const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = `mongodb://blockyworld-backend-mongodb:${process.env.DATABASE_PORT}`;

mongoose.connect(dbUrl, {});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));

db.once('open', () => {
    console.log('Conectado ao MongoDB');
  });

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Conexão com o MongoDB fechada devido à finalização da aplicação.');
        process.exit(0);
    });
});

module.exports = db;