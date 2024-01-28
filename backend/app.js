require('dotenv').config();
require('./src/db');

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/api');
const app = express();

app.use(bodyParser.json());
app.use(router);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} !`);
});
