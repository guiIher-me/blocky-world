const express = require('express');

const router = express.Router();
const { WorldController } = require('./controllers/world/WorldController');
const { BaseController } = require('./controllers/BaseController');

// Health Check
router.get('/ping', async (_, res) => {
    res.status(200).json({ message: 'pong!' });
});

// Worlds
router.post('/worlds', (req, res) => BaseController.handle(req, res, WorldController.create));
router.get('/worlds', async (req, res) => BaseController.handle(req, res, WorldController.getAll));
router.get('/worlds/:id', async (req, res) => BaseController.handle(req, res, WorldController.getById));
router.put('/worlds/:id', async (req, res) => BaseController.handle(req, res, WorldController.update));
router.delete('/worlds/:id', async (req, res) => BaseController.handle(req, res, WorldController.delete));

module.exports = router;
