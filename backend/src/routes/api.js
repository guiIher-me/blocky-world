const express = require('express');
const router = express.Router();
const World = require('../models/world');

// Rota POST para criar um novo documento World
router.post('/worlds', async (req, res) => {
  try {
    const newWorld = await World.create(req.body);
    res.status(201).json(newWorld);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao criar um novo mundo' });
  }
});

// Rota PATCH para atualizar a propriedade 'name' de um documento World
router.patch('/worlds/:id/name', async (req, res) => {
  try {
    const updatedWorld = await World.findByIdAndUpdate(
      req.params.id,
      { $set: { name: req.body.name } },
      { new: true }
    );
    res.json(updatedWorld);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o nome do mundo' });
  }
});

// Rota PUT para atualizar todas as informações de um documento World
router.put('/worlds/:id', async (req, res) => {
  try {
    const updatedWorld = await World.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWorld);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar as informações do mundo' });
  }
});

// Rota DELETE para excluir um documento World
router.delete('/worlds/:id', async (req, res) => {
  try {
    await World.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o mundo' });
  }
});

// Rota GET para pegar as informações de um documento World
router.get('/worlds/:id', async (req, res) => {
  try {
    const world = await World.findById(req.params.id);
    if (world) {
      res.json(world);
    } else {
      res.status(404).json({ error: 'Mundo não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as informações do mundo' });
  }
});

router.get('/', async (req, res) => {
    res.status(200).json({ message: 'Sucesso!' });
});


module.exports = router;