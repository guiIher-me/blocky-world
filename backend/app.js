require('./src/db');

require('dotenv').config();
const { FRONTEND_URL, SERVER_PORT } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./src/middlewares/authMiddleware');
const notFoundMiddleware = require('./src/middlewares/notFoundMiddleware');
const router = require('./src/routes');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: FRONTEND_URL,
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(authMiddleware);
app.use(router);
app.use(notFoundMiddleware);

app.listen(SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${SERVER_PORT} !`);
});
