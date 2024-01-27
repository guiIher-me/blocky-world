const express = require('express');
const router = express.Router();

router.get('/mensagem', (req, res) => {
  res.json({ mensagem: 'Rota GET: Olá do servidor!' });
});

router.post('/mensagem', (req, res) => {
  const { mensagem } = req.body;
  res.json({ mensagem: `Rota POST: Mensagem recebida: ${mensagem}` });
});

module.exports = router;