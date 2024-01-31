require('dotenv').config();
require('./src/db');

const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./src/middlewares/authMiddleware');
const notFoundMiddleware = require('./src/middlewares/notFoundMiddleware');
const router = require('./src/routes');
const app = express();

app.use(bodyParser.json());
app.use(authMiddleware);
app.use(router);
app.use(notFoundMiddleware);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} !`);
});
